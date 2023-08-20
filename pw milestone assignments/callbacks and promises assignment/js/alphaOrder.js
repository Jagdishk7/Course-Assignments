const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
const result = document.querySelector('.result');

const booksArr = [
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    year: 1997,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    year: 2018,
  },
  {
    title: 'The Psychology of Money',
    author: 'James Clear',
    year: 2020,
  },
];

inp.innerHTML = JSON.stringify(booksArr);

const createDetails = (bookList, creatorFn) => creatorFn(bookList);

const creatorFn = (list) => {
  const finalList = list.map(({ title }) => title);
  console.log(finalList.sort());
  result.innerHTML = JSON.stringify(finalList.sort());
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  createDetails(booksArr, creatorFn);
});
