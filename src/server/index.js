let path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server_app = require("./app.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});
const port = 5000;
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`The app is running on port ${port}!`);
});

app.post("/city", server_app.getCityCoordinates);

app.post("/weather", server_app.getWeather);
