/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");

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
  if (unit === 'C') localStorage.setItem('units', 'F');else localStorage.setItem('units', 'C');
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

form.addEventListener('submit', e => {
  e.preventDefault();
  const location = input.value;
  localStorage.setItem('city', location.toString());
  input.value = '';
  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.weatherIn)(location).then(data => {
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

(0,_weather__WEBPACK_IMPORTED_MODULE_0__.weatherIn)(localStorage.getItem('city')).then(data => {
  weather = data;
  populateUI(weather);
});

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherIn": () => (/* binding */ weatherIn)
/* harmony export */ });
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
    const response = await fetch(url, {
      mode: 'cors'
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const processWeatherData = function (data) {
  const tempKelvin = data.main.temp;
  const tempKelvinFeelsLike = data.main.feels_like;
  const {
    description
  } = data.weather[0];
  const {
    pressure,
    humidity
  } = data.main;
  const city = data.name;
  const {
    country
  } = data.sys;
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
    tempFahrenheitFeelsLike
  };
  return weatherData;
};

async function weatherIn(location) {
  try {
    const weatherData = await getWeatherData(location);
    const processed = processWeatherData(weatherData);
    return processed;
  } catch (e) {
    console.log(e);
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/open-props/colors-hsl.min.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/open-props/colors-hsl.min.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":where(html){--gray-0-hsl:210 17% 98%;--gray-1-hsl:210 17% 95%;--gray-2-hsl:210 16% 93%;--gray-3-hsl:210 14% 89%;--gray-4-hsl:210 14% 83%;--gray-5-hsl:210 11% 71%;--gray-6-hsl:210 7% 56%;--gray-7-hsl:210 9% 31%;--gray-8-hsl:210 10% 23%;--gray-9-hsl:210 11% 15%;--red-0-hsl:0 100% 98%;--red-1-hsl:0 100% 95%;--red-2-hsl:0 100% 89%;--red-3-hsl:0 100% 83%;--red-4-hsl:0 100% 76%;--red-5-hsl:0 100% 71%;--red-6-hsl:0 94% 65%;--red-7-hsl:0 86% 59%;--red-8-hsl:0 74% 54%;--red-9-hsl:0 65% 48%;--pink-0-hsl:336 100% 97%;--pink-1-hsl:336 100% 94%;--pink-2-hsl:338 91% 87%;--pink-3-hsl:339 90% 81%;--pink-4-hsl:339 88% 74%;--pink-5-hsl:339 82% 67%;--pink-6-hsl:339 76% 59%;--pink-7-hsl:339 67% 52%;--pink-8-hsl:339 68% 45%;--pink-9-hsl:339 69% 38%;--grape-0-hsl:280 67% 96%;--grape-1-hsl:287 77% 92%;--grape-2-hsl:288 86% 86%;--grape-3-hsl:289 85% 78%;--grape-4-hsl:288 83% 71%;--grape-5-hsl:288 75% 64%;--grape-6-hsl:288 67% 58%;--grape-7-hsl:288 56% 52%;--grape-8-hsl:288 54% 46%;--grape-9-hsl:288 54% 40%;--violet-0-hsl:252 100% 97%;--violet-1-hsl:257 100% 93%;--violet-2-hsl:256 100% 87%;--violet-3-hsl:255 94% 79%;--violet-4-hsl:255 93% 72%;--violet-5-hsl:255 91% 67%;--violet-6-hsl:255 86% 63%;--violet-7-hsl:255 78% 60%;--violet-8-hsl:255 67% 55%;--violet-9-hsl:255 53% 50%;--indigo-0-hsl:223 100% 96%;--indigo-1-hsl:225 100% 93%;--indigo-2-hsl:228 100% 86%;--indigo-3-hsl:228 100% 78%;--indigo-4-hsl:228 96% 72%;--indigo-5-hsl:228 94% 67%;--indigo-6-hsl:228 89% 63%;--indigo-7-hsl:228 81% 59%;--indigo-8-hsl:228 69% 55%;--indigo-9-hsl:230 57% 50%;--blue-0-hsl:205 100% 95%;--blue-1-hsl:206 100% 91%;--blue-2-hsl:206 100% 82%;--blue-3-hsl:206 96% 72%;--blue-4-hsl:207 91% 64%;--blue-5-hsl:207 86% 57%;--blue-6-hsl:208 80% 52%;--blue-7-hsl:208 77% 47%;--blue-8-hsl:209 77% 43%;--blue-9-hsl:209 75% 38%;--cyan-0-hsl:185 81% 94%;--cyan-1-hsl:185 84% 88%;--cyan-2-hsl:186 77% 77%;--cyan-3-hsl:187 74% 65%;--cyan-4-hsl:187 69% 55%;--cyan-5-hsl:188 72% 47%;--cyan-6-hsl:187 80% 42%;--cyan-7-hsl:188 83% 37%;--cyan-8-hsl:189 85% 32%;--cyan-9-hsl:189 85% 28%;--teal-0-hsl:161 79% 95%;--teal-1-hsl:160 85% 87%;--teal-2-hsl:162 78% 77%;--teal-3-hsl:162 72% 65%;--teal-4-hsl:162 68% 54%;--teal-5-hsl:162 73% 46%;--teal-6-hsl:162 82% 40%;--teal-7-hsl:162 87% 35%;--teal-8-hsl:162 88% 30%;--teal-9-hsl:162 88% 26%;--green-0-hsl:131 67% 95%;--green-1-hsl:128 76% 90%;--green-2-hsl:128 71% 82%;--green-3-hsl:129 68% 73%;--green-4-hsl:130 61% 64%;--green-5-hsl:130 57% 56%;--green-6-hsl:131 50% 50%;--green-7-hsl:131 53% 46%;--green-8-hsl:131 54% 40%;--green-9-hsl:132 52% 35%;--lime-0-hsl:79 81% 94%;--lime-1-hsl:80 83% 88%;--lime-2-hsl:81 81% 80%;--lime-3-hsl:82 75% 69%;--lime-4-hsl:83 73% 59%;--lime-5-hsl:84 69% 51%;--lime-6-hsl:85 74% 45%;--lime-7-hsl:85 79% 40%;--lime-8-hsl:86 84% 36%;--lime-9-hsl:85 84% 32%;--yellow-0-hsl:50 100% 93%;--yellow-1-hsl:49 100% 87%;--yellow-2-hsl:49 100% 80%;--yellow-3-hsl:48 100% 70%;--yellow-4-hsl:47 100% 62%;--yellow-5-hsl:45 97% 54%;--yellow-6-hsl:42 96% 50%;--yellow-7-hsl:39 100% 48%;--yellow-8-hsl:35 100% 47%;--yellow-9-hsl:31 100% 45%;--orange-0-hsl:34 100% 95%;--orange-1-hsl:33 100% 90%;--orange-2-hsl:33 100% 83%;--orange-3-hsl:32 100% 74%;--orange-4-hsl:31 100% 65%;--orange-5-hsl:29 100% 58%;--orange-6-hsl:27 98% 54%;--orange-7-hsl:24 94% 50%;--orange-8-hsl:21 90% 48%;--orange-9-hsl:17 87% 45%}", "",{"version":3,"sources":["webpack://./node_modules/open-props/colors-hsl.min.css"],"names":[],"mappings":"AAAA,aAAa,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,sBAAsB,CAAC,sBAAsB,CAAC,sBAAsB,CAAC,sBAAsB,CAAC,sBAAsB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,2BAA2B,CAAC,2BAA2B,CAAC,2BAA2B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,2BAA2B,CAAC,2BAA2B,CAAC,2BAA2B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB,CAAC,yBAAyB","sourcesContent":[":where(html){--gray-0-hsl:210 17% 98%;--gray-1-hsl:210 17% 95%;--gray-2-hsl:210 16% 93%;--gray-3-hsl:210 14% 89%;--gray-4-hsl:210 14% 83%;--gray-5-hsl:210 11% 71%;--gray-6-hsl:210 7% 56%;--gray-7-hsl:210 9% 31%;--gray-8-hsl:210 10% 23%;--gray-9-hsl:210 11% 15%;--red-0-hsl:0 100% 98%;--red-1-hsl:0 100% 95%;--red-2-hsl:0 100% 89%;--red-3-hsl:0 100% 83%;--red-4-hsl:0 100% 76%;--red-5-hsl:0 100% 71%;--red-6-hsl:0 94% 65%;--red-7-hsl:0 86% 59%;--red-8-hsl:0 74% 54%;--red-9-hsl:0 65% 48%;--pink-0-hsl:336 100% 97%;--pink-1-hsl:336 100% 94%;--pink-2-hsl:338 91% 87%;--pink-3-hsl:339 90% 81%;--pink-4-hsl:339 88% 74%;--pink-5-hsl:339 82% 67%;--pink-6-hsl:339 76% 59%;--pink-7-hsl:339 67% 52%;--pink-8-hsl:339 68% 45%;--pink-9-hsl:339 69% 38%;--grape-0-hsl:280 67% 96%;--grape-1-hsl:287 77% 92%;--grape-2-hsl:288 86% 86%;--grape-3-hsl:289 85% 78%;--grape-4-hsl:288 83% 71%;--grape-5-hsl:288 75% 64%;--grape-6-hsl:288 67% 58%;--grape-7-hsl:288 56% 52%;--grape-8-hsl:288 54% 46%;--grape-9-hsl:288 54% 40%;--violet-0-hsl:252 100% 97%;--violet-1-hsl:257 100% 93%;--violet-2-hsl:256 100% 87%;--violet-3-hsl:255 94% 79%;--violet-4-hsl:255 93% 72%;--violet-5-hsl:255 91% 67%;--violet-6-hsl:255 86% 63%;--violet-7-hsl:255 78% 60%;--violet-8-hsl:255 67% 55%;--violet-9-hsl:255 53% 50%;--indigo-0-hsl:223 100% 96%;--indigo-1-hsl:225 100% 93%;--indigo-2-hsl:228 100% 86%;--indigo-3-hsl:228 100% 78%;--indigo-4-hsl:228 96% 72%;--indigo-5-hsl:228 94% 67%;--indigo-6-hsl:228 89% 63%;--indigo-7-hsl:228 81% 59%;--indigo-8-hsl:228 69% 55%;--indigo-9-hsl:230 57% 50%;--blue-0-hsl:205 100% 95%;--blue-1-hsl:206 100% 91%;--blue-2-hsl:206 100% 82%;--blue-3-hsl:206 96% 72%;--blue-4-hsl:207 91% 64%;--blue-5-hsl:207 86% 57%;--blue-6-hsl:208 80% 52%;--blue-7-hsl:208 77% 47%;--blue-8-hsl:209 77% 43%;--blue-9-hsl:209 75% 38%;--cyan-0-hsl:185 81% 94%;--cyan-1-hsl:185 84% 88%;--cyan-2-hsl:186 77% 77%;--cyan-3-hsl:187 74% 65%;--cyan-4-hsl:187 69% 55%;--cyan-5-hsl:188 72% 47%;--cyan-6-hsl:187 80% 42%;--cyan-7-hsl:188 83% 37%;--cyan-8-hsl:189 85% 32%;--cyan-9-hsl:189 85% 28%;--teal-0-hsl:161 79% 95%;--teal-1-hsl:160 85% 87%;--teal-2-hsl:162 78% 77%;--teal-3-hsl:162 72% 65%;--teal-4-hsl:162 68% 54%;--teal-5-hsl:162 73% 46%;--teal-6-hsl:162 82% 40%;--teal-7-hsl:162 87% 35%;--teal-8-hsl:162 88% 30%;--teal-9-hsl:162 88% 26%;--green-0-hsl:131 67% 95%;--green-1-hsl:128 76% 90%;--green-2-hsl:128 71% 82%;--green-3-hsl:129 68% 73%;--green-4-hsl:130 61% 64%;--green-5-hsl:130 57% 56%;--green-6-hsl:131 50% 50%;--green-7-hsl:131 53% 46%;--green-8-hsl:131 54% 40%;--green-9-hsl:132 52% 35%;--lime-0-hsl:79 81% 94%;--lime-1-hsl:80 83% 88%;--lime-2-hsl:81 81% 80%;--lime-3-hsl:82 75% 69%;--lime-4-hsl:83 73% 59%;--lime-5-hsl:84 69% 51%;--lime-6-hsl:85 74% 45%;--lime-7-hsl:85 79% 40%;--lime-8-hsl:86 84% 36%;--lime-9-hsl:85 84% 32%;--yellow-0-hsl:50 100% 93%;--yellow-1-hsl:49 100% 87%;--yellow-2-hsl:49 100% 80%;--yellow-3-hsl:48 100% 70%;--yellow-4-hsl:47 100% 62%;--yellow-5-hsl:45 97% 54%;--yellow-6-hsl:42 96% 50%;--yellow-7-hsl:39 100% 48%;--yellow-8-hsl:35 100% 47%;--yellow-9-hsl:31 100% 45%;--orange-0-hsl:34 100% 95%;--orange-1-hsl:33 100% 90%;--orange-2-hsl:33 100% 83%;--orange-3-hsl:32 100% 74%;--orange-4-hsl:31 100% 65%;--orange-5-hsl:29 100% 58%;--orange-6-hsl:27 98% 54%;--orange-7-hsl:24 94% 50%;--orange-8-hsl:21 90% 48%;--orange-9-hsl:17 87% 45%}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/normalize.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/normalize.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --indigo-7: #4263eb;\n  --grape-7: #ae3ec9;\n  --gray-9: #212529;\n  --gray-7: #495057;\n  --gray-0: #f8f9fa;\n  --gray-2: #e9ecef;\n  --gray-3: #dee2e6;\n  --gray-4: #ced4da;\n  --gray-6: #868e96;\n  --font-sans: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;\n  --font-lineheight-3: 1.5;\n  --indigo-3: #91a7ff;\n  --grape-3: #e599f7;\n  --gray-1: #f1f3f5;\n  --gray-8: #343a40;\n  --ease-2: cubic-bezier(.25, 0, .4, 1);\n  --font-weight-9: 900;\n  --font-lineheight-1: 1.25;\n  --font-size-8: 3.5rem;\n  --size-header-1: 20ch;\n  --font-size-6: 2.5rem;\n  --size-header-2: 25ch;\n  --font-size-5: 2rem;\n  --font-size-4: 1.5rem;\n  --font-size-3: 1.25rem;\n  --size-header-3: 35ch;\n  --font-size-2: 1.1rem;\n  --size-1: .25rem;\n  --indigo-2: #bac8ff;\n  --grape-2: #eebefa;\n  --size-2: .5rem;\n  --radius-2: 5px;\n  --size-3: 1rem;\n  --size-10: 5rem;\n  --font-mono: Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace;\n  --border-size-1: 1px;\n  --size-8: 3rem;\n  --size-content-2: 45ch;\n  --size-content-3: 60ch;\n  --font-weight-7: 700;\n  --size-5: 1.5rem;\n  --font-size-0: .75rem;\n  --size-content-1: 20ch;\n  --border-size-2: 2px;\n  --size-fluid-5: clamp(4rem, 5vw, 5rem);\n  --font-size-1: 1rem;\n  --border-size-3: 5px;\n  --size-4: 1.25rem;\n  --red-9: #c92a2a;\n  --red-2: #ffc9c9;\n  --green-9: #2b8a3e;\n  --green-1: #d3f9d8;\n  --blue-5: #339af0;\n  --radius-3: 1rem;\n  --shadow-6: \n    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),\n    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));\n  --shadow-color: 220 3% 15%;\n  --shadow-strength: 1%;\n}\n:where(html) {\n  --link: var(--indigo-7);\n  --link-visited: var(--grape-7);\n  --text-1: var(--gray-9);\n  --text-2: var(--gray-7);\n  --surface-1: var(--gray-0);\n  --surface-2: var(--gray-2);\n  --surface-3: var(--gray-3);\n  --surface-4: var(--gray-4);\n  --scrollthumb-color: var(--gray-6);\n  -webkit-text-size-adjust: none;\n  accent-color: var(--link);\n  background-color: var(--surface-1);\n  block-size: 100%;\n  caret-color: var(--link);\n  color: var(--text-2);\n  color-scheme: light;\n  font-family: var(--font-sans);\n  line-height: var(--font-lineheight-3);\n  scrollbar-color: var(--scrollthumb-color) transparent;\n}\n@media (dynamic-range: high) {\n  @supports (color(display-p3 0 0.5 1)) {\n    :where(html) {\n      --link: color(display-p3 0 0.5 1);\n      --link-visited: color(display-p3 0.6 0.2 1);\n    }\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :where(html) {\n    --link: var(--indigo-3);\n    --link-visited: var(--grape-3);\n    --text-1: var(--gray-1);\n    --text-2: var(--gray-4);\n    --surface-1: var(--gray-9);\n    --surface-2: var(--gray-8);\n    --surface-3: var(--gray-7);\n    --surface-4: var(--gray-6);\n    color-scheme: dark;\n  }\n}\n:where(h1, h2, h3, h4, h5, h6, dt) {\n  color: var(--text-1);\n}\n:where(a[href]) {\n  color: var(--link);\n}\n:where(a[href]):visited {\n  color: var(--link-visited);\n}\n:focus-visible {\n  outline-color: var(--link);\n}\n@media (prefers-color-scheme: light) {\n  :where(html) {\n    --scrollthumb-color: var(--gray-7);\n  }\n}\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n:where(:not(dialog)) {\n  margin: 0;\n}\n:where(:not(fieldset, progress, meter)) {\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  border-style: solid;\n  border-width: 0;\n}\n@media (prefers-reduced-motion: no-preference) {\n  :where(html) {\n    scroll-behavior: smooth;\n  }\n}\n@media (prefers-reduced-motion: no-preference) {\n  :where(:focus-visible) {\n    transition: outline-offset 145ms var(--ease-2);\n  }\n  :where(:not(:active):focus-visible) {\n    transition-duration: 0.25s;\n  }\n}\n:where(:not(:active):focus-visible) {\n  outline-offset: 5px;\n}\n:where(body) {\n  min-block-size: 100%;\n}\n:where(h1, h2, h3, h4, h5, h6) {\n  font-weight: var(--font-weight-9);\n  line-height: var(--font-lineheight-1);\n}\n:where(h1) {\n  font-size: var(--font-size-8);\n  max-inline-size: var(--size-header-1);\n}\n:where(h2) {\n  font-size: var(--font-size-6);\n  max-inline-size: var(--size-header-2);\n}\n:where(h3) {\n  font-size: var(--font-size-5);\n}\n:where(h4) {\n  font-size: var(--font-size-4);\n}\n:where(h5) {\n  font-size: var(--font-size-3);\n}\n:where(h3, h4, h5, h6, dt) {\n  max-inline-size: var(--size-header-3);\n}\n:where(p, ul, ol, dl, h6) {\n  font-size: var(--font-size-2);\n}\n:where(a, u, ins, abbr) {\n  text-underline-offset: 1px;\n}\n@supports (-moz-appearance: none) {\n  :where(a, u, ins, abbr) {\n    text-underline-offset: 2px;\n  }\n}\n:where(a[href], area, button, input, label[for], select, summary, textarea, [tabindex]:not([tabindex*=\"-\"])) {\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n:where(a) {\n  margin-block: calc(var(--size-1) * -1);\n  margin-inline: calc(var(--size-1) * -1);\n  padding-block: var(--size-1);\n  padding-inline: var(--size-1);\n}\n:where(a):where([href]) {\n  -webkit-text-decoration-color: var(--indigo-2);\n          text-decoration-color: var(--indigo-2);\n}\n:where(a):where([href]):where(:visited) {\n  -webkit-text-decoration-color: var(--grape-2);\n          text-decoration-color: var(--grape-2);\n}\n:where(a):where(:not(:hover)) {\n  text-decoration: inherit;\n}\n:where(img, svg, video, canvas, audio, iframe, embed, object) {\n  display: block;\n}\n:where(img, svg, video) {\n  block-size: auto;\n  max-inline-size: 100%;\n}\n:where(input, button, textarea, select),\n:where(input[type=\"file\"])::-webkit-file-upload-button {\n  color: inherit;\n  font: inherit;\n  font-size: inherit;\n  letter-spacing: inherit;\n}\n:where(input, textarea) {\n  padding-block: var(--size-1);\n  padding-inline: var(--size-2);\n}\n:where(select) {\n  padding-block: 0.75ch;\n  padding-inline: 1.25ch 0;\n}\n:where(textarea, select, input:not(button, button[type], input[type=\"button\"], input[type=\"submit\"], input[type=\"reset\"])) {\n  background-color: var(--surface-2);\n  border-radius: var(--radius-2);\n}\n@media (prefers-color-scheme: dark) {\n  :where(textarea, select, input:not(button, button[type], input[type=\"button\"], input[type=\"submit\"], input[type=\"reset\"])) {\n    background-color: #171a1c;\n  }\n}\n:where(textarea) {\n  resize: block;\n}\n:where(input[type=\"checkbox\"], input[type=\"radio\"]) {\n  block-size: var(--size-3);\n  inline-size: var(--size-3);\n}\n:where(svg) {\n  stroke: none;\n  fill: currentColor;\n}\n:where(svg):where(:not([fill])) {\n  stroke: currentColor;\n  fill: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n:where(svg):where(:not([width])) {\n  inline-size: var(--size-10);\n}\n:where(code, kbd, samp, pre) {\n  font-family: var(--font-mono);\n}\n:where(:not(pre) > code, kbd) {\n  white-space: nowrap;\n}\n:where(pre) {\n  max-inline-size: -webkit-max-content;\n  max-inline-size: -moz-max-content;\n  max-inline-size: max-content;\n  min-inline-size: 0;\n  white-space: pre;\n}\n:where(:not(pre) > code) {\n  background: var(--surface-2);\n  border-radius: var(--radius-2);\n  padding: var(--size-1) var(--size-2);\n}\n:where(kbd, var) {\n  border-color: var(--surface-4);\n  border-radius: var(--radius-2);\n  border-width: var(--border-size-1);\n  padding: var(--size-1) var(--size-2);\n}\n:where(mark) {\n  border-radius: var(--radius-2);\n  padding-inline: var(--size-1);\n}\n:where(ol, ul) {\n  -webkit-padding-start: var(--size-8);\n          padding-inline-start: var(--size-8);\n}\n:where(li) {\n  -webkit-padding-start: var(--size-2);\n          padding-inline-start: var(--size-2);\n}\n:where(li, dd, figcaption) {\n  max-inline-size: var(--size-content-2);\n}\n:where(p) {\n  max-inline-size: var(--size-content-3);\n}\n:where(dt, summary) {\n  font-weight: var(--font-weight-7);\n}\n:where(dt:not(:first-of-type)) {\n  -webkit-margin-before: var(--size-5);\n          margin-block-start: var(--size-5);\n}\n:where(small) {\n  font-size: max(0.5em, var(--font-size-0));\n  max-inline-size: var(--size-content-1);\n}\n:where(hr) {\n  background-color: var(--surface-3);\n  height: var(--border-size-2);\n  margin-block: var(--size-fluid-5);\n}\n:where(figure) {\n  display: grid;\n  gap: var(--size-2);\n  place-items: center;\n}\n:where(figure) > :where(figcaption) {\n  font-size: var(--font-size-1);\n}\n:where(blockquote, :not(blockquote) > cite) {\n  border-inline-start-width: var(--border-size-3);\n}\n:where(blockquote) {\n  display: grid;\n  gap: var(--size-3);\n  max-inline-size: var(--size-content-2);\n  padding-block: var(--size-3);\n  padding-inline: var(--size-4);\n}\n:where(:not(blockquote) > cite) {\n  -webkit-padding-start: var(--size-2);\n          padding-inline-start: var(--size-2);\n}\n:where(summary) {\n  background: var(--surface-3);\n  border-radius: var(--radius-2);\n  margin: calc(var(--size-2) * -1) calc(var(--size-3) * -1);\n  padding: var(--size-2) var(--size-3);\n}\n:where(details) {\n  background: var(--surface-2);\n  border-radius: var(--radius-2);\n  padding-block: var(--size-2);\n  padding-inline: var(--size-3);\n}\n:where(details[open] > summary) {\n  border-end-end-radius: 0;\n  border-end-start-radius: 0;\n  margin-bottom: var(--size-2);\n}\n:where(fieldset) {\n  border: var(--border-size-1) solid var(--surface-4);\n  border-radius: var(--radius-2);\n}\n:where(del) {\n  background: var(--red-9);\n  color: var(--red-2);\n}\n:where(ins) {\n  background: var(--green-9);\n  color: var(--green-1);\n}\n:where(abbr) {\n  -webkit-text-decoration-color: var(--blue-5);\n          text-decoration-color: var(--blue-5);\n}\n:where(dialog) {\n  background-color: var(--surface-1);\n  border-radius: var(--radius-3);\n  box-shadow: var(--shadow-6);\n  color: inherit;\n}\n@media (prefers-color-scheme: dark) {\n  :where(dialog) {\n    background-color: var(--surface-2);\n  }\n}\n:where(dialog)::-webkit-backdrop {\n  -webkit-backdrop-filter: blur(25px);\n          backdrop-filter: blur(25px);\n}\n:where(dialog)::backdrop {\n  -webkit-backdrop-filter: blur(25px);\n          backdrop-filter: blur(25px);\n}\n:where(html[\\:has\\(dialog\\[open\\]\\)]) {\n  overflow: hidden;\n}\n:where(html:has(dialog[open])) {\n  overflow: hidden;\n}\n:where(menu) {\n  display: flex;\n  gap: var(--size-3);\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n:where(sup) {\n  font-size: 0.5em;\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-color: 220 40% 2%;\n    --shadow-strength: 25%;\n  }\n}\n", "",{"version":3,"sources":["<no source>","webpack://./src/normalize.css"],"names":[],"mappings":"AAAA;EAAA,oBAAA;EAAA,mBAAA;EAAA,kBAAA;EAAA,kBAAA;EAAA,kBAAA;EAAA,kBAAA;EAAA,kBAAA;EAAA,kBAAA;EAAA,kBAAA;EAAA,2FAAA;EAAA,yBAAA;EAAA,oBAAA;EAAA,mBAAA;EAAA,kBAAA;EAAA,kBAAA;EAAA,sCAAA;EAAA,qBAAA;EAAA,0BAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,oBAAA;EAAA,sBAAA;EAAA,uBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,iBAAA;EAAA,oBAAA;EAAA,mBAAA;EAAA,gBAAA;EAAA,gBAAA;EAAA,eAAA;EAAA,gBAAA;EAAA,iIAAA;EAAA,qBAAA;EAAA,eAAA;EAAA,uBAAA;EAAA,uBAAA;EAAA,qBAAA;EAAA,iBAAA;EAAA,sBAAA;EAAA,uBAAA;EAAA,qBAAA;EAAA,uCAAA;EAAA,oBAAA;EAAA,qBAAA;EAAA,kBAAA;EAAA,iBAAA;EAAA,iBAAA;EAAA,mBAAA;EAAA,mBAAA;EAAA,kBAAA;EAAA,iBAAA;EAAA;;;;;;;mFAAA;EAAA,2BAAA;EAAA;CAAA;ACAA;EACE,uBAAuB;EACvB,8BAA8B;EAC9B,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,kCAAkC;EAClC,8BAA8B;EAC9B,yBAAyB;EACzB,kCAAkC;EAClC,gBAAgB;EAChB,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,6BAA6B;EAC7B,qCAAqC;EACrC,qDAAqD;AACvD;AACA;EACE;IACE;MACE,iCAAiC;MACjC,2CAA2C;IAC7C;EACF;AACF;AACA;EACE;IACE,uBAAuB;IACvB,8BAA8B;IAC9B,uBAAuB;IACvB,uBAAuB;IACvB,0BAA0B;IAC1B,0BAA0B;IAC1B,0BAA0B;IAC1B,0BAA0B;IAC1B,kBAAkB;EACpB;AACF;AACA;EACE,oBAAoB;AACtB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE;IACE,kCAAkC;EACpC;AACF;AACA;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;EACE,6BAA6B;EAC7B,4BAA4B;EAC5B,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE;IACE,uBAAuB;EACzB;AACF;AACA;EACE;IACE,8CAA8C;EAChD;EACA;IACE,0BAA0B;EAC5B;AACF;AACA;EACE,mBAAmB;AACrB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,iCAAiC;EACjC,qCAAqC;AACvC;AACA;EACE,6BAA6B;EAC7B,qCAAqC;AACvC;AACA;EACE,6BAA6B;EAC7B,qCAAqC;AACvC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,qCAAqC;AACvC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE;IACE,0BAA0B;EAC5B;AACF;AACA;EACE,wCAAwC;EACxC,eAAe;EACf,0BAA0B;AAC5B;AACA;EACE,sCAAsC;EACtC,uCAAuC;EACvC,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,8CAAsC;UAAtC,sCAAsC;AACxC;AACA;EACE,6CAAqC;UAArC,qCAAqC;AACvC;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;AACA;;EAEE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,kCAAkC;EAClC,8BAA8B;AAChC;AACA;EACE;IACE,yBAAyB;EAC3B;AACF;AACA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,UAAU;EACV,qBAAqB;EACrB,sBAAsB;AACxB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,oCAA4B;EAA5B,iCAA4B;EAA5B,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,4BAA4B;EAC5B,8BAA8B;EAC9B,oCAAoC;AACtC;AACA;EACE,8BAA8B;EAC9B,8BAA8B;EAC9B,kCAAkC;EAClC,oCAAoC;AACtC;AACA;EACE,8BAA8B;EAC9B,6BAA6B;AAC/B;AACA;EACE,oCAAmC;UAAnC,mCAAmC;AACrC;AACA;EACE,oCAAmC;UAAnC,mCAAmC;AACrC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,oCAAiC;UAAjC,iCAAiC;AACnC;AACA;EACE,yCAAyC;EACzC,sCAAsC;AACxC;AACA;EACE,kCAAkC;EAClC,4BAA4B;EAC5B,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,+CAA+C;AACjD;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,sCAAsC;EACtC,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,oCAAmC;UAAnC,mCAAmC;AACrC;AACA;EACE,4BAA4B;EAC5B,8BAA8B;EAC9B,yDAAyD;EACzD,oCAAoC;AACtC;AACA;EACE,4BAA4B;EAC5B,8BAA8B;EAC9B,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,4BAA4B;AAC9B;AACA;EACE,mDAAmD;EACnD,8BAA8B;AAChC;AACA;EACE,wBAAwB;EACxB,mBAAmB;AACrB;AACA;EACE,0BAA0B;EAC1B,qBAAqB;AACvB;AACA;EACE,4CAAoC;UAApC,oCAAoC;AACtC;AACA;EACE,kCAAkC;EAClC,8BAA8B;EAC9B,2BAA2B;EAC3B,cAAc;AAChB;AACA;EACE;IACE,kCAAkC;EACpC;AACF;AACA;EACE,mCAA2B;UAA3B,2BAA2B;AAC7B;AAFA;EACE,mCAA2B;UAA3B,2BAA2B;AAC7B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,wBAAuB;UAAvB,uBAAuB;AACzB;AACA;EACE,gBAAgB;AAClB;AD3UA;EAAA;IAAA,2BAAA;IAAA;GAAA;CAAA","sourcesContent":[null,":where(html) {\n  --link: var(--indigo-7);\n  --link-visited: var(--grape-7);\n  --text-1: var(--gray-9);\n  --text-2: var(--gray-7);\n  --surface-1: var(--gray-0);\n  --surface-2: var(--gray-2);\n  --surface-3: var(--gray-3);\n  --surface-4: var(--gray-4);\n  --scrollthumb-color: var(--gray-6);\n  -webkit-text-size-adjust: none;\n  accent-color: var(--link);\n  background-color: var(--surface-1);\n  block-size: 100%;\n  caret-color: var(--link);\n  color: var(--text-2);\n  color-scheme: light;\n  font-family: var(--font-sans);\n  line-height: var(--font-lineheight-3);\n  scrollbar-color: var(--scrollthumb-color) transparent;\n}\n@media (dynamic-range: high) {\n  @supports (color(display-p3 0 0.5 1)) {\n    :where(html) {\n      --link: color(display-p3 0 0.5 1);\n      --link-visited: color(display-p3 0.6 0.2 1);\n    }\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :where(html) {\n    --link: var(--indigo-3);\n    --link-visited: var(--grape-3);\n    --text-1: var(--gray-1);\n    --text-2: var(--gray-4);\n    --surface-1: var(--gray-9);\n    --surface-2: var(--gray-8);\n    --surface-3: var(--gray-7);\n    --surface-4: var(--gray-6);\n    color-scheme: dark;\n  }\n}\n:where(h1, h2, h3, h4, h5, h6, dt) {\n  color: var(--text-1);\n}\n:where(a[href]) {\n  color: var(--link);\n}\n:where(a[href]):visited {\n  color: var(--link-visited);\n}\n:focus-visible {\n  outline-color: var(--link);\n}\n@media (prefers-color-scheme: light) {\n  :where(html) {\n    --scrollthumb-color: var(--gray-7);\n  }\n}\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n:where(:not(dialog)) {\n  margin: 0;\n}\n:where(:not(fieldset, progress, meter)) {\n  background-origin: border-box;\n  background-repeat: no-repeat;\n  border-style: solid;\n  border-width: 0;\n}\n@media (prefers-reduced-motion: no-preference) {\n  :where(html) {\n    scroll-behavior: smooth;\n  }\n}\n@media (prefers-reduced-motion: no-preference) {\n  :where(:focus-visible) {\n    transition: outline-offset 145ms var(--ease-2);\n  }\n  :where(:not(:active):focus-visible) {\n    transition-duration: 0.25s;\n  }\n}\n:where(:not(:active):focus-visible) {\n  outline-offset: 5px;\n}\n:where(body) {\n  min-block-size: 100%;\n}\n:where(h1, h2, h3, h4, h5, h6) {\n  font-weight: var(--font-weight-9);\n  line-height: var(--font-lineheight-1);\n}\n:where(h1) {\n  font-size: var(--font-size-8);\n  max-inline-size: var(--size-header-1);\n}\n:where(h2) {\n  font-size: var(--font-size-6);\n  max-inline-size: var(--size-header-2);\n}\n:where(h3) {\n  font-size: var(--font-size-5);\n}\n:where(h4) {\n  font-size: var(--font-size-4);\n}\n:where(h5) {\n  font-size: var(--font-size-3);\n}\n:where(h3, h4, h5, h6, dt) {\n  max-inline-size: var(--size-header-3);\n}\n:where(p, ul, ol, dl, h6) {\n  font-size: var(--font-size-2);\n}\n:where(a, u, ins, abbr) {\n  text-underline-offset: 1px;\n}\n@supports (-moz-appearance: none) {\n  :where(a, u, ins, abbr) {\n    text-underline-offset: 2px;\n  }\n}\n:where(a[href], area, button, input, label[for], select, summary, textarea, [tabindex]:not([tabindex*=\"-\"])) {\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n:where(a) {\n  margin-block: calc(var(--size-1) * -1);\n  margin-inline: calc(var(--size-1) * -1);\n  padding-block: var(--size-1);\n  padding-inline: var(--size-1);\n}\n:where(a):where([href]) {\n  text-decoration-color: var(--indigo-2);\n}\n:where(a):where([href]):where(:visited) {\n  text-decoration-color: var(--grape-2);\n}\n:where(a):where(:not(:hover)) {\n  text-decoration: inherit;\n}\n:where(img, svg, video, canvas, audio, iframe, embed, object) {\n  display: block;\n}\n:where(img, svg, video) {\n  block-size: auto;\n  max-inline-size: 100%;\n}\n:where(input, button, textarea, select),\n:where(input[type=\"file\"])::-webkit-file-upload-button {\n  color: inherit;\n  font: inherit;\n  font-size: inherit;\n  letter-spacing: inherit;\n}\n:where(input, textarea) {\n  padding-block: var(--size-1);\n  padding-inline: var(--size-2);\n}\n:where(select) {\n  padding-block: 0.75ch;\n  padding-inline: 1.25ch 0;\n}\n:where(textarea, select, input:not(button, button[type], input[type=\"button\"], input[type=\"submit\"], input[type=\"reset\"])) {\n  background-color: var(--surface-2);\n  border-radius: var(--radius-2);\n}\n@media (prefers-color-scheme: dark) {\n  :where(textarea, select, input:not(button, button[type], input[type=\"button\"], input[type=\"submit\"], input[type=\"reset\"])) {\n    background-color: #171a1c;\n  }\n}\n:where(textarea) {\n  resize: block;\n}\n:where(input[type=\"checkbox\"], input[type=\"radio\"]) {\n  block-size: var(--size-3);\n  inline-size: var(--size-3);\n}\n:where(svg) {\n  stroke: none;\n  fill: currentColor;\n}\n:where(svg):where(:not([fill])) {\n  stroke: currentColor;\n  fill: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n:where(svg):where(:not([width])) {\n  inline-size: var(--size-10);\n}\n:where(code, kbd, samp, pre) {\n  font-family: var(--font-mono);\n}\n:where(:not(pre) > code, kbd) {\n  white-space: nowrap;\n}\n:where(pre) {\n  max-inline-size: max-content;\n  min-inline-size: 0;\n  white-space: pre;\n}\n:where(:not(pre) > code) {\n  background: var(--surface-2);\n  border-radius: var(--radius-2);\n  padding: var(--size-1) var(--size-2);\n}\n:where(kbd, var) {\n  border-color: var(--surface-4);\n  border-radius: var(--radius-2);\n  border-width: var(--border-size-1);\n  padding: var(--size-1) var(--size-2);\n}\n:where(mark) {\n  border-radius: var(--radius-2);\n  padding-inline: var(--size-1);\n}\n:where(ol, ul) {\n  padding-inline-start: var(--size-8);\n}\n:where(li) {\n  padding-inline-start: var(--size-2);\n}\n:where(li, dd, figcaption) {\n  max-inline-size: var(--size-content-2);\n}\n:where(p) {\n  max-inline-size: var(--size-content-3);\n}\n:where(dt, summary) {\n  font-weight: var(--font-weight-7);\n}\n:where(dt:not(:first-of-type)) {\n  margin-block-start: var(--size-5);\n}\n:where(small) {\n  font-size: max(0.5em, var(--font-size-0));\n  max-inline-size: var(--size-content-1);\n}\n:where(hr) {\n  background-color: var(--surface-3);\n  height: var(--border-size-2);\n  margin-block: var(--size-fluid-5);\n}\n:where(figure) {\n  display: grid;\n  gap: var(--size-2);\n  place-items: center;\n}\n:where(figure) > :where(figcaption) {\n  font-size: var(--font-size-1);\n}\n:where(blockquote, :not(blockquote) > cite) {\n  border-inline-start-width: var(--border-size-3);\n}\n:where(blockquote) {\n  display: grid;\n  gap: var(--size-3);\n  max-inline-size: var(--size-content-2);\n  padding-block: var(--size-3);\n  padding-inline: var(--size-4);\n}\n:where(:not(blockquote) > cite) {\n  padding-inline-start: var(--size-2);\n}\n:where(summary) {\n  background: var(--surface-3);\n  border-radius: var(--radius-2);\n  margin: calc(var(--size-2) * -1) calc(var(--size-3) * -1);\n  padding: var(--size-2) var(--size-3);\n}\n:where(details) {\n  background: var(--surface-2);\n  border-radius: var(--radius-2);\n  padding-block: var(--size-2);\n  padding-inline: var(--size-3);\n}\n:where(details[open] > summary) {\n  border-end-end-radius: 0;\n  border-end-start-radius: 0;\n  margin-bottom: var(--size-2);\n}\n:where(fieldset) {\n  border: var(--border-size-1) solid var(--surface-4);\n  border-radius: var(--radius-2);\n}\n:where(del) {\n  background: var(--red-9);\n  color: var(--red-2);\n}\n:where(ins) {\n  background: var(--green-9);\n  color: var(--green-1);\n}\n:where(abbr) {\n  text-decoration-color: var(--blue-5);\n}\n:where(dialog) {\n  background-color: var(--surface-1);\n  border-radius: var(--radius-3);\n  box-shadow: var(--shadow-6);\n  color: inherit;\n}\n@media (prefers-color-scheme: dark) {\n  :where(dialog) {\n    background-color: var(--surface-2);\n  }\n}\n:where(dialog)::backdrop {\n  backdrop-filter: blur(25px);\n}\n:where(html[\\:has\\(dialog\\[open\\]\\)]) {\n  overflow: hidden;\n}\n:where(html:has(dialog[open])) {\n  overflow: hidden;\n}\n:where(menu) {\n  display: flex;\n  gap: var(--size-3);\n  padding-inline-start: 0;\n}\n:where(sup) {\n  font-size: 0.5em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_open_props_colors_hsl_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/open-props/colors-hsl.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/open-props/colors-hsl.min.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_open_props_colors_hsl_min_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --font-sans: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;\n  --size-4: 1.25rem;\n  --size-3: 1rem;\n  --size-15: 30rem;\n  --gray-6: #868e96;\n  --size-2: .5rem;\n  --font-size-3: 1.25rem;\n  --size-7: 2rem;\n  --size-6: 1.75rem;\n  --radius-2: 5px;\n  --font-size-4: 1.5rem;\n  --gray-9-hsl: 210 11% 15%;\n}\n\nbody {\n  font-family: var(--font-sans);\n  background-color: var(--surface-1);\n  color: var(--text-1);\n  padding: var(--size-4);\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-3);\n  max-width: var(--size-15);\n  margin-inline: auto;\n  color: inherit;\n}\n\ninput {\n  border: 2px solid var(--gray-6);\n  padding: var(--size-2);\n  font-size: var(--font-size-3);\n  width: 100%;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-7);\n  text-align: center;\n  padding: var(--size-6);\n  border: 2px solid var(--gray-6);\n  border-radius: var(--radius-2);\n  background-color: var(--surface-2);\n}\n\n.city > p {\n  font-size: var(--font-size-4);\n}\n\n.other-details {\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton {\n  position: absolute;\n  top: var(--size-2);\n  right: var(--size-2);\n  border: 1px solid var(--gray-6);\n  border-radius: var(--radius-2);\n  background-color: hsl(var(--gray-9-hsl) / 0%);\n}\n\nbutton:hover {\n  background-color: hsl(var(--gray-9-hsl) / 20%);\n}\n", "",{"version":3,"sources":["<no source>","webpack://./src/style.css"],"names":[],"mappings":"AAAA;EAAA,2FAAA;EAAA,kBAAA;EAAA,eAAA;EAAA,iBAAA;EAAA,kBAAA;EAAA,gBAAA;EAAA,uBAAA;EAAA,eAAA;EAAA,kBAAA;EAAA,gBAAA;EAAA,sBAAA;EAAA;CAAA;;ACEA;EACE,6BAA6B;EAC7B,kCAAkC;EAClC,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,+BAA+B;EAC/B,sBAAsB;EACtB,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,+BAA+B;EAC/B,8BAA8B;EAC9B,kCAAkC;AACpC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,+BAA+B;EAC/B,8BAA8B;EAC9B,6CAA6C;AAC/C;;AAEA;EACE,8CAA8C;AAChD","sourcesContent":[null,"@import \"open-props/colors-hsl\";\n\nbody {\n  font-family: var(--font-sans);\n  background-color: var(--surface-1);\n  color: var(--text-1);\n  padding: var(--size-4);\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-3);\n  max-width: var(--size-15);\n  margin-inline: auto;\n  color: inherit;\n}\n\ninput {\n  border: 2px solid var(--gray-6);\n  padding: var(--size-2);\n  font-size: var(--font-size-3);\n  width: 100%;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-7);\n  text-align: center;\n  padding: var(--size-6);\n  border: 2px solid var(--gray-6);\n  border-radius: var(--radius-2);\n  background-color: var(--surface-2);\n}\n\n.city > p {\n  font-size: var(--font-size-4);\n}\n\n.other-details {\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton {\n  position: absolute;\n  top: var(--size-2);\n  right: var(--size-2);\n  border: 1px solid var(--gray-6);\n  border-radius: var(--radius-2);\n  background-color: hsl(var(--gray-9-hsl) / 0%);\n}\n\nbutton:hover {\n  background-color: hsl(var(--gray-9-hsl) / 20%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEIsMEJBQTBCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwwQkFBMEIsMEJBQTBCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQixPQUFPLHNxREFBc3FELHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixzQkFBc0Isc0JBQXNCLHNCQUFzQixzQkFBc0IsMEJBQTBCLDBCQUEwQix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQiw0QkFBNEIsNEJBQTRCLDRCQUE0QiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsNEJBQTRCLDRCQUE0Qiw0QkFBNEIsNEJBQTRCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwy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QUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyw0Q0FBNEMsNEJBQTRCLG1DQUFtQyw0QkFBNEIsNEJBQTRCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQix1Q0FBdUMsbUNBQW1D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QUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvb3Blbi1wcm9wcy9jb2xvcnMtaHNsLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbm9ybWFsaXplLmNzcz9lYjUyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2VhdGhlckluIH0gZnJvbSAnLi93ZWF0aGVyJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm1dJyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlucHV0XScpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNpdHldJyk7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRlc2NyaXB0aW9uXScpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBdJyk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mZWVscy1saWtlXScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1odW1pZGl0eV0nKTtcbmNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJlc3N1cmVdJyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1idXR0b25dJyk7XG5cbmxldCB3ZWF0aGVyO1xuXG5jb25zdCBjaGFuZ2VVbml0cyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdW5pdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bml0cycpO1xuICBpZiAodW5pdCA9PT0gJ0MnKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5pdHMnLCAnRicpO1xuICBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1bml0cycsICdDJyk7XG59O1xuXG5jb25zdCBwb3B1bGF0ZVVJID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3QgdW5pdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bml0cycpO1xuXG4gIGNpdHkuaW5uZXJUZXh0ID0gYCR7ZGF0YS5jaXR5fSwgJHtkYXRhLmNvdW50cnl9YDtcbiAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7ZGF0YS5kZXNjcmlwdGlvbn1gO1xuICB0ZW1wLmlubmVyVGV4dCA9IHVuaXQgPT09ICdDJyA/IGAke2RhdGEudGVtcENlbHNpdXN9IMKwQ2AgOiBgJHtkYXRhLnRlbXBGYWhyZW5oZWl0fSDCsEZgO1xuICBmZWVsc0xpa2UuaW5uZXJUZXh0ID0gdW5pdCA9PT0gJ0MnID8gYCR7ZGF0YS50ZW1wQ2Vsc2l1c0ZlZWxzTGlrZX0gwrBDYCA6IGAke2RhdGEudGVtcEZhaHJlbmhlaXRGZWVsc0xpa2V9IMKwRmA7XG4gIGh1bWlkaXR5LmlubmVyVGV4dCA9IGAke2RhdGEuaHVtaWRpdHl9JWA7XG4gIHByZXNzdXJlLmlubmVyVGV4dCA9IGAke2RhdGEucHJlc3N1cmV9IGhQYWA7XG59O1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbG9jYXRpb24gPSBpbnB1dC52YWx1ZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdHknLCBsb2NhdGlvbi50b1N0cmluZygpKTtcbiAgaW5wdXQudmFsdWUgPSAnJztcbiAgd2VhdGhlckluKGxvY2F0aW9uKS50aGVuKChkYXRhKSA9PiB7XG4gICAgd2VhdGhlciA9IGRhdGE7XG4gICAgcG9wdWxhdGVVSSh3ZWF0aGVyKTtcbiAgfSk7XG59KTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjaGFuZ2VVbml0cygpO1xuICBwb3B1bGF0ZVVJKHdlYXRoZXIpO1xufSk7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5pdHMnKSA9PT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5pdHMnLCAnQycpO1xufVxuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKSA9PT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0eScsICdMb25kb24nKTtcbn1cblxud2VhdGhlckluKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykpLnRoZW4oKGRhdGEpID0+IHtcbiAgd2VhdGhlciA9IGRhdGE7XG4gIHBvcHVsYXRlVUkod2VhdGhlcik7XG59KTtcbiIsImNvbnN0IGFwaUtleSA9ICdmYzhmZTQwMmVjNGEzZjRlMjU1ZTVlY2RhN2IzNTZmOCc7XG5cbmNvbnN0IGNlbHNpdXNGcm9tS2VsdmluID0gZnVuY3Rpb24gKGtlbHZpblZhbHVlKSB7XG4gIGlmIChOdW1iZXIuaXNOYU4oa2VsdmluVmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoJ2tlbHZpblZhbHVlIG11c3QgYmUgYSBudW1iZXInKTtcbiAgY29uc3QgY2Vsc2l1cyA9IGtlbHZpblZhbHVlIC0gMjczLjE1O1xuICByZXR1cm4gY2Vsc2l1cy50b0ZpeGVkKDEpO1xufTtcblxuY29uc3QgZmFocmVuaGVpdEZyb21LZWx2aW4gPSBmdW5jdGlvbiAoa2VsdmluVmFsdWUpIHtcbiAgaWYgKE51bWJlci5pc05hTihrZWx2aW5WYWx1ZSkpIHRocm93IG5ldyBFcnJvcigna2VsdmluVmFsdWUgbXVzdCBiZSBhIG51bWJlcicpO1xuICBjb25zdCBmYWhyZW5oZWl0ID0ga2VsdmluVmFsdWUgKiAoOSAvIDUpIC0gNDU5LjY3O1xuICByZXR1cm4gZmFocmVuaGVpdC50b0ZpeGVkKDEpO1xufTtcblxuY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2FwaUtleX1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cbn07XG5cbmNvbnN0IHByb2Nlc3NXZWF0aGVyRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IHRlbXBLZWx2aW4gPSBkYXRhLm1haW4udGVtcDtcbiAgY29uc3QgdGVtcEtlbHZpbkZlZWxzTGlrZSA9IGRhdGEubWFpbi5mZWVsc19saWtlO1xuICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSBkYXRhLndlYXRoZXJbMF07XG4gIGNvbnN0IHsgcHJlc3N1cmUsIGh1bWlkaXR5IH0gPSBkYXRhLm1haW47XG4gIGNvbnN0IGNpdHkgPSBkYXRhLm5hbWU7XG4gIGNvbnN0IHsgY291bnRyeSB9ID0gZGF0YS5zeXM7XG4gIGNvbnN0IHRlbXBDZWxzaXVzID0gY2Vsc2l1c0Zyb21LZWx2aW4odGVtcEtlbHZpbik7XG4gIGNvbnN0IHRlbXBDZWxzaXVzRmVlbHNMaWtlID0gY2Vsc2l1c0Zyb21LZWx2aW4odGVtcEtlbHZpbkZlZWxzTGlrZSk7XG4gIGNvbnN0IHRlbXBGYWhyZW5oZWl0ID0gZmFocmVuaGVpdEZyb21LZWx2aW4odGVtcEtlbHZpbik7XG4gIGNvbnN0IHRlbXBGYWhyZW5oZWl0RmVlbHNMaWtlID0gZmFocmVuaGVpdEZyb21LZWx2aW4odGVtcEtlbHZpbkZlZWxzTGlrZSk7XG5cbiAgY29uc3Qgd2VhdGhlckRhdGEgPSB7XG4gICAgZGVzY3JpcHRpb24sXG4gICAgcHJlc3N1cmUsXG4gICAgaHVtaWRpdHksXG4gICAgY2l0eSxcbiAgICBjb3VudHJ5LFxuICAgIHRlbXBDZWxzaXVzLFxuICAgIHRlbXBDZWxzaXVzRmVlbHNMaWtlLFxuICAgIHRlbXBGYWhyZW5oZWl0LFxuICAgIHRlbXBGYWhyZW5oZWl0RmVlbHNMaWtlLFxuICB9O1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2VhdGhlckluKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4gICAgY29uc3QgcHJvY2Vzc2VkID0gcHJvY2Vzc1dlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjp3aGVyZShodG1sKXstLWdyYXktMC1oc2w6MjEwIDE3JSA5OCU7LS1ncmF5LTEtaHNsOjIxMCAxNyUgOTUlOy0tZ3JheS0yLWhzbDoyMTAgMTYlIDkzJTstLWdyYXktMy1oc2w6MjEwIDE0JSA4OSU7LS1ncmF5LTQtaHNsOjIxMCAxNCUgODMlOy0tZ3JheS01LWhzbDoyMTAgMTElIDcxJTstLWdyYXktNi1oc2w6MjEwIDclIDU2JTstLWdyYXktNy1oc2w6MjEwIDklIDMxJTstLWdyYXktOC1oc2w6MjEwIDEwJSAyMyU7LS1ncmF5LTktaHNsOjIxMCAxMSUgMTUlOy0tcmVkLTAtaHNsOjAgMTAwJSA5OCU7LS1yZWQtMS1oc2w6MCAxMDAlIDk1JTstLXJlZC0yLWhzbDowIDEwMCUgODklOy0tcmVkLTMtaHNsOjAgMTAwJSA4MyU7LS1yZWQtNC1oc2w6MCAxMDAlIDc2JTstLXJlZC01LWhzbDowIDEwMCUgNzElOy0tcmVkLTYtaHNsOjAgOTQlIDY1JTstLXJlZC03LWhzbDowIDg2JSA1OSU7LS1yZWQtOC1oc2w6MCA3NCUgNTQlOy0tcmVkLTktaHNsOjAgNjUlIDQ4JTstLXBpbmstMC1oc2w6MzM2IDEwMCUgOTclOy0tcGluay0xLWhzbDozMzYgMTAwJSA5NCU7LS1waW5rLTItaHNsOjMzOCA5MSUgODclOy0tcGluay0zLWhzbDozMzkgOTAlIDgxJTstLXBpbmstNC1oc2w6MzM5IDg4JSA3NCU7LS1waW5rLTUtaHNsOjMzOSA4MiUgNjclOy0tcGluay02LWhzbDozMzkgNzYlIDU5JTstLXBpbmstNy1oc2w6MzM5IDY3JSA1MiU7LS1waW5rLTgtaHNsOjMzOSA2OCUgNDUlOy0tcGluay05LWhzbDozMzkgNjklIDM4JTstLWdyYXBlLTAtaHNsOjI4MCA2NyUgOTYlOy0tZ3JhcGUtMS1oc2w6Mjg3IDc3JSA5MiU7LS1ncmFwZS0yLWhzbDoyODggODYlIDg2JTstLWdyYXBlLTMtaHNsOjI4OSA4NSUgNzglOy0tZ3JhcGUtNC1oc2w6Mjg4IDgzJSA3MSU7LS1ncmFwZS01LWhzbDoyODggNzUlIDY0JTstLWdyYXBlLTYtaHNsOjI4OCA2NyUgNTglOy0tZ3JhcGUtNy1oc2w6Mjg4IDU2JSA1MiU7LS1ncmFwZS04LWhzbDoyODggNTQlIDQ2JTstLWdyYXBlLTktaHNsOjI4OCA1NCUgNDAlOy0tdmlvbGV0LTAtaHNsOjI1MiAxMDAlIDk3JTstLXZpb2xldC0xLWhzbDoyNTcgMTAwJSA5MyU7LS12aW9sZXQtMi1oc2w6MjU2IDEwMCUgODclOy0tdmlvbGV0LTMtaHNsOjI1NSA5NCUgNzklOy0tdmlvbGV0LTQtaHNsOjI1NSA5MyUgNzIlOy0tdmlvbGV0LTUtaHNsOjI1NSA5MSUgNjclOy0tdmlvbGV0LTYtaHNsOjI1NSA4NiUgNjMlOy0tdmlvbGV0LTctaHNsOjI1NSA3OCUgNjAlOy0tdmlvbGV0LTgtaHNsOjI1NSA2NyUgNTUlOy0tdmlvbGV0LTktaHNsOjI1NSA1MyUgNTAlOy0taW5kaWdvLTAtaHNsOjIyMyAxMDAlIDk2JTstLWluZGlnby0xLWhzbDoyMjUgMTAwJSA5MyU7LS1pbmRpZ28tMi1oc2w6MjI4IDEwMCUgODYlOy0taW5kaWdvLTMtaHNsOjIyOCAxMDAlIDc4JTstLWluZGlnby00LWhzbDoyMjggOTYlIDcyJTstLWluZGlnby01LWhzbDoyMjggOTQlIDY3JTstLWluZGlnby02LWhzbDoyMjggODklIDYzJTstLWluZGlnby03LWhzbDoyMjggODElIDU5JTstLWluZGlnby04LWhzbDoyMjggNjklIDU1JTstLWluZGlnby05LWhzbDoyMzAgNTclIDUwJTstLWJsdWUtMC1oc2w6MjA1IDEwMCUgOTUlOy0tYmx1ZS0xLWhzbDoyMDYgMTAwJSA5MSU7LS1ibHVlLTItaHNsOjIwNiAxMDAlIDgyJTstLWJsdWUtMy1oc2w6MjA2IDk2JSA3MiU7LS1ibHVlLTQtaHNsOjIwNyA5MSUgNjQlOy0tYmx1ZS01LWhzbDoyMDcgODYlIDU3JTstLWJsdWUtNi1oc2w6MjA4IDgwJSA1MiU7LS1ibHVlLTctaHNsOjIwOCA3NyUgNDclOy0tYmx1ZS04LWhzbDoyMDkgNzclIDQzJTstLWJsdWUtOS1oc2w6MjA5IDc1JSAzOCU7LS1jeWFuLTAtaHNsOjE4NSA4MSUgOTQlOy0tY3lhbi0xLWhzbDoxODUgODQlIDg4JTstLWN5YW4tMi1oc2w6MTg2IDc3JSA3NyU7LS1jeWFuLTMtaHNsOjE4NyA3NCUgNjUlOy0tY3lhbi00LWhzbDoxODcgNjklIDU1JTstLWN5YW4tNS1oc2w6MTg4IDcyJSA0NyU7LS1jeWFuLTYtaHNsOjE4NyA4MCUgNDIlOy0tY3lhbi03LWhzbDoxODggODMlIDM3JTstLWN5YW4tOC1oc2w6MTg5IDg1JSAzMiU7LS1jeWFuLTktaHNsOjE4OSA4NSUgMjglOy0tdGVhbC0wLWhzbDoxNjEgNzklIDk1JTstLXRlYWwtMS1oc2w6MTYwIDg1JSA4NyU7LS10ZWFsLTItaHNsOjE2MiA3OCUgNzclOy0tdGVhbC0zLWhzbDoxNjIgNzIlIDY1JTstLXRlYWwtNC1oc2w6MTYyIDY4JSA1NCU7LS10ZWFsLTUtaHNsOjE2MiA3MyUgNDYlOy0tdGVhbC02LWhzbDoxNjIgODIlIDQwJTstLXRlYWwtNy1oc2w6MTYyIDg3JSAzNSU7LS10ZWFsLTgtaHNsOjE2MiA4OCUgMzAlOy0tdGVhbC05LWhzbDoxNjIgODglIDI2JTstLWdyZWVuLTAtaHNsOjEzMSA2NyUgOTUlOy0tZ3JlZW4tMS1oc2w6MTI4IDc2JSA5MCU7LS1ncmVlbi0yLWhzbDoxMjggNzElIDgyJTstLWdyZWVuLTMtaHNsOjEyOSA2OCUgNzMlOy0tZ3JlZW4tNC1oc2w6MTMwIDYxJSA2NCU7LS1ncmVlbi01LWhzbDoxMzAgNTclIDU2JTstLWdyZWVuLTYtaHNsOjEzMSA1MCUgNTAlOy0tZ3JlZW4tNy1oc2w6MTMxIDUzJSA0NiU7LS1ncmVlbi04LWhzbDoxMzEgNTQlIDQwJTstLWdyZWVuLTktaHNsOjEzMiA1MiUgMzUlOy0tbGltZS0wLWhzbDo3OSA4MSUgOTQlOy0tbGltZS0xLWhzbDo4MCA4MyUgODglOy0tbGltZS0yLWhzbDo4MSA4MSUgODAlOy0tbGltZS0zLWhzbDo4MiA3NSUgNjklOy0tbGltZS00LWhzbDo4MyA3MyUgNTklOy0tbGltZS01LWhzbDo4NCA2OSUgNTElOy0tbGltZS02LWhzbDo4NSA3NCUgNDUlOy0tbGltZS03LWhzbDo4NSA3OSUgNDAlOy0tbGltZS04LWhzbDo4NiA4NCUgMzYlOy0tbGltZS05LWhzbDo4NSA4NCUgMzIlOy0teWVsbG93LTAtaHNsOjUwIDEwMCUgOTMlOy0teWVsbG93LTEtaHNsOjQ5IDEwMCUgODclOy0teWVsbG93LTItaHNsOjQ5IDEwMCUgODAlOy0teWVsbG93LTMtaHNsOjQ4IDEwMCUgNzAlOy0teWVsbG93LTQtaHNsOjQ3IDEwMCUgNjIlOy0teWVsbG93LTUtaHNsOjQ1IDk3JSA1NCU7LS15ZWxsb3ctNi1oc2w6NDIgOTYlIDUwJTstLXllbGxvdy03LWhzbDozOSAxMDAlIDQ4JTstLXllbGxvdy04LWhzbDozNSAxMDAlIDQ3JTstLXllbGxvdy05LWhzbDozMSAxMDAlIDQ1JTstLW9yYW5nZS0wLWhzbDozNCAxMDAlIDk1JTstLW9yYW5nZS0xLWhzbDozMyAxMDAlIDkwJTstLW9yYW5nZS0yLWhzbDozMyAxMDAlIDgzJTstLW9yYW5nZS0zLWhzbDozMiAxMDAlIDc0JTstLW9yYW5nZS00LWhzbDozMSAxMDAlIDY1JTstLW9yYW5nZS01LWhzbDoyOSAxMDAlIDU4JTstLW9yYW5nZS02LWhzbDoyNyA5OCUgNTQlOy0tb3JhbmdlLTctaHNsOjI0IDk0JSA1MCU7LS1vcmFuZ2UtOC1oc2w6MjEgOTAlIDQ4JTstLW9yYW5nZS05LWhzbDoxNyA4NyUgNDUlfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9vcGVuLXByb3BzL2NvbG9ycy1oc2wubWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLDJCQUEyQixDQUFDLDJCQUEyQixDQUFDLDJCQUEyQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDLDJCQUEyQixDQUFDLDJCQUEyQixDQUFDLDJCQUEyQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLHlCQUF5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6d2hlcmUoaHRtbCl7LS1ncmF5LTAtaHNsOjIxMCAxNyUgOTglOy0tZ3JheS0xLWhzbDoyMTAgMTclIDk1JTstLWdyYXktMi1oc2w6MjEwIDE2JSA5MyU7LS1ncmF5LTMtaHNsOjIxMCAxNCUgODklOy0tZ3JheS00LWhzbDoyMTAgMTQlIDgzJTstLWdyYXktNS1oc2w6MjEwIDExJSA3MSU7LS1ncmF5LTYtaHNsOjIxMCA3JSA1NiU7LS1ncmF5LTctaHNsOjIxMCA5JSAzMSU7LS1ncmF5LTgtaHNsOjIxMCAxMCUgMjMlOy0tZ3JheS05LWhzbDoyMTAgMTElIDE1JTstLXJlZC0wLWhzbDowIDEwMCUgOTglOy0tcmVkLTEtaHNsOjAgMTAwJSA5NSU7LS1yZWQtMi1oc2w6MCAxMDAlIDg5JTstLXJlZC0zLWhzbDowIDEwMCUgODMlOy0tcmVkLTQtaHNsOjAgMTAwJSA3NiU7LS1yZWQtNS1oc2w6MCAxMDAlIDcxJTstLXJlZC02LWhzbDowIDk0JSA2NSU7LS1yZWQtNy1oc2w6MCA4NiUgNTklOy0tcmVkLTgtaHNsOjAgNzQlIDU0JTstLXJlZC05LWhzbDowIDY1JSA0OCU7LS1waW5rLTAtaHNsOjMzNiAxMDAlIDk3JTstLXBpbmstMS1oc2w6MzM2IDEwMCUgOTQlOy0tcGluay0yLWhzbDozMzggOTElIDg3JTstLXBpbmstMy1oc2w6MzM5IDkwJSA4MSU7LS1waW5rLTQtaHNsOjMzOSA4OCUgNzQlOy0tcGluay01LWhzbDozMzkgODIlIDY3JTstLXBpbmstNi1oc2w6MzM5IDc2JSA1OSU7LS1waW5rLTctaHNsOjMzOSA2NyUgNTIlOy0tcGluay04LWhzbDozMzkgNjglIDQ1JTstLXBpbmstOS1oc2w6MzM5IDY5JSAzOCU7LS1ncmFwZS0wLWhzbDoyODAgNjclIDk2JTstLWdyYXBlLTEtaHNsOjI4NyA3NyUgOTIlOy0tZ3JhcGUtMi1oc2w6Mjg4IDg2JSA4NiU7LS1ncmFwZS0zLWhzbDoyODkgODUlIDc4JTstLWdyYXBlLTQtaHNsOjI4OCA4MyUgNzElOy0tZ3JhcGUtNS1oc2w6Mjg4IDc1JSA2NCU7LS1ncmFwZS02LWhzbDoyODggNjclIDU4JTstLWdyYXBlLTctaHNsOjI4OCA1NiUgNTIlOy0tZ3JhcGUtOC1oc2w6Mjg4IDU0JSA0NiU7LS1ncmFwZS05LWhzbDoyODggNTQlIDQwJTstLXZpb2xldC0wLWhzbDoyNTIgMTAwJSA5NyU7LS12aW9sZXQtMS1oc2w6MjU3IDEwMCUgOTMlOy0tdmlvbGV0LTItaHNsOjI1NiAxMDAlIDg3JTstLXZpb2xldC0zLWhzbDoyNTUgOTQlIDc5JTstLXZpb2xldC00LWhzbDoyNTUgOTMlIDcyJTstLXZpb2xldC01LWhzbDoyNTUgOTElIDY3JTstLXZpb2xldC02LWhzbDoyNTUgODYlIDYzJTstLXZpb2xldC03LWhzbDoyNTUgNzglIDYwJTstLXZpb2xldC04LWhzbDoyNTUgNjclIDU1JTstLXZpb2xldC05LWhzbDoyNTUgNTMlIDUwJTstLWluZGlnby0wLWhzbDoyMjMgMTAwJSA5NiU7LS1pbmRpZ28tMS1oc2w6MjI1IDEwMCUgOTMlOy0taW5kaWdvLTItaHNsOjIyOCAxMDAlIDg2JTstLWluZGlnby0zLWhzbDoyMjggMTAwJSA3OCU7LS1pbmRpZ28tNC1oc2w6MjI4IDk2JSA3MiU7LS1pbmRpZ28tNS1oc2w6MjI4IDk0JSA2NyU7LS1pbmRpZ28tNi1oc2w6MjI4IDg5JSA2MyU7LS1pbmRpZ28tNy1oc2w6MjI4IDgxJSA1OSU7LS1pbmRpZ28tOC1oc2w6MjI4IDY5JSA1NSU7LS1pbmRpZ28tOS1oc2w6MjMwIDU3JSA1MCU7LS1ibHVlLTAtaHNsOjIwNSAxMDAlIDk1JTstLWJsdWUtMS1oc2w6MjA2IDEwMCUgOTElOy0tYmx1ZS0yLWhzbDoyMDYgMTAwJSA4MiU7LS1ibHVlLTMtaHNsOjIwNiA5NiUgNzIlOy0tYmx1ZS00LWhzbDoyMDcgOTElIDY0JTstLWJsdWUtNS1oc2w6MjA3IDg2JSA1NyU7LS1ibHVlLTYtaHNsOjIwOCA4MCUgNTIlOy0tYmx1ZS03LWhzbDoyMDggNzclIDQ3JTstLWJsdWUtOC1oc2w6MjA5IDc3JSA0MyU7LS1ibHVlLTktaHNsOjIwOSA3NSUgMzglOy0tY3lhbi0wLWhzbDoxODUgODElIDk0JTstLWN5YW4tMS1oc2w6MTg1IDg0JSA4OCU7LS1jeWFuLTItaHNsOjE4NiA3NyUgNzclOy0tY3lhbi0zLWhzbDoxODcgNzQlIDY1JTstLWN5YW4tNC1oc2w6MTg3IDY5JSA1NSU7LS1jeWFuLTUtaHNsOjE4OCA3MiUgNDclOy0tY3lhbi02LWhzbDoxODcgODAlIDQyJTstLWN5YW4tNy1oc2w6MTg4IDgzJSAzNyU7LS1jeWFuLTgtaHNsOjE4OSA4NSUgMzIlOy0tY3lhbi05LWhzbDoxODkgODUlIDI4JTstLXRlYWwtMC1oc2w6MTYxIDc5JSA5NSU7LS10ZWFsLTEtaHNsOjE2MCA4NSUgODclOy0tdGVhbC0yLWhzbDoxNjIgNzglIDc3JTstLXRlYWwtMy1oc2w6MTYyIDcyJSA2NSU7LS10ZWFsLTQtaHNsOjE2MiA2OCUgNTQlOy0tdGVhbC01LWhzbDoxNjIgNzMlIDQ2JTstLXRlYWwtNi1oc2w6MTYyIDgyJSA0MCU7LS10ZWFsLTctaHNsOjE2MiA4NyUgMzUlOy0tdGVhbC04LWhzbDoxNjIgODglIDMwJTstLXRlYWwtOS1oc2w6MTYyIDg4JSAyNiU7LS1ncmVlbi0wLWhzbDoxMzEgNjclIDk1JTstLWdyZWVuLTEtaHNsOjEyOCA3NiUgOTAlOy0tZ3JlZW4tMi1oc2w6MTI4IDcxJSA4MiU7LS1ncmVlbi0zLWhzbDoxMjkgNjglIDczJTstLWdyZWVuLTQtaHNsOjEzMCA2MSUgNjQlOy0tZ3JlZW4tNS1oc2w6MTMwIDU3JSA1NiU7LS1ncmVlbi02LWhzbDoxMzEgNTAlIDUwJTstLWdyZWVuLTctaHNsOjEzMSA1MyUgNDYlOy0tZ3JlZW4tOC1oc2w6MTMxIDU0JSA0MCU7LS1ncmVlbi05LWhzbDoxMzIgNTIlIDM1JTstLWxpbWUtMC1oc2w6NzkgODElIDk0JTstLWxpbWUtMS1oc2w6ODAgODMlIDg4JTstLWxpbWUtMi1oc2w6ODEgODElIDgwJTstLWxpbWUtMy1oc2w6ODIgNzUlIDY5JTstLWxpbWUtNC1oc2w6ODMgNzMlIDU5JTstLWxpbWUtNS1oc2w6ODQgNjklIDUxJTstLWxpbWUtNi1oc2w6ODUgNzQlIDQ1JTstLWxpbWUtNy1oc2w6ODUgNzklIDQwJTstLWxpbWUtOC1oc2w6ODYgODQlIDM2JTstLWxpbWUtOS1oc2w6ODUgODQlIDMyJTstLXllbGxvdy0wLWhzbDo1MCAxMDAlIDkzJTstLXllbGxvdy0xLWhzbDo0OSAxMDAlIDg3JTstLXllbGxvdy0yLWhzbDo0OSAxMDAlIDgwJTstLXllbGxvdy0zLWhzbDo0OCAxMDAlIDcwJTstLXllbGxvdy00LWhzbDo0NyAxMDAlIDYyJTstLXllbGxvdy01LWhzbDo0NSA5NyUgNTQlOy0teWVsbG93LTYtaHNsOjQyIDk2JSA1MCU7LS15ZWxsb3ctNy1oc2w6MzkgMTAwJSA0OCU7LS15ZWxsb3ctOC1oc2w6MzUgMTAwJSA0NyU7LS15ZWxsb3ctOS1oc2w6MzEgMTAwJSA0NSU7LS1vcmFuZ2UtMC1oc2w6MzQgMTAwJSA5NSU7LS1vcmFuZ2UtMS1oc2w6MzMgMTAwJSA5MCU7LS1vcmFuZ2UtMi1oc2w6MzMgMTAwJSA4MyU7LS1vcmFuZ2UtMy1oc2w6MzIgMTAwJSA3NCU7LS1vcmFuZ2UtNC1oc2w6MzEgMTAwJSA2NSU7LS1vcmFuZ2UtNS1oc2w6MjkgMTAwJSA1OCU7LS1vcmFuZ2UtNi1oc2w6MjcgOTglIDU0JTstLW9yYW5nZS03LWhzbDoyNCA5NCUgNTAlOy0tb3JhbmdlLTgtaHNsOjIxIDkwJSA0OCU7LS1vcmFuZ2UtOS1oc2w6MTcgODclIDQ1JX1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWluZGlnby03OiAjNDI2M2ViO1xcbiAgLS1ncmFwZS03OiAjYWUzZWM5O1xcbiAgLS1ncmF5LTk6ICMyMTI1Mjk7XFxuICAtLWdyYXktNzogIzQ5NTA1NztcXG4gIC0tZ3JheS0wOiAjZjhmOWZhO1xcbiAgLS1ncmF5LTI6ICNlOWVjZWY7XFxuICAtLWdyYXktMzogI2RlZTJlNjtcXG4gIC0tZ3JheS00OiAjY2VkNGRhO1xcbiAgLS1ncmF5LTY6ICM4NjhlOTY7XFxuICAtLWZvbnQtc2Fuczogc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksUm9ib3RvLFVidW50dSxDYW50YXJlbGwsTm90byBTYW5zLHNhbnMtc2VyaWY7XFxuICAtLWZvbnQtbGluZWhlaWdodC0zOiAxLjU7XFxuICAtLWluZGlnby0zOiAjOTFhN2ZmO1xcbiAgLS1ncmFwZS0zOiAjZTU5OWY3O1xcbiAgLS1ncmF5LTE6ICNmMWYzZjU7XFxuICAtLWdyYXktODogIzM0M2E0MDtcXG4gIC0tZWFzZS0yOiBjdWJpYy1iZXppZXIoLjI1LCAwLCAuNCwgMSk7XFxuICAtLWZvbnQtd2VpZ2h0LTk6IDkwMDtcXG4gIC0tZm9udC1saW5laGVpZ2h0LTE6IDEuMjU7XFxuICAtLWZvbnQtc2l6ZS04OiAzLjVyZW07XFxuICAtLXNpemUtaGVhZGVyLTE6IDIwY2g7XFxuICAtLWZvbnQtc2l6ZS02OiAyLjVyZW07XFxuICAtLXNpemUtaGVhZGVyLTI6IDI1Y2g7XFxuICAtLWZvbnQtc2l6ZS01OiAycmVtO1xcbiAgLS1mb250LXNpemUtNDogMS41cmVtO1xcbiAgLS1mb250LXNpemUtMzogMS4yNXJlbTtcXG4gIC0tc2l6ZS1oZWFkZXItMzogMzVjaDtcXG4gIC0tZm9udC1zaXplLTI6IDEuMXJlbTtcXG4gIC0tc2l6ZS0xOiAuMjVyZW07XFxuICAtLWluZGlnby0yOiAjYmFjOGZmO1xcbiAgLS1ncmFwZS0yOiAjZWViZWZhO1xcbiAgLS1zaXplLTI6IC41cmVtO1xcbiAgLS1yYWRpdXMtMjogNXB4O1xcbiAgLS1zaXplLTM6IDFyZW07XFxuICAtLXNpemUtMTA6IDVyZW07XFxuICAtLWZvbnQtbW9ubzogRGFuayBNb25vLE9wZXJhdG9yIE1vbm8sSW5jb25zb2xhdGEsRmlyYSBNb25vLHVpLW1vbm9zcGFjZSxTRiBNb25vLE1vbmFjbyxEcm9pZCBTYW5zIE1vbm8sU291cmNlIENvZGUgUHJvLG1vbm9zcGFjZTtcXG4gIC0tYm9yZGVyLXNpemUtMTogMXB4O1xcbiAgLS1zaXplLTg6IDNyZW07XFxuICAtLXNpemUtY29udGVudC0yOiA0NWNoO1xcbiAgLS1zaXplLWNvbnRlbnQtMzogNjBjaDtcXG4gIC0tZm9udC13ZWlnaHQtNzogNzAwO1xcbiAgLS1zaXplLTU6IDEuNXJlbTtcXG4gIC0tZm9udC1zaXplLTA6IC43NXJlbTtcXG4gIC0tc2l6ZS1jb250ZW50LTE6IDIwY2g7XFxuICAtLWJvcmRlci1zaXplLTI6IDJweDtcXG4gIC0tc2l6ZS1mbHVpZC01OiBjbGFtcCg0cmVtLCA1dncsIDVyZW0pO1xcbiAgLS1mb250LXNpemUtMTogMXJlbTtcXG4gIC0tYm9yZGVyLXNpemUtMzogNXB4O1xcbiAgLS1zaXplLTQ6IDEuMjVyZW07XFxuICAtLXJlZC05OiAjYzkyYTJhO1xcbiAgLS1yZWQtMjogI2ZmYzljOTtcXG4gIC0tZ3JlZW4tOTogIzJiOGEzZTtcXG4gIC0tZ3JlZW4tMTogI2QzZjlkODtcXG4gIC0tYmx1ZS01OiAjMzM5YWYwO1xcbiAgLS1yYWRpdXMtMzogMXJlbTtcXG4gIC0tc2hhZG93LTY6IFxcbiAgICAwIC0xcHggMnB4IDAgaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyBjYWxjKHZhcigtLXNoYWRvdy1zdHJlbmd0aCkgKyAyJSkpLFxcbiAgICAwIDNweCAycHggLTJweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIGNhbGModmFyKC0tc2hhZG93LXN0cmVuZ3RoKSArIDMlKSksXFxuICAgIDAgN3B4IDVweCAtMnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gY2FsYyh2YXIoLS1zaGFkb3ctc3RyZW5ndGgpICsgMyUpKSxcXG4gICAgMCAxMnB4IDEwcHggLTJweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIGNhbGModmFyKC0tc2hhZG93LXN0cmVuZ3RoKSArIDQlKSksXFxuICAgIDAgMjJweCAxOHB4IC0ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyBjYWxjKHZhcigtLXNoYWRvdy1zdHJlbmd0aCkgKyA1JSkpLFxcbiAgICAwIDQxcHggMzNweCAtMnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gY2FsYyh2YXIoLS1zaGFkb3ctc3RyZW5ndGgpICsgNiUpKSxcXG4gICAgMCAxMDBweCA4MHB4IC0ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyBjYWxjKHZhcigtLXNoYWRvdy1zdHJlbmd0aCkgKyA3JSkpO1xcbiAgLS1zaGFkb3ctY29sb3I6IDIyMCAzJSAxNSU7XFxuICAtLXNoYWRvdy1zdHJlbmd0aDogMSU7XFxufVxcbjp3aGVyZShodG1sKSB7XFxuICAtLWxpbms6IHZhcigtLWluZGlnby03KTtcXG4gIC0tbGluay12aXNpdGVkOiB2YXIoLS1ncmFwZS03KTtcXG4gIC0tdGV4dC0xOiB2YXIoLS1ncmF5LTkpO1xcbiAgLS10ZXh0LTI6IHZhcigtLWdyYXktNyk7XFxuICAtLXN1cmZhY2UtMTogdmFyKC0tZ3JheS0wKTtcXG4gIC0tc3VyZmFjZS0yOiB2YXIoLS1ncmF5LTIpO1xcbiAgLS1zdXJmYWNlLTM6IHZhcigtLWdyYXktMyk7XFxuICAtLXN1cmZhY2UtNDogdmFyKC0tZ3JheS00KTtcXG4gIC0tc2Nyb2xsdGh1bWItY29sb3I6IHZhcigtLWdyYXktNik7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICBhY2NlbnQtY29sb3I6IHZhcigtLWxpbmspO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0xKTtcXG4gIGJsb2NrLXNpemU6IDEwMCU7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tbGluayk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC0yKTtcXG4gIGNvbG9yLXNjaGVtZTogbGlnaHQ7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LWxpbmVoZWlnaHQtMyk7XFxuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNjcm9sbHRodW1iLWNvbG9yKSB0cmFuc3BhcmVudDtcXG59XFxuQG1lZGlhIChkeW5hbWljLXJhbmdlOiBoaWdoKSB7XFxuICBAc3VwcG9ydHMgKGNvbG9yKGRpc3BsYXktcDMgMCAwLjUgMSkpIHtcXG4gICAgOndoZXJlKGh0bWwpIHtcXG4gICAgICAtLWxpbms6IGNvbG9yKGRpc3BsYXktcDMgMCAwLjUgMSk7XFxuICAgICAgLS1saW5rLXZpc2l0ZWQ6IGNvbG9yKGRpc3BsYXktcDMgMC42IDAuMiAxKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6d2hlcmUoaHRtbCkge1xcbiAgICAtLWxpbms6IHZhcigtLWluZGlnby0zKTtcXG4gICAgLS1saW5rLXZpc2l0ZWQ6IHZhcigtLWdyYXBlLTMpO1xcbiAgICAtLXRleHQtMTogdmFyKC0tZ3JheS0xKTtcXG4gICAgLS10ZXh0LTI6IHZhcigtLWdyYXktNCk7XFxuICAgIC0tc3VyZmFjZS0xOiB2YXIoLS1ncmF5LTkpO1xcbiAgICAtLXN1cmZhY2UtMjogdmFyKC0tZ3JheS04KTtcXG4gICAgLS1zdXJmYWNlLTM6IHZhcigtLWdyYXktNyk7XFxuICAgIC0tc3VyZmFjZS00OiB2YXIoLS1ncmF5LTYpO1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxufVxcbjp3aGVyZShoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBkdCkge1xcbiAgY29sb3I6IHZhcigtLXRleHQtMSk7XFxufVxcbjp3aGVyZShhW2hyZWZdKSB7XFxuICBjb2xvcjogdmFyKC0tbGluayk7XFxufVxcbjp3aGVyZShhW2hyZWZdKTp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbn1cXG46Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saW5rKTtcXG59XFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcXG4gIDp3aGVyZShodG1sKSB7XFxuICAgIC0tc2Nyb2xsdGh1bWItY29sb3I6IHZhcigtLWdyYXktNyk7XFxuICB9XFxufVxcbiosXFxuOmFmdGVyLFxcbjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuOndoZXJlKDpub3QoZGlhbG9nKSkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG46d2hlcmUoOm5vdChmaWVsZHNldCwgcHJvZ3Jlc3MsIG1ldGVyKSkge1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG59XFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XFxuICA6d2hlcmUoaHRtbCkge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIH1cXG59XFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XFxuICA6d2hlcmUoOmZvY3VzLXZpc2libGUpIHtcXG4gICAgdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgMTQ1bXMgdmFyKC0tZWFzZS0yKTtcXG4gIH1cXG4gIDp3aGVyZSg6bm90KDphY3RpdmUpOmZvY3VzLXZpc2libGUpIHtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxuICB9XFxufVxcbjp3aGVyZSg6bm90KDphY3RpdmUpOmZvY3VzLXZpc2libGUpIHtcXG4gIG91dGxpbmUtb2Zmc2V0OiA1cHg7XFxufVxcbjp3aGVyZShib2R5KSB7XFxuICBtaW4tYmxvY2stc2l6ZTogMTAwJTtcXG59XFxuOndoZXJlKGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYpIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC05KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LWxpbmVoZWlnaHQtMSk7XFxufVxcbjp3aGVyZShoMSkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtOCk7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtaGVhZGVyLTEpO1xcbn1cXG46d2hlcmUoaDIpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTYpO1xcbiAgbWF4LWlubGluZS1zaXplOiB2YXIoLS1zaXplLWhlYWRlci0yKTtcXG59XFxuOndoZXJlKGgzKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS01KTtcXG59XFxuOndoZXJlKGg0KSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS00KTtcXG59XFxuOndoZXJlKGg1KSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zKTtcXG59XFxuOndoZXJlKGgzLCBoNCwgaDUsIGg2LCBkdCkge1xcbiAgbWF4LWlubGluZS1zaXplOiB2YXIoLS1zaXplLWhlYWRlci0zKTtcXG59XFxuOndoZXJlKHAsIHVsLCBvbCwgZGwsIGg2KSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yKTtcXG59XFxuOndoZXJlKGEsIHUsIGlucywgYWJicikge1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAxcHg7XFxufVxcbkBzdXBwb3J0cyAoLW1vei1hcHBlYXJhbmNlOiBub25lKSB7XFxuICA6d2hlcmUoYSwgdSwgaW5zLCBhYmJyKSB7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMnB4O1xcbiAgfVxcbn1cXG46d2hlcmUoYVtocmVmXSwgYXJlYSwgYnV0dG9uLCBpbnB1dCwgbGFiZWxbZm9yXSwgc2VsZWN0LCBzdW1tYXJ5LCB0ZXh0YXJlYSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Kj1cXFwiLVxcXCJdKSkge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG46d2hlcmUoYSkge1xcbiAgbWFyZ2luLWJsb2NrOiBjYWxjKHZhcigtLXNpemUtMSkgKiAtMSk7XFxuICBtYXJnaW4taW5saW5lOiBjYWxjKHZhcigtLXNpemUtMSkgKiAtMSk7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zaXplLTEpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtMSk7XFxufVxcbjp3aGVyZShhKTp3aGVyZShbaHJlZl0pIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1pbmRpZ28tMik7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0taW5kaWdvLTIpO1xcbn1cXG46d2hlcmUoYSk6d2hlcmUoW2hyZWZdKTp3aGVyZSg6dmlzaXRlZCkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWdyYXBlLTIpO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWdyYXBlLTIpO1xcbn1cXG46d2hlcmUoYSk6d2hlcmUoOm5vdCg6aG92ZXIpKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcbjp3aGVyZShpbWcsIHN2ZywgdmlkZW8sIGNhbnZhcywgYXVkaW8sIGlmcmFtZSwgZW1iZWQsIG9iamVjdCkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbjp3aGVyZShpbWcsIHN2ZywgdmlkZW8pIHtcXG4gIGJsb2NrLXNpemU6IGF1dG87XFxuICBtYXgtaW5saW5lLXNpemU6IDEwMCU7XFxufVxcbjp3aGVyZShpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0KSxcXG46d2hlcmUoaW5wdXRbdHlwZT1cXFwiZmlsZVxcXCJdKTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XFxufVxcbjp3aGVyZShpbnB1dCwgdGV4dGFyZWEpIHtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMSk7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0yKTtcXG59XFxuOndoZXJlKHNlbGVjdCkge1xcbiAgcGFkZGluZy1ibG9jazogMC43NWNoO1xcbiAgcGFkZGluZy1pbmxpbmU6IDEuMjVjaCAwO1xcbn1cXG46d2hlcmUodGV4dGFyZWEsIHNlbGVjdCwgaW5wdXQ6bm90KGJ1dHRvbiwgYnV0dG9uW3R5cGVdLCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sIGlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0pKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6d2hlcmUodGV4dGFyZWEsIHNlbGVjdCwgaW5wdXQ6bm90KGJ1dHRvbiwgYnV0dG9uW3R5cGVdLCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sIGlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0pKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzFhMWM7XFxuICB9XFxufVxcbjp3aGVyZSh0ZXh0YXJlYSkge1xcbiAgcmVzaXplOiBibG9jaztcXG59XFxuOndoZXJlKGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0pIHtcXG4gIGJsb2NrLXNpemU6IHZhcigtLXNpemUtMyk7XFxuICBpbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG59XFxuOndoZXJlKHN2Zykge1xcbiAgc3Ryb2tlOiBub25lO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG46d2hlcmUoc3ZnKTp3aGVyZSg6bm90KFtmaWxsXSkpIHtcXG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxufVxcbjp3aGVyZShzdmcpOndoZXJlKDpub3QoW3dpZHRoXSkpIHtcXG4gIGlubGluZS1zaXplOiB2YXIoLS1zaXplLTEwKTtcXG59XFxuOndoZXJlKGNvZGUsIGtiZCwgc2FtcCwgcHJlKSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcXG59XFxuOndoZXJlKDpub3QocHJlKSA+IGNvZGUsIGtiZCkge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuOndoZXJlKHByZSkge1xcbiAgbWF4LWlubGluZS1zaXplOiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgbWF4LWlubGluZS1zaXplOiAtbW96LW1heC1jb250ZW50O1xcbiAgbWF4LWlubGluZS1zaXplOiBtYXgtY29udGVudDtcXG4gIG1pbi1pbmxpbmUtc2l6ZTogMDtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcbjp3aGVyZSg6bm90KHByZSkgPiBjb2RlKSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0xKSB2YXIoLS1zaXplLTIpO1xcbn1cXG46d2hlcmUoa2JkLCB2YXIpIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3VyZmFjZS00KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIGJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLXNpemUtMSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpIHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShtYXJrKSB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0xKTtcXG59XFxuOndoZXJlKG9sLCB1bCkge1xcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1zaXplLTgpO1xcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2l6ZS04KTtcXG59XFxuOndoZXJlKGxpKSB7XFxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLXNpemUtMik7XFxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zaXplLTIpO1xcbn1cXG46d2hlcmUobGksIGRkLCBmaWdjYXB0aW9uKSB7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtY29udGVudC0yKTtcXG59XFxuOndoZXJlKHApIHtcXG4gIG1heC1pbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS1jb250ZW50LTMpO1xcbn1cXG46d2hlcmUoZHQsIHN1bW1hcnkpIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC03KTtcXG59XFxuOndoZXJlKGR0Om5vdCg6Zmlyc3Qtb2YtdHlwZSkpIHtcXG4gIC13ZWJraXQtbWFyZ2luLWJlZm9yZTogdmFyKC0tc2l6ZS01KTtcXG4gICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1zaXplLTUpO1xcbn1cXG46d2hlcmUoc21hbGwpIHtcXG4gIGZvbnQtc2l6ZTogbWF4KDAuNWVtLCB2YXIoLS1mb250LXNpemUtMCkpO1xcbiAgbWF4LWlubGluZS1zaXplOiB2YXIoLS1zaXplLWNvbnRlbnQtMSk7XFxufVxcbjp3aGVyZShocikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0zKTtcXG4gIGhlaWdodDogdmFyKC0tYm9yZGVyLXNpemUtMik7XFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNpemUtZmx1aWQtNSk7XFxufVxcbjp3aGVyZShmaWd1cmUpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLXNpemUtMik7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG46d2hlcmUoZmlndXJlKSA+IDp3aGVyZShmaWdjYXB0aW9uKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0xKTtcXG59XFxuOndoZXJlKGJsb2NrcXVvdGUsIDpub3QoYmxvY2txdW90ZSkgPiBjaXRlKSB7XFxuICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB2YXIoLS1ib3JkZXItc2l6ZS0zKTtcXG59XFxuOndoZXJlKGJsb2NrcXVvdGUpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtY29udGVudC0yKTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMyk7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS00KTtcXG59XFxuOndoZXJlKDpub3QoYmxvY2txdW90ZSkgPiBjaXRlKSB7XFxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLXNpemUtMik7XFxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zaXplLTIpO1xcbn1cXG46d2hlcmUoc3VtbWFyeSkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1zaXplLTIpICogLTEpIGNhbGModmFyKC0tc2l6ZS0zKSAqIC0xKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMikgdmFyKC0tc2l6ZS0zKTtcXG59XFxuOndoZXJlKGRldGFpbHMpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtMik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zaXplLTIpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtMyk7XFxufVxcbjp3aGVyZShkZXRhaWxzW29wZW5dID4gc3VtbWFyeSkge1xcbiAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWVuZC1zdGFydC1yYWRpdXM6IDA7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTIpO1xcbn1cXG46d2hlcmUoZmllbGRzZXQpIHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUtMSkgc29saWQgdmFyKC0tc3VyZmFjZS00KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG59XFxuOndoZXJlKGRlbCkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkLTkpO1xcbiAgY29sb3I6IHZhcigtLXJlZC0yKTtcXG59XFxuOndoZXJlKGlucykge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tOSk7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxufVxcbjp3aGVyZShhYmJyKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYmx1ZS01KTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1ibHVlLTUpO1xcbn1cXG46d2hlcmUoZGlhbG9nKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTMpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTYpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIDp3aGVyZShkaWFsb2cpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0yKTtcXG4gIH1cXG59XFxuOndoZXJlKGRpYWxvZyk6Oi13ZWJraXQtYmFja2Ryb3Age1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcXG59XFxuOndoZXJlKGRpYWxvZyk6OmJhY2tkcm9wIHtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XFxufVxcbjp3aGVyZShodG1sW1xcXFw6aGFzXFxcXChkaWFsb2dcXFxcW29wZW5cXFxcXVxcXFwpXSkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuOndoZXJlKGh0bWw6aGFzKGRpYWxvZ1tvcGVuXSkpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbjp3aGVyZShtZW51KSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO1xcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG59XFxuOndoZXJlKHN1cCkge1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG59XFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOnJvb3Qge1xcbiAgICAtLXNoYWRvdy1jb2xvcjogMjIwIDQwJSAyJTtcXG4gICAgLS1zaGFkb3ctc3RyZW5ndGg6IDI1JTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiPG5vIHNvdXJjZT5cIixcIndlYnBhY2s6Ly8uL3NyYy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQUEsb0JBQUE7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsa0JBQUE7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsa0JBQUE7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsMkZBQUE7RUFBQSx5QkFBQTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsc0NBQUE7RUFB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LWxpbms6IHZhcigtLWluZGlnby03KTtcXG4gIC0tbGluay12aXNpdGVkOiB2YXIoLS1ncmFwZS03KTtcXG4gIC0tdGV4dC0xOiB2YXIoLS1ncmF5LTkpO1xcbiAgLS10ZXh0LTI6IHZhcigtLWdyYXktNyk7XFxuICAtLXN1cmZhY2UtMTogdmFyKC0tZ3JheS0wKTtcXG4gIC0tc3VyZmFjZS0yOiB2YXIoLS1ncmF5LTIpO1xcbiAgLS1zdXJmYWNlLTM6IHZhcigtLWdyYXktMyk7XFxuICAtLXN1cmZhY2UtNDogdmFyKC0tZ3JheS00KTtcXG4gIC0tc2Nyb2xsdGh1bWItY29sb3I6IHZhcigtLWdyYXktNik7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICBhY2NlbnQtY29sb3I6IHZhcigtLWxpbmspO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0xKTtcXG4gIGJsb2NrLXNpemU6IDEwMCU7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tbGluayk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC0yKTtcXG4gIGNvbG9yLXNjaGVtZTogbGlnaHQ7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LWxpbmVoZWlnaHQtMyk7XFxuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNjcm9sbHRodW1iLWNvbG9yKSB0cmFuc3BhcmVudDtcXG59XFxuQG1lZGlhIChkeW5hbWljLXJhbmdlOiBoaWdoKSB7XFxuICBAc3VwcG9ydHMgKGNvbG9yKGRpc3BsYXktcDMgMCAwLjUgMSkpIHtcXG4gICAgOndoZXJlKGh0bWwpIHtcXG4gICAgICAtLWxpbms6IGNvbG9yKGRpc3BsYXktcDMgMCAwLjUgMSk7XFxuICAgICAgLS1saW5rLXZpc2l0ZWQ6IGNvbG9yKGRpc3BsYXktcDMgMC42IDAuMiAxKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6d2hlcmUoaHRtbCkge1xcbiAgICAtLWxpbms6IHZhcigtLWluZGlnby0zKTtcXG4gICAgLS1saW5rLXZpc2l0ZWQ6IHZhcigtLWdyYXBlLTMpO1xcbiAgICAtLXRleHQtMTogdmFyKC0tZ3JheS0xKTtcXG4gICAgLS10ZXh0LTI6IHZhcigtLWdyYXktNCk7XFxuICAgIC0tc3VyZmFjZS0xOiB2YXIoLS1ncmF5LTkpO1xcbiAgICAtLXN1cmZhY2UtMjogdmFyKC0tZ3JheS04KTtcXG4gICAgLS1zdXJmYWNlLTM6IHZhcigtLWdyYXktNyk7XFxuICAgIC0tc3VyZmFjZS00OiB2YXIoLS1ncmF5LTYpO1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxufVxcbjp3aGVyZShoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBkdCkge1xcbiAgY29sb3I6IHZhcigtLXRleHQtMSk7XFxufVxcbjp3aGVyZShhW2hyZWZdKSB7XFxuICBjb2xvcjogdmFyKC0tbGluayk7XFxufVxcbjp3aGVyZShhW2hyZWZdKTp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbn1cXG46Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saW5rKTtcXG59XFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcXG4gIDp3aGVyZShodG1sKSB7XFxuICAgIC0tc2Nyb2xsdGh1bWItY29sb3I6IHZhcigtLWdyYXktNyk7XFxuICB9XFxufVxcbiosXFxuOmFmdGVyLFxcbjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuOndoZXJlKDpub3QoZGlhbG9nKSkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG46d2hlcmUoOm5vdChmaWVsZHNldCwgcHJvZ3Jlc3MsIG1ldGVyKSkge1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG59XFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XFxuICA6d2hlcmUoaHRtbCkge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIH1cXG59XFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XFxuICA6d2hlcmUoOmZvY3VzLXZpc2libGUpIHtcXG4gICAgdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgMTQ1bXMgdmFyKC0tZWFzZS0yKTtcXG4gIH1cXG4gIDp3aGVyZSg6bm90KDphY3RpdmUpOmZvY3VzLXZpc2libGUpIHtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxuICB9XFxufVxcbjp3aGVyZSg6bm90KDphY3RpdmUpOmZvY3VzLXZpc2libGUpIHtcXG4gIG91dGxpbmUtb2Zmc2V0OiA1cHg7XFxufVxcbjp3aGVyZShib2R5KSB7XFxuICBtaW4tYmxvY2stc2l6ZTogMTAwJTtcXG59XFxuOndoZXJlKGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYpIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC05KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LWxpbmVoZWlnaHQtMSk7XFxufVxcbjp3aGVyZShoMSkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtOCk7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtaGVhZGVyLTEpO1xcbn1cXG46d2hlcmUoaDIpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTYpO1xcbiAgbWF4LWlubGluZS1zaXplOiB2YXIoLS1zaXplLWhlYWRlci0yKTtcXG59XFxuOndoZXJlKGgzKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS01KTtcXG59XFxuOndoZXJlKGg0KSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS00KTtcXG59XFxuOndoZXJlKGg1KSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zKTtcXG59XFxuOndoZXJlKGgzLCBoNCwgaDUsIGg2LCBkdCkge1xcbiAgbWF4LWlubGluZS1zaXplOiB2YXIoLS1zaXplLWhlYWRlci0zKTtcXG59XFxuOndoZXJlKHAsIHVsLCBvbCwgZGwsIGg2KSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yKTtcXG59XFxuOndoZXJlKGEsIHUsIGlucywgYWJicikge1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAxcHg7XFxufVxcbkBzdXBwb3J0cyAoLW1vei1hcHBlYXJhbmNlOiBub25lKSB7XFxuICA6d2hlcmUoYSwgdSwgaW5zLCBhYmJyKSB7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMnB4O1xcbiAgfVxcbn1cXG46d2hlcmUoYVtocmVmXSwgYXJlYSwgYnV0dG9uLCBpbnB1dCwgbGFiZWxbZm9yXSwgc2VsZWN0LCBzdW1tYXJ5LCB0ZXh0YXJlYSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Kj1cXFwiLVxcXCJdKSkge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG46d2hlcmUoYSkge1xcbiAgbWFyZ2luLWJsb2NrOiBjYWxjKHZhcigtLXNpemUtMSkgKiAtMSk7XFxuICBtYXJnaW4taW5saW5lOiBjYWxjKHZhcigtLXNpemUtMSkgKiAtMSk7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zaXplLTEpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtMSk7XFxufVxcbjp3aGVyZShhKTp3aGVyZShbaHJlZl0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0taW5kaWdvLTIpO1xcbn1cXG46d2hlcmUoYSk6d2hlcmUoW2hyZWZdKTp3aGVyZSg6dmlzaXRlZCkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1ncmFwZS0yKTtcXG59XFxuOndoZXJlKGEpOndoZXJlKDpub3QoOmhvdmVyKSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG46d2hlcmUoaW1nLCBzdmcsIHZpZGVvLCBjYW52YXMsIGF1ZGlvLCBpZnJhbWUsIGVtYmVkLCBvYmplY3QpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG46d2hlcmUoaW1nLCBzdmcsIHZpZGVvKSB7XFxuICBibG9jay1zaXplOiBhdXRvO1xcbiAgbWF4LWlubGluZS1zaXplOiAxMDAlO1xcbn1cXG46d2hlcmUoaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCksXFxuOndoZXJlKGlucHV0W3R5cGU9XFxcImZpbGVcXFwiXSk6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xcbn1cXG46d2hlcmUoaW5wdXQsIHRleHRhcmVhKSB7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zaXplLTEpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShzZWxlY3QpIHtcXG4gIHBhZGRpbmctYmxvY2s6IDAuNzVjaDtcXG4gIHBhZGRpbmctaW5saW5lOiAxLjI1Y2ggMDtcXG59XFxuOndoZXJlKHRleHRhcmVhLCBzZWxlY3QsIGlucHV0Om5vdChidXR0b24sIGJ1dHRvblt0eXBlXSwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdKSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG59XFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOndoZXJlKHRleHRhcmVhLCBzZWxlY3QsIGlucHV0Om5vdChidXR0b24sIGJ1dHRvblt0eXBlXSwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdKSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxYTFjO1xcbiAgfVxcbn1cXG46d2hlcmUodGV4dGFyZWEpIHtcXG4gIHJlc2l6ZTogYmxvY2s7XFxufVxcbjp3aGVyZShpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdKSB7XFxuICBibG9jay1zaXplOiB2YXIoLS1zaXplLTMpO1xcbiAgaW5saW5lLXNpemU6IHZhcigtLXNpemUtMyk7XFxufVxcbjp3aGVyZShzdmcpIHtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuOndoZXJlKHN2Zyk6d2hlcmUoOm5vdChbZmlsbF0pKSB7XFxuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbn1cXG46d2hlcmUoc3ZnKTp3aGVyZSg6bm90KFt3aWR0aF0pKSB7XFxuICBpbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS0xMCk7XFxufVxcbjp3aGVyZShjb2RlLCBrYmQsIHNhbXAsIHByZSkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XFxufVxcbjp3aGVyZSg6bm90KHByZSkgPiBjb2RlLCBrYmQpIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbjp3aGVyZShwcmUpIHtcXG4gIG1heC1pbmxpbmUtc2l6ZTogbWF4LWNvbnRlbnQ7XFxuICBtaW4taW5saW5lLXNpemU6IDA7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG46d2hlcmUoOm5vdChwcmUpID4gY29kZSkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMSkgdmFyKC0tc2l6ZS0yKTtcXG59XFxuOndoZXJlKGtiZCwgdmFyKSB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXN1cmZhY2UtNCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICBib3JkZXItd2lkdGg6IHZhcigtLWJvcmRlci1zaXplLTEpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0xKSB2YXIoLS1zaXplLTIpO1xcbn1cXG46d2hlcmUobWFyaykge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtMSk7XFxufVxcbjp3aGVyZShvbCwgdWwpIHtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zaXplLTgpO1xcbn1cXG46d2hlcmUobGkpIHtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zaXplLTIpO1xcbn1cXG46d2hlcmUobGksIGRkLCBmaWdjYXB0aW9uKSB7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtY29udGVudC0yKTtcXG59XFxuOndoZXJlKHApIHtcXG4gIG1heC1pbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS1jb250ZW50LTMpO1xcbn1cXG46d2hlcmUoZHQsIHN1bW1hcnkpIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC03KTtcXG59XFxuOndoZXJlKGR0Om5vdCg6Zmlyc3Qtb2YtdHlwZSkpIHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc2l6ZS01KTtcXG59XFxuOndoZXJlKHNtYWxsKSB7XFxuICBmb250LXNpemU6IG1heCgwLjVlbSwgdmFyKC0tZm9udC1zaXplLTApKTtcXG4gIG1heC1pbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS1jb250ZW50LTEpO1xcbn1cXG46d2hlcmUoaHIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtMyk7XFxuICBoZWlnaHQ6IHZhcigtLWJvcmRlci1zaXplLTIpO1xcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zaXplLWZsdWlkLTUpO1xcbn1cXG46d2hlcmUoZmlndXJlKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuOndoZXJlKGZpZ3VyZSkgPiA6d2hlcmUoZmlnY2FwdGlvbikge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMSk7XFxufVxcbjp3aGVyZShibG9ja3F1b3RlLCA6bm90KGJsb2NrcXVvdGUpID4gY2l0ZSkge1xcbiAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdmFyKC0tYm9yZGVyLXNpemUtMyk7XFxufVxcbjp3aGVyZShibG9ja3F1b3RlKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcbiAgbWF4LWlubGluZS1zaXplOiB2YXIoLS1zaXplLWNvbnRlbnQtMik7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zaXplLTMpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtNCk7XFxufVxcbjp3aGVyZSg6bm90KGJsb2NrcXVvdGUpID4gY2l0ZSkge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShzdW1tYXJ5KSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLTMpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXNpemUtMikgKiAtMSkgY2FsYyh2YXIoLS1zaXplLTMpICogLTEpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKSB2YXIoLS1zaXplLTMpO1xcbn1cXG46d2hlcmUoZGV0YWlscykge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMik7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0zKTtcXG59XFxuOndoZXJlKGRldGFpbHNbb3Blbl0gPiBzdW1tYXJ5KSB7XFxuICBib3JkZXItZW5kLWVuZC1yYWRpdXM6IDA7XFxuICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogMDtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShmaWVsZHNldCkge1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBzb2xpZCB2YXIoLS1zdXJmYWNlLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbn1cXG46d2hlcmUoZGVsKSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtOSk7XFxuICBjb2xvcjogdmFyKC0tcmVkLTIpO1xcbn1cXG46d2hlcmUoaW5zKSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi05KTtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXG59XFxuOndoZXJlKGFiYnIpIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYmx1ZS01KTtcXG59XFxuOndoZXJlKGRpYWxvZykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0zKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy02KTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6d2hlcmUoZGlhbG9nKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtMik7XFxuICB9XFxufVxcbjp3aGVyZShkaWFsb2cpOjpiYWNrZHJvcCB7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XFxufVxcbjp3aGVyZShodG1sW1xcXFw6aGFzXFxcXChkaWFsb2dcXFxcW29wZW5cXFxcXVxcXFwpXSkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuOndoZXJlKGh0bWw6aGFzKGRpYWxvZ1tvcGVuXSkpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbjp3aGVyZShtZW51KSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcbjp3aGVyZShzdXApIHtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL29wZW4tcHJvcHMvY29sb3JzLWhzbC5taW4uY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gIC0tZm9udC1zYW5zOiBzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sVWJ1bnR1LENhbnRhcmVsbCxOb3RvIFNhbnMsc2Fucy1zZXJpZjtcXG4gIC0tc2l6ZS00OiAxLjI1cmVtO1xcbiAgLS1zaXplLTM6IDFyZW07XFxuICAtLXNpemUtMTU6IDMwcmVtO1xcbiAgLS1ncmF5LTY6ICM4NjhlOTY7XFxuICAtLXNpemUtMjogLjVyZW07XFxuICAtLWZvbnQtc2l6ZS0zOiAxLjI1cmVtO1xcbiAgLS1zaXplLTc6IDJyZW07XFxuICAtLXNpemUtNjogMS43NXJlbTtcXG4gIC0tcmFkaXVzLTI6IDVweDtcXG4gIC0tZm9udC1zaXplLTQ6IDEuNXJlbTtcXG4gIC0tZ3JheS05LWhzbDogMjEwIDExJSAxNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTEpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtMSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaXplLTE1KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS02KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMik7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc2l6ZS03KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTYpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0yKTtcXG59XFxuXFxuLmNpdHkgPiBwIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTQpO1xcbn1cXG5cXG4ub3RoZXItZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiB2YXIoLS1zaXplLTIpO1xcbiAgcmlnaHQ6IHZhcigtLXNpemUtMik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTYpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKHZhcigtLWdyYXktOS1oc2wpIC8gMCUpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKHZhcigtLWdyYXktOS1oc2wpIC8gMjAlKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiPG5vIHNvdXJjZT5cIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFBQSwyRkFBQTtFQUFBLGtCQUFBO0VBQUEsZUFBQTtFQUFBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxnQkFBQTtFQUFBLHVCQUFBO0VBQUEsZUFBQTtFQUFBLGtCQUFBO0VBQUEsZ0JBQUE7RUFBQSxzQkFBQTtFQUFBO0NBQUE7O0FDRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRFwiLFwic291cmNlc0NvbnRlbnRcIjpbbnVsbCxcIkBpbXBvcnQgXFxcIm9wZW4tcHJvcHMvY29sb3JzLWhzbFxcXCI7XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtMSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC0xKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNCk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICBtYXgtd2lkdGg6IHZhcigtLXNpemUtMTUpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTYpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTMpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTcpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS02KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktNik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTIpO1xcbn1cXG5cXG4uY2l0eSA+IHAge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtNCk7XFxufVxcblxcbi5vdGhlci1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IHZhcigtLXNpemUtMik7XFxuICByaWdodDogdmFyKC0tc2l6ZS0yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktNik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2wodmFyKC0tZ3JheS05LWhzbCkgLyAwJSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2wodmFyKC0tZ3JheS05LWhzbCkgLyAyMCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9ub3JtYWxpemUuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3dlYXRoZXInO1xuaW1wb3J0ICcuL2RvbSc7XG4iXSwibmFtZXMiOlsid2VhdGhlckluIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwiY2l0eSIsImRlc2NyaXB0aW9uIiwidGVtcCIsImZlZWxzTGlrZSIsImh1bWlkaXR5IiwicHJlc3N1cmUiLCJidXR0b24iLCJ3ZWF0aGVyIiwiY2hhbmdlVW5pdHMiLCJ1bml0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJwb3B1bGF0ZVVJIiwiZGF0YSIsImlubmVyVGV4dCIsImNvdW50cnkiLCJ0ZW1wQ2Vsc2l1cyIsInRlbXBGYWhyZW5oZWl0IiwidGVtcENlbHNpdXNGZWVsc0xpa2UiLCJ0ZW1wRmFocmVuaGVpdEZlZWxzTGlrZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsInZhbHVlIiwidG9TdHJpbmciLCJ0aGVuIiwiYXBpS2V5IiwiY2Vsc2l1c0Zyb21LZWx2aW4iLCJrZWx2aW5WYWx1ZSIsIk51bWJlciIsImlzTmFOIiwiRXJyb3IiLCJjZWxzaXVzIiwidG9GaXhlZCIsImZhaHJlbmhlaXRGcm9tS2VsdmluIiwiZmFocmVuaGVpdCIsImdldFdlYXRoZXJEYXRhIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3NXZWF0aGVyRGF0YSIsInRlbXBLZWx2aW4iLCJtYWluIiwidGVtcEtlbHZpbkZlZWxzTGlrZSIsImZlZWxzX2xpa2UiLCJuYW1lIiwic3lzIiwid2VhdGhlckRhdGEiLCJwcm9jZXNzZWQiXSwic291cmNlUm9vdCI6IiJ9