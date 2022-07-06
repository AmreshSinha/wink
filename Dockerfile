FROM node:16-alpine
# COPY package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm i
# Copy all the files
COPY . .
# Build
RUN npm run build
# Using nginx for Production image
FROM nginx:1.23
# Copying our nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf
# Copy our Build files so that nginx can serve it
COPY --from=build /build /usr/share/nginx/html