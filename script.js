todos = [
    {   id: 1,
        name: 1,
        description: 'description'
    },
    {   id: 2,
        name: 2,
        description: 'description'
    },
    {   id: 3,
        name: 3,
        description: 'description'
    }
];

let globalVariable = 5;
// pass by reference or pass by value;

let id = 3;
updateHtmlTable();
function updateHtmlTable() {
    let generatedHtml = "";
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        //let tableRow = `<tr><td>${todo.name}</td><td>${todo.description}</td></tr>`;
        let tableRow = `<tr>
                            <td>${todo.name}</td>
                            <td>${todo.description}</td>`+
                           `<td><div class="delete btn btn-danger" id="${todo.id}">trinti irasa</div></td>
                            <td>`+
                               // <div class="delete btn btn-danger" onclick="deleteEntry(${todo.id});">trinti irasa</div>
                            `</td>
                        </tr>`               

        generatedHtml = generatedHtml + tableRow;
    }

    let bodyElement = document.getElementById("tasks-table");

    bodyElement.innerHTML = generatedHtml;
    activateDeleteBtns();
}

function addNewTodo() {
    if(!inputValidation2()){
        return;
    }
    id++;
    console.log(todos);
    //1 Get Name from document variable in form
    let nameValue = document.getElementById("todo-name").value;
    //2 Get Description from document variable
    let description = document.getElementById("todo-description").value;
    //3 create todo object with received name and description
    var todo = {
        id: id,
        name: nameValue,
        description: description
    }
    //4 add new todo to todoslist
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
        document.getElementById("error").innerHTML += '<h1 >Forma negali buti tuscia</h1>';
    }
    
    if( !isValid("todo-name") ){
        document.getElementById("error").innerHTML += "<h1>Forma negali buti be pavadinimo</h1>";
    }

        return false;
}

function inputValidation2() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").classList.remove('success');
    document.getElementById("error").classList.remove('error');

    if( !isValid("todo-name") &&
    !isValid("todo-description") ){
        document.getElementById("error").innerHTML += "<h1>Forma negali buti tuscia</h1>";
        document.getElementById("error").classList.add('error');
        return false;
    }

    if( !isValid("todo-name") &&
    isValid("todo-description") ){
        document.getElementById("error").innerHTML += "<h1>Forma negali buti be pavadinimo</h1>";
        document.getElementById("error").classList.add('error');
        return false;
    }
    document.getElementById("error").classList.add('success');
    document.getElementById("error").innerHTML += "<h1>Jums pavyko prideti irasa</h1>";
       
    return true;
}

function isValid(id) {
    
    if(document.getElementById(id).value == ""){
        return false;
    }
    return true;
}

function deleteEntry(id) {
   console.log(id );
   for (let i = 0; i < todos.length; i++) { 
       if( todos[i].id == id){
           console.log( todos[i]);
           todos.splice(i,1);
       }
       
   }
   updateHtmlTable();
}

function activateDeleteBtns() {
    let deleteBtns = document.getElementsByClassName('delete');

    for (let i = 0; i < deleteBtns.length; i++) {
        let btn = deleteBtns[i];
        btn.addEventListener('click',function(){
            deleteEntry(btn.id);
        });
    }
}


