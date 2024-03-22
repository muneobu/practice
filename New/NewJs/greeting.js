"use strict";

const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logoutBtn");
const USERNAME_KEY = "username";
const HIDDEN = "hidden";

function hide(inja) {
  inja.classList.add(HIDDEN);
}
function show(inja) {
  inja.classList.remove(HIDDEN);
}

function loggedIn() {
  const username = localStorage.getItem(USERNAME_KEY);
  hide(loginForm);
  show(logoutBtn);
  show(greeting);
  greeting.innerHTML = `Hello ${username}!`;
}

function loggedOut() {
  localStorage.removeItem(USERNAME_KEY);
  hide(greeting);
  hide(logoutBtn);
  show(loginForm);
  loginInput.value = null;
}

function loginCheck() {
  const username = localStorage.getItem(USERNAME_KEY);
  if (username) {
    loggedIn();
  } else {
    loggedOut();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loggedIn();
}

loginForm.addEventListener("submit", handleSubmit);
logoutBtn.addEventListener("click", loggedOut);
loginCheck();
