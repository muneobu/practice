"use strict";

const clock = document.querySelector("#clock");

function time() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${Seconds}`;
}
time();
setInterval(time, 1000);
