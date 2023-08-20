const btn = document.querySelector('.btn');
const section = document.querySelector('.main-section');

const colorArr = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const colorChangingFn = () => {
  let color = '#';

  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    color += colorArr[randomNum];
  }

  return color;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('changing color');

  //   section.style.background = 'none';
  section.style.backgroundImage = `linear-gradient(to right, ${colorChangingFn()}, ${colorChangingFn()})`;
});
