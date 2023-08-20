const dish = document.getElementById('dish');
const dishCost = document.getElementById('dishCost');
const people = document.getElementById('people');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const finalObjMaker = (people, dishCost, dish) => {
  const finalObj = {
    dish: dish,
    perPeopleCost: dishCost / people,
    cost: dishCost,
  };
  return finalObj;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (dish.value && dishCost.value && people.value) {
    const final = finalObjMaker(
      Number(people.value),
      Number(dishCost.value),
      dish.value
    );

    result.innerText = 'Final cost: ' + JSON.stringify(final);
  } else {
    result.innerHTML = 'Enter proper values to calculate.';
  }
});
