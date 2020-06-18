const dotenv = require("dotenv");
dotenv.config();

const fetch = require("node-fetch");
const pixabay_api_key = process.env.PIXABAY_API_KEY;
const weather_api_key = process.env.WEATHER_API_KEY;
const geoNamesURL = "http://api.geonames.org/searchJSON?q=";
const usernamekey = process.env.USERNAMEKEY;

const getCityCoordinates = async (req, res) => {
  const destination = req.body.destination;
  // res equals to the response of fetch function
  const result = await fetch(
    geoNamesURL + destination + "&maxRows=10&username=" + usernamekey
  );
  try {
    const cityData = {};
    const response = await result.json();

    cityData.latitude = response.geonames[0].lat;
    cityData.longitude = response.geonames[0].lng;
    cityData.country = response.geonames[0].countryName;

    res.send(cityData);
  } catch (error) {
    console.log("error", error);
  }
};

exports.getCityCoordinates = getCityCoordinates;
