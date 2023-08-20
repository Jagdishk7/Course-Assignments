const btn = document.querySelector('.btn');
const initial = document.querySelector('.initial');
const final = document.querySelector('.final');

const priceInDollarArr = [
  {
    item: 'Pencil Box',
    price: 1,
  },
  {
    item: 'Notebook bundle',
    price: 3,
  },
  {
    item: 'Cricket bat',
    price: 10,
  },
  {
    item: 'Paper bundle',
    price: 1.4,
  },
];

initial.innerHTML = JSON.stringify(priceInDollarArr);

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const priceInRupeeArr = priceInDollarArr.map((item) => {
    return {
      ...item,
      price: item.price * 80,
    };
  });
  final.innerHTML = JSON.stringify(priceInRupeeArr);
});
