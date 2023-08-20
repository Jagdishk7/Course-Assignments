const inp = document.getElementById('todoInp');
const btn = document.querySelector('.btn');
const todos = document.querySelector('.todos');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (inp.value) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('list-item');
    todoItem.innerHTML = inp.value;
    console.log(todoItem);
    todos.appendChild(todoItem);

    inp.value = '';
  }
});
