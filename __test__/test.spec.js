import { dateFormatter, google } from "../__mock__/functions";

// The date formatter takes an array of date objects and converts them to an array of strings
let dates = [];
const start = new Date("2020-05-21");
const finish = new Date("2020-05-27");
const theDate = new Date(start);
while (theDate < finish) {
  dates = [...dates, new Date(theDate)];
  theDate.setDate(theDate.getDate() + 1);
}
const date_string = dateFormatter(dates);
// The the first array item should be a string
test("should be a string", () => {
  expect(typeof date_string[0]).toBe("string");
});

//Server side code which mocks a response by returning json
it("calls google and returns data to me", () => {
  fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

  //assert on the response
  google("google").then((res) => {
    expect(res.data).toEqual("12345");
  });
});
