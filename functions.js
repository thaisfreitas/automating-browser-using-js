// functions

//Vanilla todo helpers

var item = document.querySelector('#toggle-all')

function clickItem(item) {
    item.click()
}

function toggleAll() {
    document.querySelector('#toggle-all').click()
}

function selectItemX(x) {
    document.querySelector('ul.todo-list li:nth-child(' + x + ') input.toggle').click()
}

function deleteItemX(x) {
    document.querySelector('ul.todo-list li:nth-child(' + x + ') button.destroy').click();
}

function selectItemX(x) {
    document.querySelector('button.clear-completed').click()
}

function filterCompleted() {
    location.hash = '/Completed';
}

function filterActive() {
    location.hash = '/Active';
}

function filterAll() {
    location.hash = '/';
}

function createTodo(name) {
    document.querySelector('input.new-todo').value = name;
    document.querySelector('input.new-todo').dispatchEvent(new Event('change',{
        'bubbles': true
    }));
}

function amendTodo(pos, amendedValue) {
	document.querySelector('ul.todo-list > li:nth-child(' + pos +') > div > label').dispatchEvent(new Event('dblclick',{'bubbles:': true}));
	document.querySelector('ul.todo-list > li:nth-child(' + pos + ') .edit').value=amendedValue;
	document.querySelector('ul.todo-list > li:nth-child(' + pos + ') .edit').dispatchEvent(new Event('blur'));
}