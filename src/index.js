let now = new Date();
h6 = document.querySelector("h6");

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

h6.innerHTML = `${Day} ${Hours}:${Minutes}`;
