## This builds the Google Run container

# Use the official Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:10

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy local code to the container image.
COPY . .

# Run the web service on container startup.
CMD [ "node", "out/main.js" ]
