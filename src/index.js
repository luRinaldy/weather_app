let now = new Date();
let h6 = document.querySelector("h6");

let Hours = now.getHours();

let Minutes = now.getMinutes(); // 0,1,2, 12
// 0, 1, 2
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];
let Day = days[now.getDay()];

h6.innerHTML = `${Day}, ${Hours}:${Minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("h1");
  let cityInput = document.querySelector("#password-input");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-input");
searchForm = addEventListener("submit", search);
