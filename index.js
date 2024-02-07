const addButton = document.querySelector(".add");
const resetButton = document.querySelector(".reset")
const parentDiv = document.querySelector(".todo-container");

let todos = [];
let index = 1;

const deleteTodo = id => {
	todos = todos.filter(todo => todo.id !== id);
	todos.forEach(todo => todo.isDisplayed = false);

    // Mise à jour de l'interface utilisateur pour refléter la suppression
    parentDiv.innerHTML = ''; // Effacer tous les éléments de l'UI
    updateUI(); // Recréer l'UI avec les todos restants
}

const markAsFinished = id => {
	todos.forEach(todo => {
		if (todo.id == id){
			todo.status = "finished"
		}
		todo.isDisplayed = false;
	})
	parentDiv.innerHTML = "";
	updateUI();
}

const updateUI = () => {
	todos.forEach(todo => {
		if (todo.isDisplayed)
			return ;
		todo.isDisplayed = true;
		let todoElem = document.createElement("div");
		todoElem.className = "todo";
		todoElem.innerHTML = `
			<ul>
				<li>${todo.id}</li>
				<li style="display: inline-block">${todo.text}</li>
				<li class="${todo.status === "finished" ? "green" : ""}">${todo.status}</li>
				<li><button class="button delete">DELETE</button><button class="button finished">FINISHED</button></li>
			</ul>
		`

		todoElem.querySelector(".delete").addEventListener('click', () => deleteTodo(todo.id));
		todoElem.querySelector(".finished").addEventListener('click', () => markAsFinished(todo.id));
		parentDiv.appendChild(todoElem);
		setTimeout(() => {
			todoElem.style.transform = 'scale(1)';
		}, 10); // Un délai de 10ms
	})
}

const addTodo = () => {
    const inputString = document.querySelector(".input-text").value;
    if (!inputString || index === 9)
        return;

	const newTodo = {
		id: index,
		text: inputString,
		status: "in progress",
		isDisplayed: false
	}
	todos.push(newTodo);
	updateUI();
	document.querySelector(".input-text").value = "";
    index++;
}

const resetTodo = () => {
	console.log(todos);
	todos = [];
	index = 1;
	parentDiv.innerHTML = "";
	console.log(todos);
	updateUI();
}

addButton.addEventListener('click', addTodo);
resetButton.addEventListener('click', resetTodo);