# Use the official Node.js 20 image as a parent image
FROM node:20-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install necessary libs for Puppeteer
RUN apt-get update && apt-get install -y wget gnupg2 ca-certificates --no-install-recommends \
    && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && apt install -y ./google-chrome-stable_current_amd64.deb \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && rm google-chrome-stable_current_amd64.deb

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Your application's default port
EXPOSE 3000

CMD ["npm", "run", "start:prod"]
