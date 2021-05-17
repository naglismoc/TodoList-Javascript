var exampleTodoList = [
    {
        name: "task1",
        description: "descriptionTask1"
    },
    {
        name: "task2",
        description: "descriptionTask2"
    },
    {
        name: "task3",
        description: "descriptionTask2"
    }
];

updateHtmlTable(exampleTodoList);

function updateHtmlTable(todoList) {
     //foreach todoList
        //generate <tr><td> task1 </td> <td> description2 </td> </tr>
        //merge generate table html
    let generateHTml = "";
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        let tableRow = `<tr><td>${todo.name}</td><td>${todo.description}</td></tr>`;

        generateHTml = generateHTml + tableRow;
    }

     //get table html element
    //get tbody of that (table)
    //modify tbody.innerHtml into our newly generated one
   
    let tableElement = document.getElementsByClassName("table")[0];

    let bodyElement = tableElement.getElementsByTagName('tbody')[0];

    bodyElement.innerHTML = generateHTml;
    
   
}