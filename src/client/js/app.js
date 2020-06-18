//variables
const port = 5000;
const input = document.getElementById("autocomplete-input");
const submit = document.getElementById("submit");
const start_input = document.getElementById("start_date");
const finish_input = document.getElementById("finish_date");

const button = submit.addEventListener("click", (e) => {
  e.preventDefault();
  const destination = input.value;
  const start_date = new Date(start_input.value);
  const finish_date = new Date(finish_input.value);
  fetch(`http://localhost:${port}/city`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ destination }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      const query = res[0];
      addElements(query, destination, start_date, finish_date);
      console.log(query);
      fetch(`http://localhost:${port}/weather`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    })
    .catch((error) => console.log(error));
});

const addElements = (data, city, start, finish) => {
  const header = document.getElementById("city_header");
  const photo = document.getElementById("city_photo");
  const summary = document.getElementById("summary");
  header.innerHTML = `${city}, ${data.country}`;
  photo.src = data.photo;
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const duration = Math.floor(Math.abs(finish - start) / _MS_PER_DAY);

  summary.innerHTML = `Your trip lasts ${duration} days`;
};
