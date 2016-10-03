FROM node:wheezy

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN mkdir -p /usr/src/app/dist

# Build source code
RUN npm run build

# Copy public and views folders to dist
RUN mv /usr/src/app/public /usr/src/app/dist/public
RUN mv /usr/src/app/views /usr/src/app/dist/views

# Source has been built, let's cleanup
RUN rm -rf /usr/src/app/bin/* && \
    rm -rf /usr/src/app/models/* && \
    rm -rf /usr/src/app/routes/* && \
    rm -rf /usr/src/app/services/* && \
    rm -rf /usr/src/app/scripts/* && \
    rm -rf /usr/src/app/*.js && \
    rm -rf /usr/src/app/Dockerfile && \
    rmdir /usr/src/app/bin/ && \
    rmdir /usr/src/app/models/ && \
    rmdir /usr/src/app/routes/ && \
    rmdir /usr/src/app/scripts/ && \
    rmdir /usr/src/app/services/

EXPOSE 3000