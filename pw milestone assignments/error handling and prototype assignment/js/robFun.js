const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
const result = document.querySelector('.result');

const getPerson = (obj) => {
  const { name, age } = JSON.parse(obj);
  try {
    if (name && age) {
      const str = `"name:${name}, Age:${age}"`;
      console.log(str);
      return str;
    } else {
      throw new Error('Invalid parameter type.');
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  result.innerHTML = getPerson(inp.value);
});
