const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const inp = document.querySelector('.inp');

// * by 1.8 and add 32

const converterFn = (value) => {
  const F = Number(value) * 1.8 + 32;
  return F;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inp.value) {
    const convertedVal = converterFn(inp.value);
    result.innerText = 'Value in F: ' + convertedVal;
  } else {
    result.innerText = 'Enter a value to convert';
  }

  inp.value = '';
});
