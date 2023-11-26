let todoList = [];

renderTodoList()

function renderTodoList()
{
    let todoListHTML = '';

    for (let i =0; i < todoList.length; i++)
    {
        const todoObject =todoList[i];
        const  { name} = todoObject;
        const html = `
        <li>
                    <span id="comment">${name}</span>
                    <span id="close">X</span>
                </li>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todolist').innerHTML = todoListHTML;
}

function addTodo()
{
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    //const dateInputElement = document.querySelector('.js-description');
    //const description = dateInputElement.value;
    
    todoList.push({name});
    console.log(todoList);
    inputElement.value ='';

    renderTodoList()
}

