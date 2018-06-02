// JavaScript Document

var input = document.getElementById("box");

var lista = document.getElementById("lista");

var buttom = document.getElementById("add");

var tareas = []; // new Array

function addTarea(tarea){
	tareas.push(tarea)
	renderList();
}

function renderList(){
	lista.innerHTML = '';

	tareas.forEach(function(item){
			
			var li = document.createElement('li');
			li.innerHTML = item;
			lista.appendChild(li);
			
	});
}


buttom.addEventListener('click',function(){
	addTarea(input.value);
});



