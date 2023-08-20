const btn = document.querySelector('.btn');
const str = document.querySelector('.str');
const result = document.querySelector('.result');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  setTimeout(() => {
    if (str.value) {
      const reversed = str.value.split('').reverse().join('');
      result.innerText = 'Reversed string:- ' + reversed;
    } else {
      result.innerHTML = 'Enter a string to reverse it';
    }
  }, 2000);
});
