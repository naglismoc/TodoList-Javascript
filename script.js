var exampleTodos = [
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

updateHtmlTable(exampleTodos);

function updateHtmlTable(todos) {
  
    let generatedHtml = "";
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        //let tableRow = `<tr><td>${todo.name}</td><td>${todo.description}</td></tr>`;
        let tableRow = `<tr>
                            <td>${todo.name}</td>
                            <td>${todo.description}</td>
                        </tr>`
        console.log("\`text\"")                 

        generatedHtml = generatedHtml + tableRow;
    }

    let bodyElement = document.getElementById("tasks-table");

    bodyElement.innerHTML = generatedHtml;
}