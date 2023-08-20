// calling the function before it is declared.
addNumbers(2, 5);

// declaring the function
function addNumbers(a, b) {
  console.log(a + b);
  return a + b;
}

// In the above example, we call the addNumbers function before it's actually declared. This is possible due to hoisting, which is a JavaScript behavior where variable and function declarations are moved to the top of their respective scopes.
