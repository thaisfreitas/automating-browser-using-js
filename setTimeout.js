//setup env

localStorege.clear()

setTimeout(function(){console.log("hello")}, 1000)

setTimeout(autoTodo.createTodo, 1000, "hello")

for (var i = 1 ; i <=100; i++) {
	setTimeout(autoTodo.createTodo, i*100, "Todo" + i)
}

//create 100 todo using setInterval

var sayHello = setInterval(function() {
	console.log("Hello"), 1000
})

var botTodoCount = 0;

var creatorBot = setInterval(
	function(){
		document.querySelector('input.new-todo').value = name;
    	document.querySelector('input.new-todo').dispatchEvent(new Event('change',{
        'bubbles': true}));

        botTodoCount++;

        if(botTodoCount >=100){
        	clearInterval(creatorBot);
        }
	},
	500);