# Suggestion React

Suggestion application using React + Redux + NodeJs + MongoDb 

## Pre-requisites

- [Docker](https://docs.docker.com/docker-for-mac/)
- [Node](https://nodejs.org/en/download/) (v6.6+)
- Bower (using: `npm install -g bower`)

## Running the app in development mode

First time use: 

- From the `frontend-codebase` folder, run `bower install && npm install` to install the necessary dependencies 
- Run `chmod +x` on the entrypoint script inside the `backend-codebase/scripts` folder

In order to start the development, run the default `gulp` task from the front-end project.

Finally, run `docker-compose up web` in a terminal to start the server.

You can now browse `http://localhost` to see the site running.

Each time you make a change to the code - front or back, the server will restart and you can reload the page to test your changes.