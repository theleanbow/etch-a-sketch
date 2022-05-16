let sq = 4;
const length = 800;
let div = Array.from(Array(sq), () => new Array(sq));
container = [];
const button = document.querySelector("button");

button.addEventListener("click", function () {
  sq = prompt("Enter the number of squares per row ");
});

for (let i = 0; i < sq; i++) {
  container[i] = document.createElement("div");
  container[i].style.display = "flex";
  button.insertAdjacentElement("afterend", container[i]);
  for (let j = 0; j < sq; j++) {
    div[i][j] = document.createElement("div");
    div[i][j].classList.add("square");
    //css in js
    div[i][j].style.margin = "0px";
    div[i][j].style.padding = "0px";
    div[i][j].style.width = `${length / sq}px`;
    div[i][j].style.height = `${length / sq}px`;
    div[i][j].style.border = "2px solid black";
    // div[i][j].style[border - sizing] = "border-box";
    container[i].appendChild(div[i][j]);
  }
}
squares = document.querySelectorAll(".square");
for (let i = 0; i < sq * sq; i++) {
  squares[i].addEventListener("mouseover", function () {
    squares[i].classList.add("colorTrial");
  });
}
