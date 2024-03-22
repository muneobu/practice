"use strict";

const img = ["0.jpg", "1.jpg", "2.jpg"];
const selectImg = String(img[Math.floor(Math.random() * img.length)]);

function createImg() {
  const bgImg = document.createElement("img");
  bgImg.src = `../img/${selectImg}`;
  document.body.appendChild(bgImg);
}
createImg();
