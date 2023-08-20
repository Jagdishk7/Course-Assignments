const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const inp = document.querySelector('.inp');

const greet = (name) => {
  const greetPromise = new Promise((resolve, reject) => {
    try {
      if (name) {
        const resultStr = `Hello, ${name}!`;
        console.log(resultStr);
        result.innerHTML = resultStr;
        return resolve(resultStr);
      } else {
        throw new Error('Enter the name');
      }
    } catch (error) {
      console.log(error);
      result.innerHTML = error;

      return error;
    }
  });
  return greetPromise;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  greet(inp.value);
});
