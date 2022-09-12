const apiKey = 'fc8fe402ec4a3f4e255e5ecda7b356f8';

const celsiusFromKelvin = function (kelvinValue) {
  if (Number.isNaN(kelvinValue)) throw new Error('kelvinValue must be a number');
  const celsius = kelvinValue - 273.15;
  return celsius.toFixed(1);
};

const fahrenheitFromKelvin = function (kelvinValue) {
  if (Number.isNaN(kelvinValue)) throw new Error('kelvinValue must be a number');
  const fahrenheit = kelvinValue * (9 / 5) - 459.67;
  return fahrenheit.toFixed(1);
};

const getWeatherData = async function (location) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const processWeatherData = function (data) {
  const tempKelvin = data.main.temp;
  const tempKelvinFeelsLike = data.main.feels_like;
  const { description } = data.weather[0];
  const { pressure, humidity } = data.main;
  const city = data.name;
  const { country } = data.sys;
  const tempCelsius = celsiusFromKelvin(tempKelvin);
  const tempCelsiusFeelsLike = celsiusFromKelvin(tempKelvinFeelsLike);
  const tempFahrenheit = fahrenheitFromKelvin(tempKelvin);
  const tempFahrenheitFeelsLike = fahrenheitFromKelvin(tempKelvinFeelsLike);

  const weatherData = {
    description,
    pressure,
    humidity,
    city,
    country,
    tempCelsius,
    tempCelsiusFeelsLike,
    tempFahrenheit,
    tempFahrenheitFeelsLike,
  };
  return weatherData;
};

export async function weatherIn(location) {
  try {
    const weatherData = await getWeatherData(location);
    const processed = processWeatherData(weatherData);
    return processed;
  } catch (e) {
    console.log(e);
  }
}
