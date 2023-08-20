const btn = document.querySelector('.btn');
const items = document.querySelector('.inp');
const result = document.querySelector('.result');

const makeSet = (items) => {
  const itemArr = items.split(',');
  const itemSet = new Set(itemArr);
  return [...itemSet];
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  result.innerText = JSON.stringify(makeSet(items.value));
});
