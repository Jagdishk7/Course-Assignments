const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const inp = document.querySelector('.inp');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const inpArr = inp.value.split(',');
  // the map takes a callback function
  const doubledValArr = inpArr.map((e) => {
    // here this is a callback function which is returning the double of each value in the array
    return e * 2;
  });
  result.innerHTML = JSON.stringify(doubledValArr);
});
