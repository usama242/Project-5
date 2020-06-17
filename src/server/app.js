const dotenv = require("dotenv");
dotenv.config();

const pixabay_api_key = process.env.PIXABAY_API_KEY;
const weather_api_key = process.env.WEATHER_API_KEY;
const geoNamesURL = "http://api.geonames.org/searchJSON?q=";
const username = process.env.USERNAME;

const getCityCoordinates = async (req, res) => {
  // res equals to the result of fetch function
  const result = await fetch(
    geoNamesURL + req.body.text + "&maxRows=10&" + "username=" + username
  );
  try {
    const cityData = await result.json();
    return cityData;
  } catch (error) {
    console.log("error", error);
  }
};

exports.getCityCoordinates = getCityCoordinates;
