const personName = document.getElementById('name');
const age = document.getElementById('age');
const personStreet = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const valueExtractor = () => {
  const personObj = {
    name: personName.value,
    age: age.value,
    address: {
      street: personStreet.value,
      city: city.value,
      state: state.value,
    },
  };

  const {
    name,
    address: { street },
  } = personObj;
  return {
    name,
    street,
  };
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const ansObj = valueExtractor();
  result.innerText = JSON.stringify(ansObj);
});
