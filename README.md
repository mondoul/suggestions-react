# Suggestion React

Suggestion application using React Js + Flux + NodeJs + MongoDb 

## Pre-requisites

- [Docker](https://docs.docker.com/docker-for-mac/)
- [Node](https://nodejs.org/en/download/) (v4.4+)
- Bower (using: `npm install -g bower`)

## Running the app in development mode

First time use: 

- From the `frontend-codebase` folder, run `bower install && npm install` to install the necessary dependencies 
- Run `chmod +x` on all the scripts inside the `backend-codebase/scripts` folder

In order to start the development, run the default `gulp` task from the front-end project.

Finally, run `./backend-codebase/scripts/development.sh` in a terminal to start the server.

You can now browse `http://localhost` to see the site running.

Each time you make a change to the code - front or back, the server will restart and you can reload the page to test your changes.