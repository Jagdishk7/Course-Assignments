const btn = document.querySelector('.btn');
const days = document.querySelector('#days');
const categ = document.querySelector('#categ');
const result = document.querySelector('.result');

const rentCalculator = (days, categ) => {
  let cost;
  if (categ == 'economy') {
    cost = days * 4000;
    return cost;
  }
  if (categ == 'midSize') {
    cost = days * 10000;
    return cost;
  }
  if (categ == 'luxury') {
    cost = days * 20000;
    return cost;
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (days.value && categ.value) {
    const rent = rentCalculator(Number(days.value), categ.value);
    result.innerText = `The rent for ${days.value} days: ₹${rent} only.`;
  }
});
