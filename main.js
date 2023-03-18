const checkBox = document.querySelector('#checkBox');
function Tasks (_formInput, _todosWrapper, _todosDone) {
    this.todosWrapper = document.querySelector(_todosWrapper);
    this.todosDone = document.querySelector(_todosDone);
    this.addItem = (event) => {
        event.preventDefault();
        this.input = event.target.querySelector(_formInput);
        this.todosWrapper.insertAdjacentHTML("beforeend", this.createTemplate(this.input.value))
    }
    this.itemDone = (event) => {
        this.unDoneItem = event.target.querySelector('.todo-item__description').checked;
        this.todosDone.insertAdjacentHTML("beforeend", this.createTemplate(this.unDoneItem.value));
    }
    this.createTemplate = function (description) {
    return  `
            <div class="todo-item">
                <input type="checkbox" name="checkbox" id="js--item__check">
                <div class="todo-item__description">${description}</div>
            </div>
            `
    }
}

const task = new Tasks(
    '.js--form__input',
    '.js--todos-wrapper',
    '.js--todos-wrapper-done'
    );

document.querySelector('.js--form').addEventListener('submit',task.addItem);
