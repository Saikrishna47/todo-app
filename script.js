const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  const button = document.createElement('button');
  button.className = 'delete-button';
  button.type = 'button';
  button.textContent = 'Delete';
  button.addEventListener('click', () => {
    li.remove();
  });

  li.append(span, button);
  return li;
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = todoInput.value.trim();

  if (!todoText) {
    return;
  }

  const todoItem = createTodoItem(todoText);
  todoList.appendChild(todoItem);
  todoInput.value = '';
  todoInput.focus();
});
