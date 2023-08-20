const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const inpArr = document.getElementById('inpArr');
const num = document.getElementById('num');

const numberChecker = (arr) => {
  return (checkNum = (num) => {
    console.log(arr.includes(num));
    return arr.includes(num);
  });
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const numsArr = inpArr.value.split(',');
  const checkNum = numberChecker(numsArr);
  result.innerHTML = checkNum(num.value);
});
