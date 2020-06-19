// client-side function
const dateFormatter = (dates) => {
  const date_string = [];
  dates.forEach((date) => {
    const dateString = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    date_string.push(dateString);
  });
  return date_string;
};
// server-side function
const google = async (city) => {
  const result = await fetch(
    googleURL + city + "+point+of+interest&language=en&key=" + google_api_key
  );
  try {
    const response = await result.json();
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export { dateFormatter, google };
