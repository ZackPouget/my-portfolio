# ---- Stage 1: Build ----
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# ---- Stage 2: Run ----
FROM node:20-slim AS runner
WORKDIR /app

# Set NODE_ENV to production for optimization
ENV NODE_ENV=production

# Copy only what we need from the builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/node_modules ./node_modules

# Expose the default Next.js port
EXPOSE 3000

# Set the default command
CMD ["npm", "run", "start"]
