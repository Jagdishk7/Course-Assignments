const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const student = document.getElementById('stName');

class Student {
  constructor(n) {
    this.name = n;
  }
}

Student.prototype.getDetails = function () {
  const finalStr = `Hello, the student is ${this.name}`;
  console.log(finalStr);
  return finalStr;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const st = new Student(student.value);
  result.innerHTML = st.getDetails();
});
