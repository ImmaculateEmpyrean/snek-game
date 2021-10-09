# Flappy-Bird ONLINE

### Connecting with Flappy-Bird players around the **WORLD** anonymously was the object in writing this website.

### The central **Database** (a single file) is used to store and display **HIGHSCORES** to all players around the world.

### This Website is hosted live at the url: https://bird-flap-game.herokuapp.com/

---

## Contents Of This Project

- Back-End
- Front-End
- Dev-Ops

## Back-End

    node server.js

The server.js is the code required to setup the express server.

The highScores.json file is the single database file and is required by the server.js

The Procfile can be used to deploy to heroku easily.

## Front-End

    npm run build

The above command must be run within the context front-end to build the front-end.

The Front-End was built using Vue3 and Materializecss and as such can be built using the above command.

## Dev-Ops

    npm run build-deploy

The above command runs the script **build-deploy.js** located in the root directory.

The Entire project (both front and back end) is **BUILT** and **DEPLOYED** to heroku using a single script **build-deploy.js**, modifying this script maybe a good starting point to edit the project and hopefully deploy it with ease.

This **build-deploy.js** is the script you want to use even if building the application **manually** is the only object.
