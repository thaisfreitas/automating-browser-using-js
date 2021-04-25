# Automating in the Browser Using JS

## Simple Event Sequences
### Click all 
- document.querySelector("#toggle-all").click()

### click one item
- document.querySelector("ul.todo-list li:nth-child(1) input.toggle").click()

### Delete item
- document.querySelector("ul.todo-list li:nth-child(1) button.destroy").click()

### Complete tasks
- document.querySelector("a.selected").click()

### Clear button
- document.querySelector("button.clear-completed").click()

### How to filter:
- document.querySelector("body > section > div > footer > ul")
- document.querySelector("ul.filters > li:nth-child(2) > a")
location.hash = "/completed"

## Complex Event Sequences

### Trigger a new event
- document.querySelector("input.new-todo").value ="hello";
- document.querySelector("input.new-todo").dispatchEvent(new Event('change', {'bubbles':true}));

### simulate an edtion / how to trigger a blur
- document.querySelector("ul.todo-list > li:nth-child(1) > div > label").dispatchEvent(new Event('dblclick',{'bubbles:': true}))

- document.querySelector("ul.todo-list > li:nth-child(1) .edit").value="amended"

- document.querySelector("ul.todo-list > li:nth-child(1) .edit").dispatchEvent(new Event('blur'))
