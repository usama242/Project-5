import { addElements, addWeather } from "./functions.js";
const currentLocation = window.location;
//variables
const port = 5000;
const input = document.getElementById("autocomplete-input");
const submit = document.getElementById("submit");
const start_input = document.getElementById("start_date");
const finish_input = document.getElementById("finish_date");
const popular = document.getElementById("popular");
const popular_header = document.getElementById("popular_header");

const button = submit.addEventListener("click", (e) => {
  e.preventDefault();
  const destination = input.value;
  const start = new Date(start_input.value);
  const finish = new Date(finish_input.value);
  fetch(
    `${currentLocation.protocol}//${currentLocation.hostname}:${port}/city`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ destination }),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      const query = res[0];
      popular_header.innerHTML = "Points of Interest";
      popular.innerHTML = "";
      res[1].results
        .map((place) => place.name)
        .forEach(
          (point) =>
            (popular.innerHTML += `<li class="collection-item flow-text">${point}</li>`)
        );
      addElements(query, destination, start, finish);
      fetch(
        `${currentLocation.protocol}//${currentLocation.hostname}:${port}/weather`,
        {
          //chaining promises
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          addWeather(res, start, finish);
        });
    })
    .catch((error) => console.log(error));
});
export { button };
