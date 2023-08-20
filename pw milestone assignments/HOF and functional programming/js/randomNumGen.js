const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

let loading = true;

const genRandNum = () => {
  result.innerHTML = '';
  let delay = 3;
  let gen = setInterval(() => {
    result.innerHTML = `Random number generating in ${--delay}s`;

    if (delay === 0) {
      clearInterval(gen);
      const num = Math.random();
      result.innerHTML = num;
    }
  }, 1000);
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  genRandNum();
});
