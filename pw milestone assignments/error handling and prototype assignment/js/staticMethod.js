const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

class Calculator {
  static add(num1, num2) {
    const ans = num1 + num2;
    console.log(ans);
    return ans;
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  result.innerHTML = `${number1} + ${number2} = ${Calculator.add(
    number1,
    number2
  )}`;
});
