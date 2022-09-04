const todoBtn = document.querySelector('.todo-btn');
const todoLayout = document.querySelector('.todo');
const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo-list');
const formFields = document.querySelectorAll('.show-check')



const getTodo = () => {
    todoLayout.classList.remove('todo-hidden');
    todoLayout.addEventListener('click', e => {
        if (e.target.classList.contains('todo')) {
            todoLayout.classList.add('todo-hidden');
        }
    })
}

const todoObject = {};

const todoInputHandler = (e) => {
    if (e.key === "Enter") {
        const liTodoItem = document.createElement('li');
        liTodoItem.classList.add('todo-list__item');

        const checkItem = document.createElement('input');
        checkItem.type = "checkbox";
        //checkItem.name = 'name';
        checkItem.classList.add('todo-list__item-check');
        //const randId = getRandomNum(100, 0);
        //checkItem.id = `${randId}`;
        checkItem.checked = false;
        checkItem.name = `${todoInput.value}`;

        const label = document.createElement('label');
        //label.htmlFor = `${randId}`;
        label.classList.add('todo-list__item-label')
        label.appendChild(document.createTextNode(`${checkItem.name}`));

        const btn = document.createElement('button');
        btn.classList.add('todo-list__item-btn');
        btn.name = `${todoInput.value}`;

        liTodoItem.appendChild(checkItem);
        liTodoItem.appendChild(label);
        liTodoItem.appendChild(btn);

        todoList.appendChild(liTodoItem);

        if (!(checkItem.name in todoObject)) todoObject[checkItem.name] = checkItem.checked;

        todoInput.value = '';
    }
    todoItemDelete();

}

const todoInit = (e) => {
        if (e.target.name != 'undefined') todoObject[e.target.name] = e.target.checked;
}

const setTodoItem = () => {
    for (let key in todoObject) {
        const liTodoItem = document.createElement('li');
        liTodoItem.classList.add('todo-list__item');

        const checkItem = document.createElement('input');
        checkItem.type = "checkbox";
        checkItem.classList.add('todo-list__item-check');
        checkItem.checked = todoObject[key];
        checkItem.name = key;

        const label = document.createElement('label');
        label.classList.add('todo-list__item-label')
        label.appendChild(document.createTextNode(`${key}`));

        const btn = document.createElement('button');
        btn.classList.add('todo-list__item-btn');
        btn.name = key;

        liTodoItem.appendChild(checkItem);
        liTodoItem.appendChild(label);
        liTodoItem.appendChild(btn);

        todoList.appendChild(liTodoItem);
    }
    todoItemDelete()
}

const todoItemDelete = () => {
    document.querySelectorAll('.todo-list__item-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.target.parentNode.remove();
            delete todoObject[e.target.name]
        });
    });
}

const getLocalStorage = () => {
    if (localStorage.getItem('todoObject')) {
        Object.assign(todoObject, JSON.parse(localStorage.getItem('todoObject')));
        setTodoItem();
    }
   
}
window.addEventListener('load', getLocalStorage);

const setLocalStorage = () => {
    localStorage.setItem('todoObject', JSON.stringify(todoObject));
}
window.addEventListener('beforeunload', setLocalStorage);

export {todoBtn, getTodo, todoInput, todoInputHandler, todoList, todoInit}