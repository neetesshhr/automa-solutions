# Multi-stage build for React/Vite application
# Stage 1: Build the application
FROM node:20-alpine AS builder


WORKDIR /app

# Copy package files
COPY package*.json ./
# COPY bun.lockb ./

# Install dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image with nginx
FROM nginx:alpine AS production

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# Stage 3: Development image
FROM node:20-alpine AS development

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lockb ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy source code
COPY . .

# Expose development port
EXPOSE 8080

# Start development server
CMD ["npm", "run", "dev"]
