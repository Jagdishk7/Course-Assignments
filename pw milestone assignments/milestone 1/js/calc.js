const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calculatBtn = document.getElementById("calculate");
const output = document.getElementById("output");

calculatBtn.addEventListener("click", () => {
  switch (operator.value) {
    case "+":
      const add = Number(num1.value) + Number(num2.value);
      output.value = add;
      break;
    case "-":
      const sub = Number(num1.value) - Number(num2.value);
      output.value = sub;
      break;
    case "*":
      const times = Number(num1.value) * Number(num2.value);
      output.value = times;
      break;
    case "/":
      const divide = Number(num1.value) / Number(num2.value);
      output.value = divide;
      break;

    default:
      break;
  }
});
