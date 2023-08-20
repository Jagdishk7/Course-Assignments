const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const x = document.getElementById('x');
const y = document.getElementById('y');

const swapValues = (x, y) => {
  const [a, b] = [x, y];
  return {
    x: b,
    y: a,
  };
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  result.innerText = JSON.stringify(swapValues(x.value, y.value));
});
