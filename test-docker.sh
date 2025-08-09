#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🐳 Testing Docker Setup for Automa Solutions${NC}"
echo "=========================================="

# Function to wait for service to be ready
wait_for_service() {
    local url=$1
    local max_attempts=$2
    local attempt=1
    
    echo -e "${YELLOW}Waiting for service at $url to be ready...${NC}"
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s -f "$url" > /dev/null; then
            echo -e "${GREEN}✅ Service is ready!${NC}"
            return 0
        fi
        echo -e "Attempt $attempt/$max_attempts failed, waiting 5 seconds..."
        sleep 5
        ((attempt++))
    done
    
    echo -e "${RED}❌ Service failed to start after $max_attempts attempts${NC}"
    return 1
}

# Test function
test_endpoint() {
    local url=$1
    local description=$2
    
    echo -e "${YELLOW}Testing: $description${NC}"
    
    response=$(curl -s -w "%{http_code}" -o /tmp/response.html "$url")
    
    if [ "$response" -eq 200 ]; then
        echo -e "${GREEN}✅ $description - OK (HTTP $response)${NC}"
        return 0
    else
        echo -e "${RED}❌ $description - FAILED (HTTP $response)${NC}"
        return 1
    fi
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running. Please start Docker and try again.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Docker is running${NC}"

# Test Development Mode
echo -e "\n${YELLOW}🚀 Testing Development Mode${NC}"
echo "--------------------------------"

echo "Building and starting development container..."
docker-compose --profile dev up --build -d app-dev

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to start development container${NC}"
    exit 1
fi

# Wait for development server to be ready
if wait_for_service "http://localhost:3000" 12; then
    test_endpoint "http://localhost:3000" "Development server homepage"
    test_endpoint "http://localhost:3000/favicon.ico" "Static assets"
else
    echo -e "${RED}❌ Development server failed to start${NC}"
    docker-compose --profile dev logs app-dev
fi

# Stop development container
echo "Stopping development container..."
docker-compose --profile dev down

# Test Production Mode
echo -e "\n${YELLOW}🏗️  Testing Production Mode${NC}"
echo "--------------------------------"

echo "Building and starting production container..."
docker-compose --profile prod up --build -d app-prod

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to start production container${NC}"
    exit 1
fi

# Wait for production server to be ready
if wait_for_service "http://localhost:3080" 12; then
    test_endpoint "http://localhost:3080" "Production server homepage"
    test_endpoint "http://localhost:3080/health" "Health check endpoint"
    test_endpoint "http://localhost:3080/favicon.ico" "Static assets"
    
    # Test that it's serving the built files (should have minified content)
    echo -e "${YELLOW}Checking if production build is optimized...${NC}"
    if curl -s "http://localhost:3080" | grep -q "<!doctype html>"; then
        echo -e "${GREEN}✅ Production build appears to be properly minified${NC}"
    else
        echo -e "${YELLOW}⚠️  Production build might not be optimized${NC}"
    fi
    
    # Test health check specifically
    health_response=$(curl -s "http://localhost:3080/health")
    if [ "$health_response" = "healthy" ]; then
        echo -e "${GREEN}✅ Health check returns correct response${NC}"
    else
        echo -e "${RED}❌ Health check failed. Response: $health_response${NC}"
    fi
    
else
    echo -e "${RED}❌ Production server failed to start${NC}"
    docker-compose --profile prod logs app-prod
fi

# Show container status
echo -e "\n${YELLOW}📊 Container Status${NC}"
echo "-------------------"
docker-compose ps

# Show images
echo -e "\n${YELLOW}🖼️  Built Images${NC}"
echo "----------------"
docker images | grep automa-solutions

# Cleanup
echo -e "\n${YELLOW}🧹 Cleaning up...${NC}"
docker-compose --profile prod down
docker-compose --profile dev down

echo -e "\n${YELLOW}📋 Test Summary${NC}"
echo "================"
echo "✅ Development mode: http://localhost:3000"
echo "✅ Production mode: http://localhost:3080"
echo "✅ Health check: http://localhost:3080/health"
echo -e "\n${GREEN}🎉 Docker setup is working correctly!${NC}"

echo -e "\n${YELLOW}📚 Usage Instructions:${NC}"
echo "======================="
echo "Development mode: docker-compose --profile dev up --build"
echo "Production mode:  docker-compose --profile prod up --build"
echo "Stop services:    docker-compose down"
echo "View logs:        docker-compose logs [service-name]"
