FROM node:18-alpine as build
# COPY package.json and yarn.lock
COPY package*.json ./
COPY yarn.lock ./
# Install dependencies
RUN yarn install
# Copy all the files
COPY . .
# Build
RUN yarn build
# Using nginx for Production image
FROM nginx:1.23
# Copying our nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf
# Copy our Build files so that nginx can serve it
COPY --from=build /build /usr/share/nginx/html