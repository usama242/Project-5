//variables
const port = 5000;
const input = document.getElementById("autocomplete-input");
const submit = document.getElementById("submit");
const dep_input = document.getElementById("date");

const button = submit.addEventListener("click", (e) => {
  e.preventDefault();
  const destination = input.value;
  const dep_date = dep_input.value;
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
      fetch(`http://localhost:${port}/weather`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ res }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    })
    .catch((error) => console.log(error));
});
export { button };
