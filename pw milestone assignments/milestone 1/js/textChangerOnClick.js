const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (heading.innerHTML == 'The most affordable learning platform') {
    heading.innerHTML = 'PW Skills';
  } else if (heading.innerHTML == 'PW Skills') {
    heading.innerHTML = 'The most affordable learning platform';
  }
});
