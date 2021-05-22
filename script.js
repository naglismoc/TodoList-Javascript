
// sessionStorage.setItem("data",        
// JSON.stringify( [
//         {   id: 1,
//             name: 1,
//             description: 'description'
//         },
//         {   id: 2,
//             name: 2,
//             description: 'description'
//         },
//         {   id: 3,
//             name: 3,
//             description: 'description'
//         }
//     ] )
    
// ); 
let globalVariable = 5;
// pass by reference or pass by value;

let id = 3;
updateHtmlTable();
function updateHtmlTable() {
    let generatedHtml = "";
    let todos = JSON.parse( sessionStorage.getItem('data')  );
    if(todos === null){
        sessionStorage.setItem("data", JSON.stringify( [] ));
        return;
    }
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        //let tableRow = `<tr><td>${todo.name}</td><td>${todo.description}</td></tr>`;
        let tableRow = `<tr>

                            <td>${todo.name}</td>
                            <td>${todo.description}</td>`+
                           `<td>
                           <div class="edit btn btn-warning" id="edit-${todo.id}">Edit</div>
                           <div class="delete btn btn-danger" id="${todo.id}">trinti irasa</div>
                           </td>

                            <td>`+
                            // <div class="delete btn btn-danger" onclick="deleteEntry(${todo.id});">trinti irasa</div>
                            `</td>
                        </tr>`               
                        
        generatedHtml = generatedHtml + tableRow;
    }
    
    let bodyElement = document.getElementById("tasks-table");
    
    bodyElement.innerHTML = generatedHtml;
    activateDeleteBtns();
    activateEditBtns();
}

function addNewTodo() {
    if(!inputValidation2()){
        return;
    }
    id++;
    
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
    let todos = JSON.parse( sessionStorage.getItem('data')  ); 
    todos.push(todo); 
    sessionStorage.setItem("data", JSON.stringify(todos));
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

function editEntry(id){
    for (let i = 0; i < todos.length; i++) { 
        if( `edit-${todos[i].id}` == id){
            activateEditMode(todos[i]);
        } 
    }
}

function activateEditMode(todo){
    //Get Html elements of Name, description
    document.getElementById("todo-name").value = todo.name;
    document.getElementById("todo-description").value = todo.description;
    document.getElementById("todo-id").value = todo.id;

    //Update those html elements with todo.name, todo.description
    //Unhide the EditButton
    document.getElementById("edit-btn").style = "";
    document.getElementById("submit-btn").style = "display:none";
}

function editTodo(){
    if(!inputValidation2()){
        return;
    }
    var todoId = document.getElementById("todo-id").value;

    var todo = todos.filter(todo => todo.id == todoId)[0];

    todo.name = document.getElementById("todo-name").value;
    todo.description = document.getElementById("todo-description").value;

    updateHtmlTable();

    clearForm();
    document.getElementById("edit-btn").style = "display:none";
    document.getElementById("submit-btn").style = "";
}

function deleteEntry(id) {
   for (let i = 0; i < todos.length; i++) { 
       if( todos[i].id == id){
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

function activateEditBtns() {
    let editBtns = document.getElementsByClassName('edit');
    
    for (let i = 0; i < editBtns.length; i++) {
        let btn = editBtns[i];
        btn.addEventListener('click',function(){
            editEntry(btn.id);
        });
    }
}