const item = document.getElementById('item');
const itemPrice = document.getElementById('itemPrice');
const quantity = document.getElementById('quan');

const addBtn = document.querySelector('.add');
const calcBtn = document.querySelector('.calc');
const cartElem = document.querySelector('.cart');
const result = document.querySelector('.result');

const cart = [];

const totaler = (item, price, quantity) => {
  const obj = {
    item,
    price,
    quantity,
    total: price * quantity,
  };
  return obj;
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if ((item.value, itemPrice.value, quantity.value)) {
    const cartObj = totaler(
      item.value,
      Number(itemPrice.value),
      Number(quantity.value)
    );

    cart.push(cartObj);

    item.value = '';
    itemPrice.value = '';
    quantity.value = '';

    cartElem.innerHTML = JSON.stringify(cart);
  }
});

calcBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let finalBilling = 0;
  cart.forEach((item) => {
    finalBilling += item.total;
  });
  result.innerText = 'Total price to be paid: ' + finalBilling;
});
