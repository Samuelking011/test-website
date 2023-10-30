FROM nginx:alpine

# Create app directory
WORKDIR /usr/share/nginx/html

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY index.html ./
COPY style.css ./
COPY ./images ./images
COPY ./js ./js

EXPOSE 3000
