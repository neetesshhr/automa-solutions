# Docker Setup for Automa Solutions

This document describes the Docker configuration for the Automa Solutions React application.

## 📋 Overview

The Docker setup includes:
- **Multi-stage Dockerfile** with development and production targets
- **Docker Compose** configuration with profiles for different environments
- **Nginx** for serving production builds
- **Health checks** for monitoring
- **Automated testing** script

## 🏗️ Architecture

### Development Mode
- Uses Node.js 18 Alpine image
- Hot-reloading with Vite dev server
- Volume mounting for live code updates
- Runs on port `3000`

### Production Mode
- Multi-stage build (Node.js for building, Nginx for serving)
- Optimized static file serving with Nginx
- Gzip compression enabled
- Security headers configured
- Health check endpoint at `/health`
- Runs on port `3080`

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed and running
- Docker Compose v2.0+

### Running the Application

#### Development Mode
```bash
# Start development server
docker-compose --profile dev up --build

# Access at: http://localhost:3000
# Code changes will trigger automatic rebuilds
```

#### Production Mode
```bash
# Start production server
docker-compose --profile prod up --build

# Access at: http://localhost:3080
# Health check: http://localhost:3080/health
```

#### Stop Services
```bash
# Stop all services
docker-compose down

# Stop specific profile
docker-compose --profile dev down
docker-compose --profile prod down
```

## 🧪 Testing

An automated test script is provided to verify the Docker setup:

```bash
# Make executable (first time only)
chmod +x test-docker.sh

# Run tests
./test-docker.sh
```

The test script will:
- ✅ Verify Docker is running
- 🚀 Test development mode functionality
- 🏗️ Test production mode functionality  
- 🏥 Verify health checks
- 📊 Show container status and built images
- 🧹 Clean up containers

## 📁 File Structure

```
.
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Docker Compose configuration
├── nginx.conf             # Nginx configuration for production
├── .dockerignore          # Files to exclude from build context
├── test-docker.sh         # Automated testing script
└── DOCKER.md              # This documentation
```

## 🔧 Configuration Details

### Dockerfile Stages

1. **Builder Stage**: 
   - Installs dependencies and builds the application
   - Uses `npm ci` for faster, reproducible installs

2. **Production Stage**: 
   - Uses Nginx Alpine for minimal footprint
   - Serves optimized build files
   - Includes health check endpoint

3. **Development Stage**: 
   - Full Node.js environment
   - Volume mounting for live reloading
   - Vite dev server configuration

### Docker Compose Profiles

- **dev**: Development environment with hot reloading
- **prod**: Production environment with Nginx

### Port Mapping

| Service | Container Port | Host Port | Description |
|---------|----------------|-----------|-------------|
| Development | 8080 | 3000 | Vite dev server |
| Production | 80 | 3080 | Nginx server |

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NODE_ENV` | development/production | Environment mode |
| `VITE_DEV_SERVER_HOST` | 0.0.0.0 | Dev server host binding |

## 🏥 Health Monitoring

The production container includes a health check:
- **Endpoint**: `GET /health`
- **Response**: `healthy` (200 OK)
- **Interval**: Every 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3 attempts

Docker Compose health check status:
```bash
docker-compose ps
# Shows health status: starting, healthy, unhealthy
```

## 🎯 Performance Optimizations

### Production Build
- **Gzip compression** for all text-based assets
- **Static asset caching** (1 year cache headers)
- **Security headers** for enhanced protection
- **Minimal image size** (~53MB vs ~664MB dev)

### Build Caching
- Multi-stage build for layer caching
- Package files copied before source code
- Docker layer caching optimizations

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using the port
   lsof -i :3000
   lsof -i :3080
   
   # Update port in docker-compose.yml if needed
   ```

2. **Build failures**
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker-compose build --no-cache
   ```

3. **Container won't start**
   ```bash
   # Check logs
   docker-compose logs app-dev
   docker-compose logs app-prod
   ```

### Useful Commands

```bash
# View running containers
docker-compose ps

# View logs (follow)
docker-compose logs -f app-prod

# Execute into running container
docker-compose exec app-dev sh
docker-compose exec app-prod sh

# View built images
docker images | grep automa-solutions

# Remove all containers and networks
docker-compose down --volumes --remove-orphans
```

## 🚀 Deployment Notes

For production deployment:
1. Update security headers in `nginx.conf`
2. Configure proper SSL/TLS termination
3. Set up proper logging and monitoring
4. Consider using Docker secrets for sensitive data
5. Implement proper backup strategies

## 📝 Development Workflow

1. **Local Development**:
   ```bash
   docker-compose --profile dev up
   # Edit code - changes auto-reload
   ```

2. **Testing Production Build**:
   ```bash
   docker-compose --profile prod up --build
   # Verify production optimization
   ```

3. **Running Tests**:
   ```bash
   ./test-docker.sh
   # Comprehensive testing of both modes
   ```

## 📊 Image Sizes

- **Development Image**: ~664MB (includes all dev dependencies)
- **Production Image**: ~53MB (minimal Nginx + built assets)

The production image is **92% smaller** than the development image, making it ideal for deployment.

---

## 🎉 Success!

Your Automa Solutions application is now fully containerized with Docker! 

- ✅ Development environment with hot reloading
- ✅ Production environment with Nginx optimization  
- ✅ Health checks and monitoring
- ✅ Automated testing
- ✅ Comprehensive documentation
