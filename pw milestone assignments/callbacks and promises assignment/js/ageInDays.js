const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const age = document.getElementById('age');

// main funciton calling another function
const ageInDays = (person, logResult) => logResult(person);

const logResult = (person) => {
  const { fName, lName, age } = person;
  const fullName = `${fName} ${lName}`;
  const ageInDays = age * 365;
  const resultStr = `The person's full name is ${fullName} and their age is ${ageInDays} days.`;
  console.log(resultStr);
  result.innerHTML = resultStr;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const person = {
    fName: firstName.value,
    lName: lastName.value,
    age: age.value,
  };

  ageInDays(person, logResult);
});
