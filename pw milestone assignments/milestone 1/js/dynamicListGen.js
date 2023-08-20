const listBox = document.querySelector('.list-item-box');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');

const arr = [
  'HTML and Semantics',
  'Starting with CSS',
  'Working Template',
  'Mobile responsive webpages',
  'Grid and Flex-box in CSS',
  'Projects using HTML & CSS',
  'Version Control and Git',
  'Getting Started with JavaScript',
  'Advance JavaScript',
  'Working with DOM',
  'Making Projects using HTML, CSS and JavaScript',
  'Understanding Fundamental of Computer Science',
  'Getting Started with Database',
  'Understanding the Database',
  'Starting with NodeJS and Express',
  'Understanding React and its Fundamentals',
  'Understanding Hooks and Routers',
  'Starting and Completing Full Fledge Projects',
];

let items = 1;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  listBox.innerHTML = '';

  for (let i = 0; i < items; i++) {
    listBox.innerHTML += `<li class="list-item">${arr[i]}</li>`;
  }
  items++;
  if (items > arr.length) {
    msg.innerHTML = 'All items have been added';
    msg.style.color = 'red';
    items = 1;
  }
  console.log('items added ');
});
