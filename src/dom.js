import { weatherIn } from './weather';

const form = document.querySelector('[data-form]');
const input = document.querySelector('[data-input]');
const city = document.querySelector('[data-city]');
const description = document.querySelector('[data-description]');
const temp = document.querySelector('[data-temp]');
const feelsLike = document.querySelector('[data-feels-like]');
const humidity = document.querySelector('[data-humidity]');
const pressure = document.querySelector('[data-pressure]');
const button = document.querySelector('[data-button]');

let weather;

const changeUnits = function () {
  const unit = localStorage.getItem('units');
  if (unit === 'C') localStorage.setItem('units', 'F');
  else localStorage.setItem('units', 'C');
};

const populateUI = function (data) {
  const unit = localStorage.getItem('units');

  city.innerText = `${data.city}, ${data.country}`;
  description.innerText = `${data.description}`;
  temp.innerText = unit === 'C' ? `${data.tempCelsius} °C` : `${data.tempFahrenheit} °F`;
  feelsLike.innerText = unit === 'C' ? `${data.tempCelsiusFeelsLike} °C` : `${data.tempFahrenheitFeelsLike} °F`;
  humidity.innerText = `${data.humidity}%`;
  pressure.innerText = `${data.pressure} hPa`;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = input.value;
  localStorage.setItem('city', location.toString());
  input.value = '';
  weatherIn(location).then((data) => {
    weather = data;
    populateUI(weather);
  });
});

button.addEventListener('click', () => {
  changeUnits();
  populateUI(weather);
});

if (localStorage.getItem('units') === null) {
  localStorage.setItem('units', 'C');
}

if (localStorage.getItem('city') === null) {
  localStorage.setItem('city', 'London');
}

weatherIn(localStorage.getItem('city')).then((data) => {
  weather = data;
  populateUI(weather);
});
