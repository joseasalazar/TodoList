document.getElementById("submitButton").addEventListener("click", function(e){ 
	e.preventDefault();
	let newTodo = document.getElementById("newText");
	let dynamicList = document.getElementById("todoList");
	let dynamicHTML = dynamicList.innerHTML;
    dynamicList.innerHTML = dynamicHTML + '<li><input type="checkbox" name="newTodo"> ' + newTodo.value + '</li>'
	newTodo.value = '';
});

document.getElementById("markButton").addEventListener("click", function(e){ 
	e.preventDefault();
	var todos = document.getElementsByName("newTodo");
	for(var i = 0; i < todos.length; i++){
        todos[i].checked = true;
    }
});

document.getElementById("clearButton").addEventListener("click", function(e){ 
	e.preventDefault();
	var todos = document.getElementsByName("newTodo");
	for(var i = 0; i < todos.length; i++){
        todos[i].checked = false;
    }
});

document.getElementById("deleteButton").addEventListener("click", function(e){ 
	e.preventDefault();
	let dynamicList = document.getElementById("todoList");
	dynamicList.innerHTML = '';
});