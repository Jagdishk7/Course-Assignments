const btn = document.querySelector('.btn');
const items = document.querySelector('.inp');
const result = document.querySelector('.result');

const filterElements = (items) => {
  const itemsArr = items.split(',');
  const [a, b, ...rest] = itemsArr;
  return [a, b, rest[rest.length - 1]];
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  result.innerText = JSON.stringify(filterElements(items.value));
});
