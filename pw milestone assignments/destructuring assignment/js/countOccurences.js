const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
const para = document.querySelector('.inp');

const countFn = (para) => {
  const wordCountArr = para.toLowerCase().split(' ');
  const wordMap = new Map();
  wordCountArr.forEach((e) => {
    if (wordMap.has(e)) {
      wordMap.set(e, wordMap.get(e) + 1);
    } else {
      wordMap.set(e, 1);
    }
  });

  return wordMap;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const resultantMap = countFn(para.value);
  console.log(resultantMap);
  result.innerText = 'Check the console because map could not be stringified';
});
