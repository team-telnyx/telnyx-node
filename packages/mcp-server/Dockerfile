# Dockerfile for Telnyx MCP Server
#
# This Dockerfile builds a Docker image for the MCP Server.
#
# To build the image locally:
#   docker build -f packages/mcp-server/Dockerfile -t telnyx-mcp:local .
#
# To run the image:
#   docker run -i telnyx-mcp:local [OPTIONS]
#
# Common options:
#   --tool=<name>              Include specific tools
#   --resource=<name>          Include tools for specific resources
#   --operation=read|write     Filter by operation type
#   --client=<type>            Set client compatibility (e.g., claude, cursor)
#   --transport=<type>         Set transport type (stdio or http)
#
# For a full list of options:
#   docker run -i telnyx-mcp:local --help
#
# Note: The MCP server uses stdio transport by default. Docker's -i flag
# enables interactive mode, allowing the container to communicate over stdin/stdout.

# Build stage
FROM node:24-alpine AS builder

# Enable corepack to use pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install bash for build script
RUN apk add --no-cache bash openssl

# Set working directory
WORKDIR /build

# Copy entire repository
COPY . .

# Set CI environment variable so pnpm install runs without prompts
ENV CI=true

# Install all dependencies and build everything
RUN pnpm install --frozen-lockfile && \
    pnpm build

# Production stage
FROM node:24-alpine

# Add non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Set working directory
WORKDIR /app

# Copy the built mcp-server preserving directory structure
COPY --from=builder /build/packages/mcp-server/dist ./packages/mcp-server/dist
COPY --from=builder /build/packages/mcp-server/node_modules ./packages/mcp-server/node_modules

# Copy node_modules from root (pnpm hoists dependencies here)
COPY --from=builder /build/node_modules ./node_modules

# Copy the built telnyx into node_modules
COPY --from=builder /build/dist ./node_modules/telnyx

# Change ownership to nodejs user
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# The MCP server uses stdio transport by default
# No exposed ports needed for stdio communication

# Set the entrypoint to the MCP server
ENTRYPOINT ["node", "packages/mcp-server/dist/index.js"]

# Allow passing arguments to the MCP server
CMD []
