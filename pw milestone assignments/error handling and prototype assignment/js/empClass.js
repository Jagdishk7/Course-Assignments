const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const name = document.getElementById('name');
const position = document.getElementById('position');
const salary = document.getElementById('salary');

class Employee {
  constructor(n, p, s) {
    this.name = n;
    this.position = p;
    this.salary = s;
  }
  getName() {
    const resultStr = `The name of the employee is ${this.name}`;
    console.log(resultStr);
    return resultStr;
  }
  getPosition() {
    const resultStr = `The position of the employee is ${this.position}`;
    console.log(resultStr);
    return resultStr;
  }
  getSalary() {
    const resultStr = `The salary of the employee is ${this.salary}`;
    console.log(resultStr);
    return resultStr;
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (name.value && position.value && salary.value) {
    const emp = new Employee(name.value, position.value, salary.value);
    result.innerHTML = emp.getSalary();
  } else {
    result.innerHTML = 'Enter proper credentials';
  }
});
