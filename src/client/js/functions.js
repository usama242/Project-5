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

const addWeather = (data, start, finish) => {
  const table_heading = document.getElementById("table_heading");
  const table_headings = ["Date", "Temperature", "Description"];
  const table_body = document.getElementById("table_body");
  const weather_header = document.getElementById("weather_header");
  // Returns an array of dates between the two dates
  let dates = [];
  //to avoid modifying the original date
  const theDate = new Date(start);
  while (theDate < finish) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  dates = [...dates, finish];
  const date_string = [];
  const date_formater = dates.forEach((date) => {
    const dateString = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    date_string.push(dateString);
  });
  const filtered = data.filter((entry) =>
    JSON.stringify(date_string).includes(JSON.stringify(entry.date))
      ? true
      : false
  );
  weather_header.innerHTML = "Weather Forecast";
  table_headings.forEach(
    (col) => (table_heading.innerHTML += `<th>${col}</th>`)
  );
  filtered.forEach((row) => {
    table_body.innerHTML += `
    <tr>
    <td>${row.date}</td>
    <td>${row.temp}°C</td>
    <td>${row.description}</td>
    </tr>`;
  });
};

export { addElements, addWeather };
