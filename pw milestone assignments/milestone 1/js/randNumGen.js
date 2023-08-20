const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
(randNumGenerator = () => {
  const randomNum = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  result.innerText = `Random number: ${randomNum}`;
})();

btn.addEventListener('click', (e) => {
  e.preventDefault();
  randNumGenerator();
});
