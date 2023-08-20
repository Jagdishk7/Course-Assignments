const orgPrice = document.getElementById('orgPrice');
const disPrice = document.getElementById('disPrice');
const calc = document.querySelector('.calc');
const result = document.querySelector('.result');

const discountCalculator = (orgPrice, disPrice) => {
  const disPercentage = ((orgPrice - disPrice) / orgPrice) * 100;

  return disPercentage.toFixed(2);
};

calc.addEventListener('click', (e) => {
  e.preventDefault();
  if (orgPrice.value && disPrice.value) {
    const percentage = discountCalculator(
      Number(orgPrice.value),
      Number(disPrice.value)
    );
    result.innerText = `Discount: ${percentage}%`;
  } else {
    result.innerText = 'Enter values to calculate percentage';
  }
});
