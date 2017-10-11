# Movie Search

Movie Search is an application which allows You to search movie. It is using themoviedb.org as a database.

# Requirements

To run application You need NodeJS installed on Your computer/server. You also need to have npm or yarn package as well.

# How to?

1. First You have to build application - simply run `npm i && npm run build` or `yarn && yarn build`
2. 
* Content of application will be stored in `public` directory. You need to set this directory as root directory on Your server - ex. nginx. 
* Second option is to use eg. `http-server` node package, install this package globally, then go to public directory and simply run command in console `http-server`. Application will run on localhost:8080