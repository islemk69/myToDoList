const addButton = document.querySelector(".add");
let index = 1;

const addTodo = () => {
    const inputString = document.querySelector(".input-text").value;
    if (!inputString)
        return;
    console.log(inputString);
    let todoElem = document.createElement("div");
    todoElem.className = "todo";
    todoElem.innerHTML = `
        <ul>
            <li>${index}</li>
            <li>${inputString}</li>
            <li>In progress</li>
            <li><button class="button delete">DELETE</button><button class="button finished">FINISHED</button></li>
        </ul>
    `
    const parentDiv = document.querySelector(".main-container");
    parentDiv.appendChild(todoElem);
    document.querySelector(".input-text").value = "";
    index++;
}

addButton.addEventListener('click', addTodo);