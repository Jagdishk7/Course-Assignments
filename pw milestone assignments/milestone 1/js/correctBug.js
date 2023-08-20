const item = document.getElementById('item');
const quantity = document.getElementById('itemQuantity');
const btn = document.querySelector('.btn');
const cartElem = document.querySelector('.cart');
const resultBox = document.querySelector('.result');

const cart = [];

// main answer function

const quantityDoubler = (cartArr) => {
  const cart2 = cartArr.map((item) => {
    return {
      ...item,
      quantity: item.quantity * 2,
    };
  });

  return cart2;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const itemObj = {};

  if (item.value && quantity.value) {
    itemObj.item = item.value;
    itemObj.quantity = quantity.value;
    cart.push(itemObj);
  }

  cartElem.innerText = 'Original cart: ' + JSON.stringify(cart);

  const cart2 = quantityDoubler(cart);

  resultBox.innerText =
    'cart with doubled quantities: ' + JSON.stringify(cart2);
});
