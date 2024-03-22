"use strict";

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todoArray = [];
const TODO_KEY = "todo";

function SaveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
}

function delTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  todoArray = todoArray.filter((t) => {
    console.log(t.id);
    return t.id !== parseInt(li.id);
  });
  console.log(li);
  SaveTodos();
}

function paintTodo(todo) {
  const todoLi = document.createElement("li");
  todoLi.id = todo.id;
  const todoSpan = document.createElement("span");
  todoLi.appendChild(todoSpan);
  todoSpan.innerHTML = todo.text;
  todoList.appendChild(todoLi);
  const button = document.createElement("button");
  button.innerHTML = "-";
  todoLi.appendChild(button);
  button.addEventListener("click", delTodo);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const todo = todoInput.value;
  todoInput.value = null;
  const newTodo = {
    text: todo,
    id: Date.now(),
  };

  todoArray.push(newTodo);
  paintTodo(newTodo);
  SaveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todoArray = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
