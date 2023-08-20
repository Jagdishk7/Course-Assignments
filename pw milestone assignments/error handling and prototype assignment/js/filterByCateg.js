const btn = document.querySelector('.btn');
const arrBox = document.querySelector('#arrBox');
const options = document.querySelector('#option');
const result = document.querySelector('.result');

// handling frontend dynamically
const arr = [
  {
    name: 'Shirt',
    category: 'Clothing',
  },
  {
    name: 'Pants',
    category: 'Clothing',
  },
  {
    name: 'Hat',
    category: 'Accessories',
  },
  {
    name: 'Sunglasses',
    category: 'Accessories',
  },
];

arrBox.innerHTML = JSON.stringify(arr);

const categoryList = new Set(
  arr.map(({ category }) => {
    return `<option value="${category}">${category}</option>`;
  })
);

options.innerHTML = [
  '<option value="">--Select Category--</option>',
  ...categoryList,
];

// main solution

function filterByCategory(productsArr) {
  return function (category) {
    if (category == '') {
      return 'Please select a category.';
    }
    return productsArr.filter((product) => product.category === category);
  };
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const filterProductsByCategory = filterByCategory(arr);
  const filteredProducts = filterProductsByCategory(options.value);
  result.innerHTML = JSON.stringify(filteredProducts);
});
