# Search in Github

## ð·ï¸ Description

The purpose is to create a simple API using express and a showcase mobile app using Expo (React Native).

The API should get data from the github API, and store them in a PostgreSQL database.

Link to the subject : [https://github.com/pu-erh/search-in-github](https://github.com/pu-erh/search-in-github)



## ð Features

Here is some of the features that are actually present in the app :

 - A search history is present on the app
 - The search history is stored in the local storage. He should be cached if you restart the app.

## ð Configuration

Before you can install and use the project, you need to define some environment variables in .env file.

You need one .env file in each subdirectory.

For the client, the variables are :

```dotenv
# This is the api url, wich are the server address
API_URL=""
```

ð¡  A version of the server are actually available at [https://webmdmfs1-search-in-github.herokuapp.com/](https://webmdmfs1-search-in-github.herokuapp.com/)

For the server, the variables are :

```dotenv
# 
DATABASE_URL=""
# This is a github token, wich are actually mandatory, maybe not later
GITHUB_TOKEN=""
# The port your server should be listening (optional)
PORT=
```

â ï¸You need to set the environment variables before going to the next step. If not, the project might not working.

## ðï¸ Installation

### Server

For launching the project, you need to follow the next steps :

```shell
npm install
npm run build
npm start
```

Your server should be accessible at [http://localhost:3000](http://localhost:3000) (or the port you define in .env file)

### Client

You need to have a emulator opened, or a device available.

You can follow this steps to use : [https://docs.expo.dev/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet](https://docs.expo.dev/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet)

For launching the project, you need to follow the next steps :

```shell
npm install
npm run start
```

Your expo server should be accessible at [http://localhost:19000](http://localhost:19000)

## ð¦ WIP

There is a list of things to do for making the app much cooler and useful for the user :

 - Implementation of User settings like (dark mode, cleaning search history and more)
 - Implementation of Gettings all the in-depth elements of a user (gists, repositories, followers, following and more)
 - Making these elements visible in the app
 - Generate a release file for the app, who can be installed without expo

## ð Credits

### Server

Typescript : [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

Express : [https://expressjs.com/fr/](https://expressjs.com/fr/)

Prisma : [https://www.prisma.io/](https://www.prisma.io/)

Nodemon : [https://nodemon.io/](https://nodemon.io/)

Got : [https://github.com/sindresorhus/got](https://github.com/sindresorhus/got)

Heroku : [https://www.heroku.com](https://www.heroku.com)

### Client

React-native : [https://reactnative.dev/](https://reactnative.dev/)

Babel : [https://babeljs.io/](https://babeljs.io/)

Expo : [https://expo.dev/](https://expo.dev/)

Redux : [https://redux.js.org/](https://redux.js.org/)

### Global

Husky : [https://typicode.github.io/husky/](https://typicode.github.io/husky/)

Eslint : [https://eslint.org/](https://eslint.org/)


## Made by Elouan MAILLY ([Timberzzman](https://github.com/timberzzman)) 