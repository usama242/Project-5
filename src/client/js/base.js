const cities = require("../json/cities.json");

$(document).ready(function () {
  // Init Side nav
  $(".sidenav").sidenav();

  // Init Slider
  $(".slider").slider({
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });
  // Init Scrollspy
  $(".scrollspy").scrollSpy();
  // Init Datepicker
  $(".datepicker").datepicker({
    minDate: new Date(),
    format: "yyyy-mm-dd",
  });
  // Autocomplete
  $(".autocomplete").autocomplete({
    data: cities,
    minLength: 3,
    limit: 10,
  });
  // Carousel
  $(".carousel").carousel({
    numVisible: 7,
  });
});
