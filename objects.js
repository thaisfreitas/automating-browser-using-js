// objects

var item = document.querySelector('#toggle-all')

var autoTodo = new function(){

	this.clickItem = function(item) {
    	item.click()
	}

	this.toggleAll = function() {
    	document.querySelector('#toggle-all').click()
	}

	this.selectItemX = function(x) {
    	document.querySelector('ul.todo-list li:nth-child(' + x + ') input.toggle').click()
	}

	this.deleteItemX = function(x) {
	    document.querySelector('ul.todo-list li:nth-child(' + x + ') button.destroy').click();
	}


	this.filterCompleted = function() {
	    location.hash = '/Completed';
	}

	this.filterActive = function() {
	    location.hash = '/Active';
	}

	this.filterAll = function() {
	    location.hash = '/';
	}

	this.createTodo = function(name) {
	    document.querySelector('input.new-todo').value = name;
	    document.querySelector('input.new-todo').dispatchEvent(new Event('change',{
	        'bubbles': true
	    }));
	}

	this.amendTodo = function(pos, amendedValue) {
		document.querySelector('ul.todo-list > li:nth-child(' + pos +') > div > label').dispatchEvent(new Event('dblclick',{'bubbles:': true}));
		document.querySelector('ul.todo-list > li:nth-child(' + pos + ') .edit').value=amendedValue;
		document.querySelector('ul.todo-list > li:nth-child(' + pos + ') .edit').dispatchEvent(new Event('blur'));
	}

}