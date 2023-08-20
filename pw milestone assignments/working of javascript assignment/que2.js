// calling the function before it is declared
multiplyNumbers(3, 4);

// declaring the function.
const mltiplyNumbers = function (a, b) {
  console.log(a * b);
  return a * b;
};

// in the function expression we cannot invoke the function before its declaration.
