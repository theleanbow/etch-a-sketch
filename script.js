let div = Array.from(Array(4), () => new Array(4));
container = [];
const button = document.querySelector("button");
for (let i = 0; i < 4; i++) {
  container[i] = document.createElement("div");
  container[i].style.display = "flex";
  button.insertAdjacentElement("afterend", container[i]);
  for (let j = 0; j < 4; j++) {
    div[i][j] = document.createElement("div");
    div[i][j].classList.add("square");
    //css in js
    // div[i][j].style.margin = "0px";
    // div[i][j].style.padding = "0px";
    //div[i][j].style.width = "100px";
    //div[i][j].style.height = "100px";
    container[i].appendChild(div[i][j]);
  }
}
squares = document.querySelectorAll(".square");
for (let i = 0; i < 16; i++) {
  squares[i].addEventListener("mouseover", function () {
    squares[i].classList.add("colorTrial");
  });
}
