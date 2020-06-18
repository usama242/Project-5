// The keys are stored in .env file. Be sure to create one and put the keys
const dotenv = require("dotenv");
dotenv.config();

const fetch = require("node-fetch");
const pixabay_api_key = process.env.PIXABAY_API_KEY;
const weather_api_key = process.env.WEATHER_API_KEY;
const geoNamesURL = "http://api.geonames.org/searchJSON?q=";
const weatherURL = "http://api.weatherbit.io/v2.0/forecast/daily?";
const usernamekey = process.env.USERNAMEKEY;

const getCityCoordinates = async (req, res) => {
  const destination = req.body.destination;
  const result = await fetch(
    geoNamesURL + destination + "&maxRows=10&username=" + usernamekey
  );
  try {
    const cityData = {};
    const response = await result.json();
    // the 0 index is because we want the first result which will be exact since autocomplete was implemented
    cityData.latitude = response.geonames[0].lat;
    cityData.longitude = response.geonames[0].lng;
    cityData.country = response.geonames[0].countryName;
    console.log(cityData);
    res.send(cityData); // since the data is sent across server to client side. The return statement won't work
  } catch (error) {
    console.log("error", error);
  }
};

const getWeather = async (req, res) => {
  const lat = req.body.res.latitude;
  const lon = req.body.res.longitude;

  const result = await fetch(
    weatherURL + "&lat=" + lat + "&lon=" + lon + "&key=" + weather_api_key
  );
  try {
    const weatherData = [];
    const response = await result.json();

    response.data.forEach((day) => {
      const weather = {};
      weather.date = day.valid_date;
      weather.temp = day.temp;
      weather.description = day.weather.description;
      weatherData.push(weather);
    });
    console.log(weatherData);
    res.send(weatherData);
  } catch (error) {
    console.log("error", error);
  }
};

exports.getCityCoordinates = getCityCoordinates;
exports.getWeather = getWeather;
