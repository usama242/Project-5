//variables
const port = 5000;
const input = document.getElementById("autocomplete-input");
const submit = document.getElementById("submit");
const start_input = document.getElementById("start_date");
const finish_input = document.getElementById("finish_date");

const button = submit.addEventListener("click", (e) => {
  e.preventDefault();
  const destination = input.value;
  const start_date = start_input.value;
  const finish_date = finish_input.value;
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
        .then((res) => console.log(res));
    })
    .catch((error) => console.log(error));
  console.log(destination, start_date, finish_date);
});
