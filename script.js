let todoList = [];

renderTodoList()

function renderTodoList()
{
    let todoListHTML = '';

    for (let i =0; i < todoList.length; i++)
    {
        const todoObject =todoList[i];
        const  { name, dueDate } = todoObject;
        const html = `
        <p>place holder</p>
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todolist').innerHTML = todoListHTML;
}