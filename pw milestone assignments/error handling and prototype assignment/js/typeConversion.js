const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
const result = document.querySelector('.result');

const typeConverter = (str) => {
  const converted = Number(str);
  console.log(`The type of input ${str} is ${typeof str}`);
  if (isNaN(converted)) {
    console.log(`Couldn't change the '${str}' to number`);
    return 'Invalid Number';
  } else {
    console.log(`And now '${str}' is converted to ${typeof converted}`);
    return converted;
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const converted = typeConverter(inp.value);
  result.innerHTML = converted;
});
