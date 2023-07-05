function showTemperature(response) {
  console.log(response.data);

  let now = new Date();
  let h6 = document.querySelector("h6");

  let Hours = now.getHours();

  let Minutes = now.getMinutes();
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

  h6.innerHTML = `Last update: ${Day}, ${Hours}:${Minutes}`;

  document.querySelector("h1").innerHTML = response.data.name;

  let temperatureElement = document.querySelector("#temperature");
  let weatherElement = document.querySelector("h2");
  let feelingElement = document.querySelector("#feels_like");
  let windElement = document.querySelector("#wind");
  let humidityElement = document.querySelector("#humidity");
  let rangeElement = document.querySelector("#range");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  weatherElement.innerHTML = response.data.weather[0].main;
  feelingElement.innerHTML = `Feels like: ${Math.round(
    response.data.main.feels_like
  )}°C`;
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  humidityElement.innerHTML = `Humidity: ${Math.round(
    response.data.main.humidity
  )}%`;
  rangeElement.innerHTML = `Max: ${Math.round(
    response.data.main.temp_max
  )}°C Min: ${Math.round(response.data.main.temp_min)}°C`;
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#password-input").value;
  let apiKey = "269571f676769f38d9fadcded075ba32";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let footerElement = document.querySelector("#footer");

let searchForm = document.querySelector("#password-form");
searchForm = addEventListener("submit", search);
