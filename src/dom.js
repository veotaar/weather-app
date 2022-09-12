import { weatherIn } from './weather';

const form = document.querySelector('[data-form]');
const input = document.querySelector('[data-input]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = input.value;
  weatherIn(city).then((data) => console.table(data));
});
