const apiKey = 'fc8fe402ec4a3f4e255e5ecda7b356f8';
// const city = 'London';

const celsiusFromKelvin = function (kelvinValue) {
  if (Number.isNaN(kelvinValue)) throw new Error('kelvinValue must be a number');
  return kelvinValue - 273.15;
};

const fahrenheitFromKelvin = function (kelvinValue) {
  if (Number.isNaN(kelvinValue)) throw new Error('kelvinValue must be a number');
  return kelvinValue * (9 / 5) - 459.67;
};

const getWeatherData = async function (location) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    const temperature = data.main.temp;
    return Math.floor(celsiusFromKelvin(temperature));
  } catch (e) {
    console.log(e);
  }
};
