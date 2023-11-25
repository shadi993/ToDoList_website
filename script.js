let todoList = [];

renderTodoList()

function renderTodoList()
{
    let todoListHTML = '';

    for (let i =0; i < todoList.length; i++)
    {
        const todoObject =todoList[i];
        const  { name, description } = todoObject;
        const html = `
        <li>
        <span id="comment">home</span>
        <span id="close">X</span>
    </li>
    <li>${name}</li>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todolist').innerHTML = todoListHTML;
}

function addTodo()
{
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-description');
const dueDate = dateInputElement.value;
    
    todoList.push({name, description});
    console.log(todoList);
    inputElement.value ='';

    renderTodoList()
}

