# Stage 1 (Optional for Multi-Stage Builds)
FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

RUN mkdir /tmp/dependencies
COPY --from=0 /app/node_modules /tmp/dependencies

# Stage 2 (or Single Stage if not using Multi-Stage)
FROM node:slim

WORKDIR /app

COPY --from=builder /tmp/dependencies /app/node_modules 
COPY package.json ./
COPY src/ ./  
# Assuming application code is in src subfolder

# Environment Variables (replace with your actual values)
ENV DB_HOST mongodb+srv://Alveodata:kTPctM7rPqNeNGa@firstcluster.v33gplb.mongodb.net/?
ENV DB_PORT 5432

EXPOSE 80

USER node  # Run application process as non-root user

CMD [ "npm", "start" ]
