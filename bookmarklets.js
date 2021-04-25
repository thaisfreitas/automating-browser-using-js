javascript:(function(){
	for (var i = 1 ; i <=100; i++) {
	setTimeout(autoTodo.createTodo, i*100, "Todo" + i)
}
})()


javascript:(function() {
	max = prompt("How Many Todos?")
	if(max){
		for (i = 1; i <= max; i++) {
 		   setTimeout(function(name) {
        	document.querySelector("input.new-todo").value = name;
        	document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles': true}));
        	}, i*100, "todo "+i)
	}	

}

})();
