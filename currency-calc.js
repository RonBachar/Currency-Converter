'use strict';

const form = document.getElementById('currency-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[to];
      const convertedAmount = rate * amount;
      console.log(convertedAmount);
      result.textContent = `${amount} ${from} = ${convertedAmount.toFixed(
        2
      )} ${to}`;
    })
    .catch((error) => {
      console.log(error);
      result.textContent = 'An error occurred while fetching data.';
    });
});
