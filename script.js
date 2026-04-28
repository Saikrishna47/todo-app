const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Initialize theme from localStorage
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
}

// Set the theme
function setTheme(theme) {
  if (theme === 'dark') {
    htmlElement.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.classList.remove('dark-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.classList.contains('dark-theme') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Initialize theme on page load
initializeTheme();

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

  span.addEventListener('click', () => {
    li.classList.toggle('completed');
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
