const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const name = document.getElementById('name');
const age = document.getElementById('age');

class Person {
  constructor(n = 'unknown', a = 0) {
    this.name = n;
    this.age = a;
  }
  getDetails() {
    const resultStr = `Name: ${this.name}, Age: ${this.age}`;
    console.log(resultStr);
    return resultStr;
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const person =
    name.value && age.value ? new Person(name.value, age.value) : new Person();
  result.innerHTML = person.getDetails();
});
