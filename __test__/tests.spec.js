const { getCityCoordinates } = require("../src/server/app.js");

test("should be truthy", () => {
  expect(getCityCoordinates("Turin")).toBeTruthy();
});
