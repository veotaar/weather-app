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
form.addEventListener('submit', e => {
  e.preventDefault();
  const city = input.value;
  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.weatherIn)(city).then(data => console.table(data));
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-sans: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;\n  --size-4: 1.25rem;\n  --size-15: 30rem;\n  --gray-6: #868e96;\n}\n\nbody {\n  font-family: var(--font-sans);\n  background-color: var(--surface-1);\n  color: var(--text-1);\n  padding: var(--size-4);\n}\n\n.container {\n  max-width: var(--size-15);\n  margin-inline: auto;\n  color: inherit;\n}\n\ninput {\n  outline: 2px solid var(--gray-6);\n}\n", "",{"version":3,"sources":["<no source>","webpack://./src/style.css"],"names":[],"mappings":"AAAA;EAAA,2FAAA;EAAA,kBAAA;EAAA,iBAAA;EAAA;CAAA;;ACAA;EACE,6BAA6B;EAC7B,kCAAkC;EAClC,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":[null,"body {\n  font-family: var(--font-sans);\n  background-color: var(--surface-1);\n  color: var(--text-1);\n  padding: var(--size-4);\n}\n\n.container {\n  max-width: var(--size-15);\n  margin-inline: auto;\n  color: inherit;\n}\n\ninput {\n  outline: 2px solid var(--gray-6);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUss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R0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL25vcm1hbGl6ZS5jc3M/ZWI1MiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlYXRoZXJJbiB9IGZyb20gJy4vd2VhdGhlcic7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtXScpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbnB1dF0nKTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGNpdHkgPSBpbnB1dC52YWx1ZTtcbiAgd2VhdGhlckluKGNpdHkpLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUudGFibGUoZGF0YSkpO1xufSk7XG4iLCJjb25zdCBhcGlLZXkgPSAnZmM4ZmU0MDJlYzRhM2Y0ZTI1NWU1ZWNkYTdiMzU2ZjgnO1xuXG5jb25zdCBjZWxzaXVzRnJvbUtlbHZpbiA9IGZ1bmN0aW9uIChrZWx2aW5WYWx1ZSkge1xuICBpZiAoTnVtYmVyLmlzTmFOKGtlbHZpblZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKCdrZWx2aW5WYWx1ZSBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gIGNvbnN0IGNlbHNpdXMgPSBrZWx2aW5WYWx1ZSAtIDI3My4xNTtcbiAgcmV0dXJuIGNlbHNpdXMudG9GaXhlZCgxKTtcbn07XG5cbmNvbnN0IGZhaHJlbmhlaXRGcm9tS2VsdmluID0gZnVuY3Rpb24gKGtlbHZpblZhbHVlKSB7XG4gIGlmIChOdW1iZXIuaXNOYU4oa2VsdmluVmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoJ2tlbHZpblZhbHVlIG11c3QgYmUgYSBudW1iZXInKTtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGtlbHZpblZhbHVlICogKDkgLyA1KSAtIDQ1OS42NztcbiAgcmV0dXJuIGZhaHJlbmhlaXQudG9GaXhlZCgxKTtcbn07XG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHthcGlLZXl9YDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59O1xuXG5jb25zdCBwcm9jZXNzV2VhdGhlckRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCB0ZW1wS2VsdmluID0gZGF0YS5tYWluLnRlbXA7XG4gIGNvbnN0IHRlbXBLZWx2aW5GZWVsc0xpa2UgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gZGF0YS53ZWF0aGVyWzBdO1xuICBjb25zdCB7IHByZXNzdXJlLCBodW1pZGl0eSB9ID0gZGF0YS5tYWluO1xuICBjb25zdCBjaXR5ID0gZGF0YS5uYW1lO1xuICBjb25zdCB7IGNvdW50cnkgfSA9IGRhdGEuc3lzO1xuICBjb25zdCB0ZW1wQ2Vsc2l1cyA9IGNlbHNpdXNGcm9tS2VsdmluKHRlbXBLZWx2aW4pO1xuICBjb25zdCB0ZW1wQ2Vsc2l1c0ZlZWxzTGlrZSA9IGNlbHNpdXNGcm9tS2VsdmluKHRlbXBLZWx2aW5GZWVsc0xpa2UpO1xuICBjb25zdCB0ZW1wRmFocmVuaGVpdCA9IGZhaHJlbmhlaXRGcm9tS2VsdmluKHRlbXBLZWx2aW4pO1xuICBjb25zdCB0ZW1wRmFocmVuaGVpdEZlZWxzTGlrZSA9IGZhaHJlbmhlaXRGcm9tS2VsdmluKHRlbXBLZWx2aW5GZWVsc0xpa2UpO1xuXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0ge1xuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByZXNzdXJlLFxuICAgIGh1bWlkaXR5LFxuICAgIGNpdHksXG4gICAgY291bnRyeSxcbiAgICB0ZW1wQ2Vsc2l1cyxcbiAgICB0ZW1wQ2Vsc2l1c0ZlZWxzTGlrZSxcbiAgICB0ZW1wRmFocmVuaGVpdCxcbiAgICB0ZW1wRmFocmVuaGVpdEZlZWxzTGlrZSxcbiAgfTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJJbihsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xuICAgIGNvbnN0IHByb2Nlc3NlZCA9IHByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0taW5kaWdvLTc6ICM0MjYzZWI7XFxuICAtLWdyYXBlLTc6ICNhZTNlYzk7XFxuICAtLWdyYXktOTogIzIxMjUyOTtcXG4gIC0tZ3JheS03OiAjNDk1MDU3O1xcbiAgLS1ncmF5LTA6ICNmOGY5ZmE7XFxuICAtLWdyYXktMjogI2U5ZWNlZjtcXG4gIC0tZ3JheS0zOiAjZGVlMmU2O1xcbiAgLS1ncmF5LTQ6ICNjZWQ0ZGE7XFxuICAtLWdyYXktNjogIzg2OGU5NjtcXG4gIC0tZm9udC1zYW5zOiBzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sVWJ1bnR1LENhbnRhcmVsbCxOb3RvIFNhbnMsc2Fucy1zZXJpZjtcXG4gIC0tZm9udC1saW5laGVpZ2h0LTM6IDEuNTtcXG4gIC0taW5kaWdvLTM6ICM5MWE3ZmY7XFxuICAtLWdyYXBlLTM6ICNlNTk5Zjc7XFxuICAtLWdyYXktMTogI2YxZjNmNTtcXG4gIC0tZ3JheS04OiAjMzQzYTQwO1xcbiAgLS1lYXNlLTI6IGN1YmljLWJlemllciguMjUsIDAsIC40LCAxKTtcXG4gIC0tZm9udC13ZWlnaHQtOTogOTAwO1xcbiAgLS1mb250LWxpbmVoZWlnaHQtMTogMS4yNTtcXG4gIC0tZm9udC1zaXplLTg6IDMuNXJlbTtcXG4gIC0tc2l6ZS1oZWFkZXItMTogMjBjaDtcXG4gIC0tZm9udC1zaXplLTY6IDIuNXJlbTtcXG4gIC0tc2l6ZS1oZWFkZXItMjogMjVjaDtcXG4gIC0tZm9udC1zaXplLTU6IDJyZW07XFxuICAtLWZvbnQtc2l6ZS00OiAxLjVyZW07XFxuICAtLWZvbnQtc2l6ZS0zOiAxLjI1cmVtO1xcbiAgLS1zaXplLWhlYWRlci0zOiAzNWNoO1xcbiAgLS1mb250LXNpemUtMjogMS4xcmVtO1xcbiAgLS1zaXplLTE6IC4yNXJlbTtcXG4gIC0taW5kaWdvLTI6ICNiYWM4ZmY7XFxuICAtLWdyYXBlLTI6ICNlZWJlZmE7XFxuICAtLXNpemUtMjogLjVyZW07XFxuICAtLXJhZGl1cy0yOiA1cHg7XFxuICAtLXNpemUtMzogMXJlbTtcXG4gIC0tc2l6ZS0xMDogNXJlbTtcXG4gIC0tZm9udC1tb25vOiBEYW5rIE1vbm8sT3BlcmF0b3IgTW9ubyxJbmNvbnNvbGF0YSxGaXJhIE1vbm8sdWktbW9ub3NwYWNlLFNGIE1vbm8sTW9uYWNvLERyb2lkIFNhbnMgTW9ubyxTb3VyY2UgQ29kZSBQcm8sbW9ub3NwYWNlO1xcbiAgLS1ib3JkZXItc2l6ZS0xOiAxcHg7XFxuICAtLXNpemUtODogM3JlbTtcXG4gIC0tc2l6ZS1jb250ZW50LTI6IDQ1Y2g7XFxuICAtLXNpemUtY29udGVudC0zOiA2MGNoO1xcbiAgLS1mb250LXdlaWdodC03OiA3MDA7XFxuICAtLXNpemUtNTogMS41cmVtO1xcbiAgLS1mb250LXNpemUtMDogLjc1cmVtO1xcbiAgLS1zaXplLWNvbnRlbnQtMTogMjBjaDtcXG4gIC0tYm9yZGVyLXNpemUtMjogMnB4O1xcbiAgLS1zaXplLWZsdWlkLTU6IGNsYW1wKDRyZW0sIDV2dywgNXJlbSk7XFxuICAtLWZvbnQtc2l6ZS0xOiAxcmVtO1xcbiAgLS1ib3JkZXItc2l6ZS0zOiA1cHg7XFxuICAtLXNpemUtNDogMS4yNXJlbTtcXG4gIC0tcmVkLTk6ICNjOTJhMmE7XFxuICAtLXJlZC0yOiAjZmZjOWM5O1xcbiAgLS1ncmVlbi05OiAjMmI4YTNlO1xcbiAgLS1ncmVlbi0xOiAjZDNmOWQ4O1xcbiAgLS1ibHVlLTU6ICMzMzlhZjA7XFxuICAtLXJhZGl1cy0zOiAxcmVtO1xcbiAgLS1zaGFkb3ctNjogXFxuICAgIDAgLTFweCAycHggMCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIGNhbGModmFyKC0tc2hhZG93LXN0cmVuZ3RoKSArIDIlKSksXFxuICAgIDAgM3B4IDJweCAtMnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gY2FsYyh2YXIoLS1zaGFkb3ctc3RyZW5ndGgpICsgMyUpKSxcXG4gICAgMCA3cHggNXB4IC0ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyBjYWxjKHZhcigtLXNoYWRvdy1zdHJlbmd0aCkgKyAzJSkpLFxcbiAgICAwIDEycHggMTBweCAtMnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gY2FsYyh2YXIoLS1zaGFkb3ctc3RyZW5ndGgpICsgNCUpKSxcXG4gICAgMCAyMnB4IDE4cHggLTJweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIGNhbGModmFyKC0tc2hhZG93LXN0cmVuZ3RoKSArIDUlKSksXFxuICAgIDAgNDFweCAzM3B4IC0ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyBjYWxjKHZhcigtLXNoYWRvdy1zdHJlbmd0aCkgKyA2JSkpLFxcbiAgICAwIDEwMHB4IDgwcHggLTJweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIGNhbGModmFyKC0tc2hhZG93LXN0cmVuZ3RoKSArIDclKSk7XFxuICAtLXNoYWRvdy1jb2xvcjogMjIwIDMlIDE1JTtcXG4gIC0tc2hhZG93LXN0cmVuZ3RoOiAxJTtcXG59XFxuOndoZXJlKGh0bWwpIHtcXG4gIC0tbGluazogdmFyKC0taW5kaWdvLTcpO1xcbiAgLS1saW5rLXZpc2l0ZWQ6IHZhcigtLWdyYXBlLTcpO1xcbiAgLS10ZXh0LTE6IHZhcigtLWdyYXktOSk7XFxuICAtLXRleHQtMjogdmFyKC0tZ3JheS03KTtcXG4gIC0tc3VyZmFjZS0xOiB2YXIoLS1ncmF5LTApO1xcbiAgLS1zdXJmYWNlLTI6IHZhcigtLWdyYXktMik7XFxuICAtLXN1cmZhY2UtMzogdmFyKC0tZ3JheS0zKTtcXG4gIC0tc3VyZmFjZS00OiB2YXIoLS1ncmF5LTQpO1xcbiAgLS1zY3JvbGx0aHVtYi1jb2xvcjogdmFyKC0tZ3JheS02KTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tbGluayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTEpO1xcbiAgYmxvY2stc2l6ZTogMTAwJTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1saW5rKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTIpO1xcbiAgY29sb3Itc2NoZW1lOiBsaWdodDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZWhlaWdodC0zKTtcXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Nyb2xsdGh1bWItY29sb3IpIHRyYW5zcGFyZW50O1xcbn1cXG5AbWVkaWEgKGR5bmFtaWMtcmFuZ2U6IGhpZ2gpIHtcXG4gIEBzdXBwb3J0cyAoY29sb3IoZGlzcGxheS1wMyAwIDAuNSAxKSkge1xcbiAgICA6d2hlcmUoaHRtbCkge1xcbiAgICAgIC0tbGluazogY29sb3IoZGlzcGxheS1wMyAwIDAuNSAxKTtcXG4gICAgICAtLWxpbmstdmlzaXRlZDogY29sb3IoZGlzcGxheS1wMyAwLjYgMC4yIDEpO1xcbiAgICB9XFxuICB9XFxufVxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIDp3aGVyZShodG1sKSB7XFxuICAgIC0tbGluazogdmFyKC0taW5kaWdvLTMpO1xcbiAgICAtLWxpbmstdmlzaXRlZDogdmFyKC0tZ3JhcGUtMyk7XFxuICAgIC0tdGV4dC0xOiB2YXIoLS1ncmF5LTEpO1xcbiAgICAtLXRleHQtMjogdmFyKC0tZ3JheS00KTtcXG4gICAgLS1zdXJmYWNlLTE6IHZhcigtLWdyYXktOSk7XFxuICAgIC0tc3VyZmFjZS0yOiB2YXIoLS1ncmF5LTgpO1xcbiAgICAtLXN1cmZhY2UtMzogdmFyKC0tZ3JheS03KTtcXG4gICAgLS1zdXJmYWNlLTQ6IHZhcigtLWdyYXktNik7XFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXG4gIH1cXG59XFxuOndoZXJlKGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGR0KSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC0xKTtcXG59XFxuOndoZXJlKGFbaHJlZl0pIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rKTtcXG59XFxuOndoZXJlKGFbaHJlZl0pOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLWxpbmstdmlzaXRlZCk7XFxufVxcbjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmUtY29sb3I6IHZhcigtLWxpbmspO1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xcbiAgOndoZXJlKGh0bWwpIHtcXG4gICAgLS1zY3JvbGx0aHVtYi1jb2xvcjogdmFyKC0tZ3JheS03KTtcXG4gIH1cXG59XFxuKixcXG46YWZ0ZXIsXFxuOmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46d2hlcmUoOm5vdChkaWFsb2cpKSB7XFxuICBtYXJnaW46IDA7XFxufVxcbjp3aGVyZSg6bm90KGZpZWxkc2V0LCBwcm9ncmVzcywgbWV0ZXIpKSB7XFxuICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXG4gIDp3aGVyZShodG1sKSB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgfVxcbn1cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXG4gIDp3aGVyZSg6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICB0cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAxNDVtcyB2YXIoLS1lYXNlLTIpO1xcbiAgfVxcbiAgOndoZXJlKDpub3QoOmFjdGl2ZSk6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG4gIH1cXG59XFxuOndoZXJlKDpub3QoOmFjdGl2ZSk6Zm9jdXMtdmlzaWJsZSkge1xcbiAgb3V0bGluZS1vZmZzZXQ6IDVweDtcXG59XFxuOndoZXJlKGJvZHkpIHtcXG4gIG1pbi1ibG9jay1zaXplOiAxMDAlO1xcbn1cXG46d2hlcmUoaDEsIGgyLCBoMywgaDQsIGg1LCBoNikge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LTkpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZWhlaWdodC0xKTtcXG59XFxuOndoZXJlKGgxKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS04KTtcXG4gIG1heC1pbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS1oZWFkZXItMSk7XFxufVxcbjp3aGVyZShoMikge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtNik7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtaGVhZGVyLTIpO1xcbn1cXG46d2hlcmUoaDMpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTUpO1xcbn1cXG46d2hlcmUoaDQpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTQpO1xcbn1cXG46d2hlcmUoaDUpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTMpO1xcbn1cXG46d2hlcmUoaDMsIGg0LCBoNSwgaDYsIGR0KSB7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtaGVhZGVyLTMpO1xcbn1cXG46d2hlcmUocCwgdWwsIG9sLCBkbCwgaDYpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTIpO1xcbn1cXG46d2hlcmUoYSwgdSwgaW5zLCBhYmJyKSB7XFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDFweDtcXG59XFxuQHN1cHBvcnRzICgtbW96LWFwcGVhcmFuY2U6IG5vbmUpIHtcXG4gIDp3aGVyZShhLCB1LCBpbnMsIGFiYnIpIHtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAycHg7XFxuICB9XFxufVxcbjp3aGVyZShhW2hyZWZdLCBhcmVhLCBidXR0b24sIGlucHV0LCBsYWJlbFtmb3JdLCBzZWxlY3QsIHN1bW1hcnksIHRleHRhcmVhLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXgqPVxcXCItXFxcIl0pKSB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcbjp3aGVyZShhKSB7XFxuICBtYXJnaW4tYmxvY2s6IGNhbGModmFyKC0tc2l6ZS0xKSAqIC0xKTtcXG4gIG1hcmdpbi1pbmxpbmU6IGNhbGModmFyKC0tc2l6ZS0xKSAqIC0xKTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMSk7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0xKTtcXG59XFxuOndoZXJlKGEpOndoZXJlKFtocmVmXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWluZGlnby0yKTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1pbmRpZ28tMik7XFxufVxcbjp3aGVyZShhKTp3aGVyZShbaHJlZl0pOndoZXJlKDp2aXNpdGVkKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tZ3JhcGUtMik7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tZ3JhcGUtMik7XFxufVxcbjp3aGVyZShhKTp3aGVyZSg6bm90KDpob3ZlcikpIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuOndoZXJlKGltZywgc3ZnLCB2aWRlbywgY2FudmFzLCBhdWRpbywgaWZyYW1lLCBlbWJlZCwgb2JqZWN0KSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuOndoZXJlKGltZywgc3ZnLCB2aWRlbykge1xcbiAgYmxvY2stc2l6ZTogYXV0bztcXG4gIG1heC1pbmxpbmUtc2l6ZTogMTAwJTtcXG59XFxuOndoZXJlKGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3QpLFxcbjp3aGVyZShpbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl0pOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcXG59XFxuOndoZXJlKGlucHV0LCB0ZXh0YXJlYSkge1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0xKTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTIpO1xcbn1cXG46d2hlcmUoc2VsZWN0KSB7XFxuICBwYWRkaW5nLWJsb2NrOiAwLjc1Y2g7XFxuICBwYWRkaW5nLWlubGluZTogMS4yNWNoIDA7XFxufVxcbjp3aGVyZSh0ZXh0YXJlYSwgc2VsZWN0LCBpbnB1dDpub3QoYnV0dG9uLCBidXR0b25bdHlwZV0sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSkpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtMik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxufVxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIDp3aGVyZSh0ZXh0YXJlYSwgc2VsZWN0LCBpbnB1dDpub3QoYnV0dG9uLCBidXR0b25bdHlwZV0sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSkpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MWExYztcXG4gIH1cXG59XFxuOndoZXJlKHRleHRhcmVhKSB7XFxuICByZXNpemU6IGJsb2NrO1xcbn1cXG46d2hlcmUoaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSkge1xcbiAgYmxvY2stc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG4gIGlubGluZS1zaXplOiB2YXIoLS1zaXplLTMpO1xcbn1cXG46d2hlcmUoc3ZnKSB7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcbjp3aGVyZShzdmcpOndoZXJlKDpub3QoW2ZpbGxdKSkge1xcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXG59XFxuOndoZXJlKHN2Zyk6d2hlcmUoOm5vdChbd2lkdGhdKSkge1xcbiAgaW5saW5lLXNpemU6IHZhcigtLXNpemUtMTApO1xcbn1cXG46d2hlcmUoY29kZSwga2JkLCBzYW1wLCBwcmUpIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xcbn1cXG46d2hlcmUoOm5vdChwcmUpID4gY29kZSwga2JkKSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG46d2hlcmUocHJlKSB7XFxuICBtYXgtaW5saW5lLXNpemU6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XFxuICBtYXgtaW5saW5lLXNpemU6IC1tb3otbWF4LWNvbnRlbnQ7XFxuICBtYXgtaW5saW5lLXNpemU6IG1heC1jb250ZW50O1xcbiAgbWluLWlubGluZS1zaXplOiAwO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuOndoZXJlKDpub3QocHJlKSA+IGNvZGUpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtMik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpIHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShrYmQsIHZhcikge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgYm9yZGVyLXdpZHRoOiB2YXIoLS1ib3JkZXItc2l6ZS0xKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMSkgdmFyKC0tc2l6ZS0yKTtcXG59XFxuOndoZXJlKG1hcmspIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTEpO1xcbn1cXG46d2hlcmUob2wsIHVsKSB7XFxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLXNpemUtOCk7XFxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zaXplLTgpO1xcbn1cXG46d2hlcmUobGkpIHtcXG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0tc2l6ZS0yKTtcXG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShsaSwgZGQsIGZpZ2NhcHRpb24pIHtcXG4gIG1heC1pbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS1jb250ZW50LTIpO1xcbn1cXG46d2hlcmUocCkge1xcbiAgbWF4LWlubGluZS1zaXplOiB2YXIoLS1zaXplLWNvbnRlbnQtMyk7XFxufVxcbjp3aGVyZShkdCwgc3VtbWFyeSkge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LTcpO1xcbn1cXG46d2hlcmUoZHQ6bm90KDpmaXJzdC1vZi10eXBlKSkge1xcbiAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiB2YXIoLS1zaXplLTUpO1xcbiAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IHZhcigtLXNpemUtNSk7XFxufVxcbjp3aGVyZShzbWFsbCkge1xcbiAgZm9udC1zaXplOiBtYXgoMC41ZW0sIHZhcigtLWZvbnQtc2l6ZS0wKSk7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtY29udGVudC0xKTtcXG59XFxuOndoZXJlKGhyKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTMpO1xcbiAgaGVpZ2h0OiB2YXIoLS1ib3JkZXItc2l6ZS0yKTtcXG4gIG1hcmdpbi1ibG9jazogdmFyKC0tc2l6ZS1mbHVpZC01KTtcXG59XFxuOndoZXJlKGZpZ3VyZSkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbjp3aGVyZShmaWd1cmUpID4gOndoZXJlKGZpZ2NhcHRpb24pIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTEpO1xcbn1cXG46d2hlcmUoYmxvY2txdW90ZSwgOm5vdChibG9ja3F1b3RlKSA+IGNpdGUpIHtcXG4gIGJvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6IHZhcigtLWJvcmRlci1zaXplLTMpO1xcbn1cXG46d2hlcmUoYmxvY2txdW90ZSkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogdmFyKC0tc2l6ZS0zKTtcXG4gIG1heC1pbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS1jb250ZW50LTIpO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0zKTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTQpO1xcbn1cXG46d2hlcmUoOm5vdChibG9ja3F1b3RlKSA+IGNpdGUpIHtcXG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0tc2l6ZS0yKTtcXG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShzdW1tYXJ5KSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLTMpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXNpemUtMikgKiAtMSkgY2FsYyh2YXIoLS1zaXplLTMpICogLTEpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKSB2YXIoLS1zaXplLTMpO1xcbn1cXG46d2hlcmUoZGV0YWlscykge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMik7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0zKTtcXG59XFxuOndoZXJlKGRldGFpbHNbb3Blbl0gPiBzdW1tYXJ5KSB7XFxuICBib3JkZXItZW5kLWVuZC1yYWRpdXM6IDA7XFxuICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogMDtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShmaWVsZHNldCkge1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBzb2xpZCB2YXIoLS1zdXJmYWNlLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbn1cXG46d2hlcmUoZGVsKSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtOSk7XFxuICBjb2xvcjogdmFyKC0tcmVkLTIpO1xcbn1cXG46d2hlcmUoaW5zKSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi05KTtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXG59XFxuOndoZXJlKGFiYnIpIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1ibHVlLTUpO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWJsdWUtNSk7XFxufVxcbjp3aGVyZShkaWFsb2cpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctNik7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOndoZXJlKGRpYWxvZykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTIpO1xcbiAgfVxcbn1cXG46d2hlcmUoZGlhbG9nKTo6LXdlYmtpdC1iYWNrZHJvcCB7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpO1xcbn1cXG46d2hlcmUoZGlhbG9nKTo6YmFja2Ryb3Age1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcXG59XFxuOndoZXJlKGh0bWxbXFxcXDpoYXNcXFxcKGRpYWxvZ1xcXFxbb3BlblxcXFxdXFxcXCldKSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG46d2hlcmUoaHRtbDpoYXMoZGlhbG9nW29wZW5dKSkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuOndoZXJlKG1lbnUpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDA7XFxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG46d2hlcmUoc3VwKSB7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6cm9vdCB7XFxuICAgIC0tc2hhZG93LWNvbG9yOiAyMjAgNDAlIDIlO1xcbiAgICAtLXNoYWRvdy1zdHJlbmd0aDogMjUlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCI8bm8gc291cmNlPlwiLFwid2VicGFjazovLy4vc3JjL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUEsa0JBQUE7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsa0JBQUE7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsa0JBQUE7RUFBQSwyRkFBQTtFQUFBLHlCQUFBO0VBQUEsb0JBQUE7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsa0JBQUE7RUFBQSxzQ0FBQTtFQUFBLHFCQUFBO0VBQUEsMEJBQUE7RUFBQSxzQkFBQTtFQUFBLHNCQUFBO0VBQUEsc0JBQUE7RUFBQSxzQkFBQTtFQUFBLG9CQUFBO0VBQUEsc0JBQUE7RUFBQSx1QkFBQTtFQUFBLHNCQUFBO0VBQUEsc0JBQUE7RUFBQSxpQkFBQTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBLGdCQUFBO0VBQUEsZUFBQTtFQUFBLGdCQUFBO0VBQUEsaUlBQUE7RUFBQSxxQkFBQTtFQUFBLGVBQUE7RUFBQSx1QkFBQTtFQUFBLHVCQUFBO0VBQUEscUJBQUE7RUFBQSxpQkFBQTtFQUFBLHNCQUFBO0VBQUEsdUJBQUE7RUFBQSxxQkFBQTtFQUFBLHVDQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxpQkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUE7Ozs7Ozs7bUZBQUE7RUFBQSwyQkFBQTtFQUFBO0NBQUE7QUNBQTtFQUNFLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xD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Q0E7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCO0FBRkE7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUQzVUE7RUFBQTtJQUFBLDJCQUFBO0lBQUE7R0FBQTtDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltudWxsLFwiOndoZXJlKGh0bWwpIHtcXG4gIC0tbGluazogdmFyKC0taW5kaWdvLTcpO1xcbiAgLS1saW5rLXZpc2l0ZWQ6IHZhcigtLWdyYXBlLTcpO1xcbiAgLS10ZXh0LTE6IHZhcigtLWdyYXktOSk7XFxuICAtLXRleHQtMjogdmFyKC0tZ3JheS03KTtcXG4gIC0tc3VyZmFjZS0xOiB2YXIoLS1ncmF5LTApO1xcbiAgLS1zdXJmYWNlLTI6IHZhcigtLWdyYXktMik7XFxuICAtLXN1cmZhY2UtMzogdmFyKC0tZ3JheS0zKTtcXG4gIC0tc3VyZmFjZS00OiB2YXIoLS1ncmF5LTQpO1xcbiAgLS1zY3JvbGx0aHVtYi1jb2xvcjogdmFyKC0tZ3JheS02KTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tbGluayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTEpO1xcbiAgYmxvY2stc2l6ZTogMTAwJTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1saW5rKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTIpO1xcbiAgY29sb3Itc2NoZW1lOiBsaWdodDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZWhlaWdodC0zKTtcXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Nyb2xsdGh1bWItY29sb3IpIHRyYW5zcGFyZW50O1xcbn1cXG5AbWVkaWEgKGR5bmFtaWMtcmFuZ2U6IGhpZ2gpIHtcXG4gIEBzdXBwb3J0cyAoY29sb3IoZGlzcGxheS1wMyAwIDAuNSAxKSkge1xcbiAgICA6d2hlcmUoaHRtbCkge1xcbiAgICAgIC0tbGluazogY29sb3IoZGlzcGxheS1wMyAwIDAuNSAxKTtcXG4gICAgICAtLWxpbmstdmlzaXRlZDogY29sb3IoZGlzcGxheS1wMyAwLjYgMC4yIDEpO1xcbiAgICB9XFxuICB9XFxufVxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIDp3aGVyZShodG1sKSB7XFxuICAgIC0tbGluazogdmFyKC0taW5kaWdvLTMpO1xcbiAgICAtLWxpbmstdmlzaXRlZDogdmFyKC0tZ3JhcGUtMyk7XFxuICAgIC0tdGV4dC0xOiB2YXIoLS1ncmF5LTEpO1xcbiAgICAtLXRleHQtMjogdmFyKC0tZ3JheS00KTtcXG4gICAgLS1zdXJmYWNlLTE6IHZhcigtLWdyYXktOSk7XFxuICAgIC0tc3VyZmFjZS0yOiB2YXIoLS1ncmF5LTgpO1xcbiAgICAtLXN1cmZhY2UtMzogdmFyKC0tZ3JheS03KTtcXG4gICAgLS1zdXJmYWNlLTQ6IHZhcigtLWdyYXktNik7XFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXG4gIH1cXG59XFxuOndoZXJlKGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGR0KSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC0xKTtcXG59XFxuOndoZXJlKGFbaHJlZl0pIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rKTtcXG59XFxuOndoZXJlKGFbaHJlZl0pOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLWxpbmstdmlzaXRlZCk7XFxufVxcbjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmUtY29sb3I6IHZhcigtLWxpbmspO1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xcbiAgOndoZXJlKGh0bWwpIHtcXG4gICAgLS1zY3JvbGx0aHVtYi1jb2xvcjogdmFyKC0tZ3JheS03KTtcXG4gIH1cXG59XFxuKixcXG46YWZ0ZXIsXFxuOmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46d2hlcmUoOm5vdChkaWFsb2cpKSB7XFxuICBtYXJnaW46IDA7XFxufVxcbjp3aGVyZSg6bm90KGZpZWxkc2V0LCBwcm9ncmVzcywgbWV0ZXIpKSB7XFxuICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXG4gIDp3aGVyZShodG1sKSB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgfVxcbn1cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXG4gIDp3aGVyZSg6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICB0cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAxNDVtcyB2YXIoLS1lYXNlLTIpO1xcbiAgfVxcbiAgOndoZXJlKDpub3QoOmFjdGl2ZSk6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG4gIH1cXG59XFxuOndoZXJlKDpub3QoOmFjdGl2ZSk6Zm9jdXMtdmlzaWJsZSkge1xcbiAgb3V0bGluZS1vZmZzZXQ6IDVweDtcXG59XFxuOndoZXJlKGJvZHkpIHtcXG4gIG1pbi1ibG9jay1zaXplOiAxMDAlO1xcbn1cXG46d2hlcmUoaDEsIGgyLCBoMywgaDQsIGg1LCBoNikge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LTkpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZWhlaWdodC0xKTtcXG59XFxuOndoZXJlKGgxKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS04KTtcXG4gIG1heC1pbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS1oZWFkZXItMSk7XFxufVxcbjp3aGVyZShoMikge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtNik7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtaGVhZGVyLTIpO1xcbn1cXG46d2hlcmUoaDMpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTUpO1xcbn1cXG46d2hlcmUoaDQpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTQpO1xcbn1cXG46d2hlcmUoaDUpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTMpO1xcbn1cXG46d2hlcmUoaDMsIGg0LCBoNSwgaDYsIGR0KSB7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtaGVhZGVyLTMpO1xcbn1cXG46d2hlcmUocCwgdWwsIG9sLCBkbCwgaDYpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTIpO1xcbn1cXG46d2hlcmUoYSwgdSwgaW5zLCBhYmJyKSB7XFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDFweDtcXG59XFxuQHN1cHBvcnRzICgtbW96LWFwcGVhcmFuY2U6IG5vbmUpIHtcXG4gIDp3aGVyZShhLCB1LCBpbnMsIGFiYnIpIHtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAycHg7XFxuICB9XFxufVxcbjp3aGVyZShhW2hyZWZdLCBhcmVhLCBidXR0b24sIGlucHV0LCBsYWJlbFtmb3JdLCBzZWxlY3QsIHN1bW1hcnksIHRleHRhcmVhLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXgqPVxcXCItXFxcIl0pKSB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcbjp3aGVyZShhKSB7XFxuICBtYXJnaW4tYmxvY2s6IGNhbGModmFyKC0tc2l6ZS0xKSAqIC0xKTtcXG4gIG1hcmdpbi1pbmxpbmU6IGNhbGModmFyKC0tc2l6ZS0xKSAqIC0xKTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMSk7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0xKTtcXG59XFxuOndoZXJlKGEpOndoZXJlKFtocmVmXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1pbmRpZ28tMik7XFxufVxcbjp3aGVyZShhKTp3aGVyZShbaHJlZl0pOndoZXJlKDp2aXNpdGVkKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWdyYXBlLTIpO1xcbn1cXG46d2hlcmUoYSk6d2hlcmUoOm5vdCg6aG92ZXIpKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcbjp3aGVyZShpbWcsIHN2ZywgdmlkZW8sIGNhbnZhcywgYXVkaW8sIGlmcmFtZSwgZW1iZWQsIG9iamVjdCkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbjp3aGVyZShpbWcsIHN2ZywgdmlkZW8pIHtcXG4gIGJsb2NrLXNpemU6IGF1dG87XFxuICBtYXgtaW5saW5lLXNpemU6IDEwMCU7XFxufVxcbjp3aGVyZShpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0KSxcXG46d2hlcmUoaW5wdXRbdHlwZT1cXFwiZmlsZVxcXCJdKTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XFxufVxcbjp3aGVyZShpbnB1dCwgdGV4dGFyZWEpIHtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMSk7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0yKTtcXG59XFxuOndoZXJlKHNlbGVjdCkge1xcbiAgcGFkZGluZy1ibG9jazogMC43NWNoO1xcbiAgcGFkZGluZy1pbmxpbmU6IDEuMjVjaCAwO1xcbn1cXG46d2hlcmUodGV4dGFyZWEsIHNlbGVjdCwgaW5wdXQ6bm90KGJ1dHRvbiwgYnV0dG9uW3R5cGVdLCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sIGlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0pKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6d2hlcmUodGV4dGFyZWEsIHNlbGVjdCwgaW5wdXQ6bm90KGJ1dHRvbiwgYnV0dG9uW3R5cGVdLCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sIGlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0pKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzFhMWM7XFxuICB9XFxufVxcbjp3aGVyZSh0ZXh0YXJlYSkge1xcbiAgcmVzaXplOiBibG9jaztcXG59XFxuOndoZXJlKGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0pIHtcXG4gIGJsb2NrLXNpemU6IHZhcigtLXNpemUtMyk7XFxuICBpbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG59XFxuOndoZXJlKHN2Zykge1xcbiAgc3Ryb2tlOiBub25lO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG46d2hlcmUoc3ZnKTp3aGVyZSg6bm90KFtmaWxsXSkpIHtcXG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxufVxcbjp3aGVyZShzdmcpOndoZXJlKDpub3QoW3dpZHRoXSkpIHtcXG4gIGlubGluZS1zaXplOiB2YXIoLS1zaXplLTEwKTtcXG59XFxuOndoZXJlKGNvZGUsIGtiZCwgc2FtcCwgcHJlKSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcXG59XFxuOndoZXJlKDpub3QocHJlKSA+IGNvZGUsIGtiZCkge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuOndoZXJlKHByZSkge1xcbiAgbWF4LWlubGluZS1zaXplOiBtYXgtY29udGVudDtcXG4gIG1pbi1pbmxpbmUtc2l6ZTogMDtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcbjp3aGVyZSg6bm90KHByZSkgPiBjb2RlKSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0xKSB2YXIoLS1zaXplLTIpO1xcbn1cXG46d2hlcmUoa2JkLCB2YXIpIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3VyZmFjZS00KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIGJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLXNpemUtMSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpIHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShtYXJrKSB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0xKTtcXG59XFxuOndoZXJlKG9sLCB1bCkge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpemUtOCk7XFxufVxcbjp3aGVyZShsaSkge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpemUtMik7XFxufVxcbjp3aGVyZShsaSwgZGQsIGZpZ2NhcHRpb24pIHtcXG4gIG1heC1pbmxpbmUtc2l6ZTogdmFyKC0tc2l6ZS1jb250ZW50LTIpO1xcbn1cXG46d2hlcmUocCkge1xcbiAgbWF4LWlubGluZS1zaXplOiB2YXIoLS1zaXplLWNvbnRlbnQtMyk7XFxufVxcbjp3aGVyZShkdCwgc3VtbWFyeSkge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LTcpO1xcbn1cXG46d2hlcmUoZHQ6bm90KDpmaXJzdC1vZi10eXBlKSkge1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1zaXplLTUpO1xcbn1cXG46d2hlcmUoc21hbGwpIHtcXG4gIGZvbnQtc2l6ZTogbWF4KDAuNWVtLCB2YXIoLS1mb250LXNpemUtMCkpO1xcbiAgbWF4LWlubGluZS1zaXplOiB2YXIoLS1zaXplLWNvbnRlbnQtMSk7XFxufVxcbjp3aGVyZShocikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0zKTtcXG4gIGhlaWdodDogdmFyKC0tYm9yZGVyLXNpemUtMik7XFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNpemUtZmx1aWQtNSk7XFxufVxcbjp3aGVyZShmaWd1cmUpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLXNpemUtMik7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG46d2hlcmUoZmlndXJlKSA+IDp3aGVyZShmaWdjYXB0aW9uKSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0xKTtcXG59XFxuOndoZXJlKGJsb2NrcXVvdGUsIDpub3QoYmxvY2txdW90ZSkgPiBjaXRlKSB7XFxuICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB2YXIoLS1ib3JkZXItc2l6ZS0zKTtcXG59XFxuOndoZXJlKGJsb2NrcXVvdGUpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICBtYXgtaW5saW5lLXNpemU6IHZhcigtLXNpemUtY29udGVudC0yKTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMyk7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS00KTtcXG59XFxuOndoZXJlKDpub3QoYmxvY2txdW90ZSkgPiBjaXRlKSB7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2l6ZS0yKTtcXG59XFxuOndoZXJlKHN1bW1hcnkpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtMyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICBtYXJnaW46IGNhbGModmFyKC0tc2l6ZS0yKSAqIC0xKSBjYWxjKHZhcigtLXNpemUtMykgKiAtMSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTIpIHZhcigtLXNpemUtMyk7XFxufVxcbjp3aGVyZShkZXRhaWxzKSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0yKTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTMpO1xcbn1cXG46d2hlcmUoZGV0YWlsc1tvcGVuXSA+IHN1bW1hcnkpIHtcXG4gIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMDtcXG4gIGJvcmRlci1lbmQtc3RhcnQtcmFkaXVzOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS0yKTtcXG59XFxuOndoZXJlKGZpZWxkc2V0KSB7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplLTEpIHNvbGlkIHZhcigtLXN1cmZhY2UtNCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxufVxcbjp3aGVyZShkZWwpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZC05KTtcXG4gIGNvbG9yOiB2YXIoLS1yZWQtMik7XFxufVxcbjp3aGVyZShpbnMpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLTkpO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLTEpO1xcbn1cXG46d2hlcmUoYWJicikge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1ibHVlLTUpO1xcbn1cXG46d2hlcmUoZGlhbG9nKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTMpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTYpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIDp3aGVyZShkaWFsb2cpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0yKTtcXG4gIH1cXG59XFxuOndoZXJlKGRpYWxvZyk6OmJhY2tkcm9wIHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcXG59XFxuOndoZXJlKGh0bWxbXFxcXDpoYXNcXFxcKGRpYWxvZ1xcXFxbb3BlblxcXFxdXFxcXCldKSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG46d2hlcmUoaHRtbDpoYXMoZGlhbG9nW29wZW5dKSkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuOndoZXJlKG1lbnUpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG59XFxuOndoZXJlKHN1cCkge1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1mb250LXNhbnM6IHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLFNlZ29lIFVJLFJvYm90byxVYnVudHUsQ2FudGFyZWxsLE5vdG8gU2FucyxzYW5zLXNlcmlmO1xcbiAgLS1zaXplLTQ6IDEuMjVyZW07XFxuICAtLXNpemUtMTU6IDMwcmVtO1xcbiAgLS1ncmF5LTY6ICM4NjhlOTY7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTEpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtMSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZS0xNSk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0IHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTYpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCI8bm8gc291cmNlPlwiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUFBLDJGQUFBO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtFQUFBO0NBQUE7O0FDQUE7RUFDRSw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W251bGwsXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0xKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTEpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS00KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IHZhcigtLXNpemUtMTUpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZ3JheS02KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi93ZWF0aGVyJztcbmltcG9ydCAnLi9kb20nO1xuIl0sIm5hbWVzIjpbIndlYXRoZXJJbiIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjaXR5IiwidmFsdWUiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJ0YWJsZSIsImFwaUtleSIsImNlbHNpdXNGcm9tS2VsdmluIiwia2VsdmluVmFsdWUiLCJOdW1iZXIiLCJpc05hTiIsIkVycm9yIiwiY2Vsc2l1cyIsInRvRml4ZWQiLCJmYWhyZW5oZWl0RnJvbUtlbHZpbiIsImZhaHJlbmhlaXQiLCJnZXRXZWF0aGVyRGF0YSIsImxvY2F0aW9uIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwibG9nIiwicHJvY2Vzc1dlYXRoZXJEYXRhIiwidGVtcEtlbHZpbiIsIm1haW4iLCJ0ZW1wIiwidGVtcEtlbHZpbkZlZWxzTGlrZSIsImZlZWxzX2xpa2UiLCJkZXNjcmlwdGlvbiIsIndlYXRoZXIiLCJwcmVzc3VyZSIsImh1bWlkaXR5IiwibmFtZSIsImNvdW50cnkiLCJzeXMiLCJ0ZW1wQ2Vsc2l1cyIsInRlbXBDZWxzaXVzRmVlbHNMaWtlIiwidGVtcEZhaHJlbmhlaXQiLCJ0ZW1wRmFocmVuaGVpdEZlZWxzTGlrZSIsIndlYXRoZXJEYXRhIiwicHJvY2Vzc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==