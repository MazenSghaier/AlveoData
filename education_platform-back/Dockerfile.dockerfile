
FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

RUN mkdir /tmp/dependencies
COPY --from=0 /app/node_modules /tmp/dependencies


FROM node:slim

WORKDIR /app

COPY --from=builder /tmp/dependencies /app/node_modules 
COPY package.json ./
COPY src/ ./  

ENV DB_HOST mongodb+srv://Alveodata:kTPctM7rPqNeNGa@firstcluster.v33gplb.mongodb.net/?
ENV DB_PORT 27017

EXPOSE 80

USER node  # Run application process as non-root user

CMD [ "npm", "start" ]
