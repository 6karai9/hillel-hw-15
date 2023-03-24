const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');
const todosWrapperDone = document.querySelector('.js--todos-wrapper-done');

function addTask(event) {
    event.preventDefault();
    const taskDescription = input.value;
    if (taskDescription) {
        const taskElement = createTaskElement(taskDescription);
        todosWrapper.appendChild(taskElement);
        input.value = '';
    }
}

function createTaskElement(description) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('js--item__check');
    checkbox.addEventListener('change', moveTaskToDone);

    const taskDescription = document.createElement('div');
    taskDescription.classList.add('todo-item__description');
    taskDescription.textContent = description;

    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskDescription);

    return taskElement;
}

function moveTaskToDone(event) {
    const taskElement = event.target.closest('.todo-item');
    if (taskElement) {
        taskElement.classList.add('completed');
        taskElement.removeChild(event.target);
        todosWrapperDone.appendChild(taskElement);
    }
}

form.addEventListener('submit', addTask);