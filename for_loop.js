// For Loop

for(var cont=1; cont <20 ; cont++) {
	console.log("hello " + cont);
}

document.querySelectorAll('ul.todo-list > li:nth-child(1) input.toggle');
document.querySelectorAll('ul.todo-list > input.toggle');
document.querySelectorAll('input.toggle');
document.querySelectorAll('input.toggle');

var toggles = document.querySelectorAll('.toggle');

for (pos=0; pos < toggles.legth; pos++){
	toggles[pos].click()
};

//another way to do for(with Each)

var toggles = document.querySelectorAll('.toggle');
toggles.forEach


function selectItemX(x) {
	document.querySelector("button.clear-completed").click()
}

function filterAll() {
	location.hash = "/";
}

function filterCompleted() {
	location.hash = "/Completed";
}

function filterActive() {
	location.hash = "/Active";
}


function createTodo(name) {
	
}