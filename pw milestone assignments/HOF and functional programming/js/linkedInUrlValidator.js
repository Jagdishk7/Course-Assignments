const url = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const regex =
    /https:\/\/www\.linkedin\.com*\/in\/[a-z]+[$&+,:;=?@#|'<>.^*()%!-][a-z]+[$&+,:;=?@#|'<>.^*()%!-].+/;

  if (url.value) {
    const match = regex.test(url.value);
    if (match) {
      result.innerHTML = 'Url is valid';
    } else {
      result.innerHTML = 'Url is not valid';
    }
  }
});
