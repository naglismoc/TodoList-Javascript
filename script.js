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
    if(!inputValidation()){
        return;
    }

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
    console.log(todos);
    todos.push(todo);
    
    //5 Call UpdateHtmlTable function
    clearForm();
    updateHtmlTable();
    
    document.getElementById('todo-name').focus();
}

function clearForm() {
    document.getElementById("todo-name").value = "";
    document.getElementById("todo-description").value = "";
}

function inputValidation() {
    document.getElementById("error").innerHTML = "";
    if( isValid("todo-name") ){
        return true;
    }

    if( !isValid("todo-description") ){
        document.getElementById("error").innerHTML += "<h1>Forma negali buti tuscia</h1>";
    }
    
    if( !isValid("todo-name") ){
        document.getElementById("error").innerHTML += "<h1>Forma negali buti be pavadinimo</h1>";
    }

        return false;
}

function inputValidationV2() {
    document.getElementById("error").innerHTML = "";

    if( !isValid("todo-name") &&
    !isValid("todo-description") ){
        document.getElementById("error").innerHTML += "<h1>Forma negali buti tuscia</h1>";
    }

    if( !isValid("todo-name") &&
    isValid("todo-description") ){
        document.getElementById("error").innerHTML += "<h1>Forma negali buti be pavadinimo</h1>";
    }
}

function isValid(id) {
    
    if(document.getElementById(id).value == ""){
        return false;
    }
    return true;
}