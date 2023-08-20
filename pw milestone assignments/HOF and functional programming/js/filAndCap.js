const btn = document.querySelector('.btn');
const initial = document.querySelector('.initial');
const final = document.querySelector('.final');

const initialBooks = [
  {
    title: 'Rich Dad Poor Dad',
    author: 'robert t. kiyosaki',
    publishYear: 1997,
  },
  {
    title: 'Atomic Habits',
    author: 'james clear',
    publishYear: 2018,
  },
  {
    title: 'Do Epic Shit',
    author: 'Ankur Warikoo',
    publishYear: 2021,
  },
  {
    title: 'Bhagavad Gita',
    author: 'vyasa',
    publishYear: 200,
  },
];

initial.innerHTML = JSON.stringify(initialBooks);

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const finalBooks = initialBooks
    .map((book) => {
      if (book.publishYear < 2010) {
        return {
          ...book,
          author: book.author.toUpperCase(),
        };
      }
      return book;
    })
    .filter((book) => book.publishYear < 2010);

  final.innerHTML = JSON.stringify(finalBooks);
});
