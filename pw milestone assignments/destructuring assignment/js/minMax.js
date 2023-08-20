const btn = document.querySelector('.btn');
const items = document.querySelector('.inp');
const result = document.querySelector('.result');

const minMaxFinder = (items) => {
  const itemsArr = items.split(',');
  const max = Math.max(...itemsArr);
  const min = Math.min(...itemsArr);

  return {
    max,
    min,
  };
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  result.innerText = JSON.stringify(minMaxFinder(items.value));
});
