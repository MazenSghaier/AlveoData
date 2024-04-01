# Base Image - ubuntu latest
FROM node

# Copy Workdir contents
ADD checklist-app /checklist-app/
WORKDIR /checklist-app/

# Create a Build
RUN npm install
RUN npm start

EXPOSE 3000

# Runtime App
CMD npm run dev