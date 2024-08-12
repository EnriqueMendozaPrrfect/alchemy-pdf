# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install playwright
RUN npx playwright install

# Install playwright dependencies
RUN npx playwright install-deps

# Bundle app source
COPY . .

# Copy the .env and .env.development files
COPY .env .env.development ./

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 9670

# Start the server using the production build
CMD ["npm", "run", "start:prod"]
