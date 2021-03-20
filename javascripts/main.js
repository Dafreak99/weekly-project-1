console.log("hi");
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    nav: true,
    margin: 30,
    item: 1,
    autoWidth: true,
    rewind: true
  });
  $(".carousel").owlCarousel({
    nav: true,
    margin: 30,
    item: 1,
    autoWidth: true,
    rewind: true
  });
});

$(function() {
  $("#datepicker").datepicker();
});

let toggle = document.querySelector(".hamburger-menu");
let sidebar = document.querySelector(".sidebar");

document.addEventListener("DOMContentLoaded", () => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("crossing");
    sidebar.classList.toggle("crossing");
  });
});
