// advanced bots

for(var prop in autoTodo){
	if(typeof autoTodo[prop]== 'function'){
		console.log(prop)
	}
}


var rando = new function(){

	function getRandomInt(x){
		return Math.floor(Math.random()*x)

	}

	function getRandomItemIndex() {
		max = document.querySelectorAll('ul.todo-list li').length;
		if(max ===0){
			console.log("no items to choose for")
		}
		x = getRandomInt(max)+1;
		return x;
	}

	this.selectRandomItem = function(){
		x = getRandomItemIndex();
		if(x>0){
			console.log("select item"+x);
			autoTodo.selectItemX(x);
		}
	}

	this.toggleAll = function(){
		console.log("toggle all");
		autoTodo.toggleAll()
	}

	this.createRandomTodo = function() {
		console.log("create a todo")
		autoTodo.createTodo("random todo "+ Date.now());
	}

	this.amendRandomTodo = function() {
		x = getRandomItemIndex();
		if(x>0){
			console.log("amend a todo " + x);
			autoTodo.amendTodo(x, "amended random todo "+ Date.now())	
		}
		
	}
}