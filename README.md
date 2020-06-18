# Udacity Project 5:

# Travel Website

- This website asks user to input a the date and destination they want to travel and the website retrieves weather forecast as well as photos of that place
- It uses various APIs to extract different data they are:
- [Geonames API](http://www.geonames.org/export/web-services.html). To fetch the latitude and longitude co-ordinates of the city.
- [Weatherbit API](https://www.weatherbit.io/account/create). To fetch the weather forecasting for the day of travel.
- [Pixabay API](https://pixabay.com/api/docs/). To fetch the picture of the city they are visiting.
- The website uses Express for server and routing
- The app uses Webpack as a build tool
- The website is compatible with older browsers thanks to ES6 transpiling to vanilla javascript using Babel
- The website is fully responsive
- It uses Materialize CSS library for styling. You can read more about it [here](https://materializecss.com/getting-started.html)
- It also uses some custom SASS styles which are then compiled to CSS
- It uses JEST for testing

## Initializing the app

### Install all the dependencies

`$ npm i`

### Development mode

To run in development mode use following code

`$ npm run build-dev`

### Production mode

Generate the dist files first and then start server at port 8000

`$ npm run build-prod`

`$ npm run start`

## Configs

There are two webpack config files for both development mode(`webpack.config.dev.js`) and production mode(`webpack.config.prod.js` )

There is also a `package.json` to manage dependencies

## API Key

This app uses environmental variables to protect the private keys. The API key & Id must be obtained before running the app. You can obtain them from the aforementioned website.

## Offline Functionality

The project have service workers set up in webpack to provide the offline functionality of our app.
