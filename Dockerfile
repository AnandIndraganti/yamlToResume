# Multi-stage Dockerfile for production

# Backend Stage
FROM node:18-bullseye-slim as backend

# Install LaTeX system
RUN apt-get update && apt-get install -y --no-install-recommends \
    texlive-latex-base \
    texlive-latex-recommended \
    texlive-fonts-recommended \
    texlive-latex-extra \
    texlive-fonts-extra \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy backend files
COPY backend/package.json backend/package-lock.json ./
RUN npm ci

COPY backend/ .

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 8080

# Start the application
CMD ["node", "dist/index.js"]