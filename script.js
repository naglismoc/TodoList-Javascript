todos = [
];

let globalVariable = 5;
// pass by reference or pass by value;

function updateHtmlTable() {
    let generatedHtml = "";
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        //let tableRow = `<tr><td>${todo.name}</td><td>${todo.description}</td></tr>`;
        let tableRow = `<tr>
                            <td>${todo.name}</td>
                            <td>${todo.description}</td>
                        </tr>`               

        generatedHtml = generatedHtml + tableRow;
    }

    let bodyElement = document.getElementById("tasks-table");

    bodyElement.innerHTML = generatedHtml;
}

function addNewTodo() {
    //1 Get Name from document variable in form
    let nameValue = document.getElementById("todo-name").value;
    //2 Get Description from document variable
    let description = document.getElementById("todo-description").value;
    //3 create todo object with received name and description
    var todo = {
        name: nameValue,
        description: description
    }
    //4 add new todo to todoslist
    todos.push(todo);

    //5 Call UpdateHtmlTable function
    updateHtmlTable();
}

updateHtmlTable();