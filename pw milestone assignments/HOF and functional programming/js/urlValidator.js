const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const url = inp.value;
  const validatingExpression = /(https|http):\/\/(www\.)?[a-z0-1]+\.[a-z]+\/?/i;
  if (url) {
    const match = validatingExpression.test(url);

    if (match) {
      result.innerHTML = 'Entered URL is valid';
    } else {
      result.innerHTML = 'URL is not valid';
    }
  }
});
