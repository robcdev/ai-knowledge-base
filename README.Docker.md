# Docker Setup for AI Knowledge Base

This monorepo uses Docker and Docker Compose to containerize and orchestrate the backend and frontend services.

## Prerequisites

- Docker Desktop (or Docker Engine + Docker Compose)
- Docker version 20.10 or higher

## Project Structure

```
apps/
  backend/          # FastAPI Python backend
  web/              # Angular frontend
```

## Quick Start

### Development Mode

Start both services with hot-reload:

```bash
docker-compose up
```

Or run in detached mode:

```bash
docker-compose up -d
```

Services will be available at:
- **Backend API**: http://localhost:8000
- **Frontend**: http://localhost:4200
- **Backend API Docs**: http://localhost:8000/docs

### Production Mode

Build and run optimized production containers:

```bash
docker-compose -f docker-compose.prod.yml up --build
```

Production services:
- **Backend API**: http://localhost:8000
- **Frontend**: http://localhost:80

## Available Commands

### Start services
```bash
docker-compose up
```

### Start in background
```bash
docker-compose up -d
```

### Stop services
```bash
docker-compose down
```

### Rebuild containers
```bash
docker-compose build
```

### View logs
```bash
docker-compose logs -f
```

### View logs for specific service
```bash
docker-compose logs -f backend
docker-compose logs -f web
```

### Execute commands in containers
```bash
# Backend Python shell
docker-compose exec backend python

# Frontend npm commands
docker-compose exec web npm run build
```

## Service Details

### Backend (FastAPI)
- **Port**: 8000
- **Hot-reload**: Enabled in development
- **Health check**: Configured at `/` endpoint
- **Dependencies**: Managed via `requirements.txt`

### Frontend (Angular)
- **Development Port**: 4200 (dev server with hot-reload)
- **Production Port**: 80 (nginx serving static files)
- **Build**: Multi-stage Dockerfile for optimization

## Environment Variables

You can customize the setup by creating a `.env` file:

```env
BACKEND_PORT=8000
WEB_PORT=4200
```

## Troubleshooting

### Port already in use
If ports 8000 or 4200 are already in use, modify the port mappings in `docker-compose.yml`:

```yaml
ports:
  - "8001:8000"  # Map host port 8001 to container port 8000
```

### Rebuild after dependency changes
```bash
docker-compose build --no-cache
docker-compose up
```

### Clear all containers and volumes
```bash
docker-compose down -v
```

### Check container status
```bash
docker-compose ps
```

## Network

Services communicate via the `app-network` bridge network. The frontend can reach the backend using the service name `backend`:

```typescript
// Example API call from Angular
const apiUrl = 'http://backend:8000';
```

For frontend to backend communication from the browser, use `http://localhost:8000` since the browser runs outside Docker.

