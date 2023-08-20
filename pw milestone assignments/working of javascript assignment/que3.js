function add(a, b) {
  console.log(sum); // it gives the output undefined because we used var. If we have used let or const then it would have been thrown an error.
  var sum = a + b;
  console.log(sum); // here it will print the sum
  return sum;
}

add(1, 3);
