function print() {
  console.log(a); // it will print undefined
  console.log(b); // it will throw an error 'cannot access b before initialization' and block the code execution
  console.log(c); // it will also throw an error 'cannot access b before initialization' and block the code execution
  var a = 'vaibhav';
  let b = 'prajapat';
  const c = '20 years old';
  console.log(a);
  console.log(b);
  console.log(c);
}

print();
