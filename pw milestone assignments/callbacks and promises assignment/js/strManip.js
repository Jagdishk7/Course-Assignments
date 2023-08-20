const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const inp = document.querySelector('.inp');

const manipulateString = (str, logString) => {
  logString(str);
};

const logString = (str) => {
  const resultStr = `The manipulated string is: ${str.toUpperCase()}`;
  console.log(resultStr);
  result.innerHTML = resultStr;
  return resultStr;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  manipulateString(inp.value, logString);
});
