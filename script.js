let sq = 4;
const length = 800;
let div = Array.from(Array(sq), () => new Array(sq));
container = [];

//slider input
let range = document.querySelector(".range");
range.addEventListener("click", () => {
  sq = parseInt(range.value);
  div = Array.from(Array(sq), () => new Array(sq));
  clearGrid();
  createGrid(mainContainer);
});
let mainContainer = document.createElement("div");
range.insertAdjacentElement("afterend", mainContainer);

//take the value of number of rows/columns of the grid from user
//changed with input slider
// const button = document.querySelector("button");
// function numberOfSquares() {
//   button.addEventListener("click", function () {
//     do {
//       sq = parseInt(prompt("Enter the number of squares per row "));
//     } while (sq > 100);
//     if (!Number.isNaN(sq)) button.innerText = sq;
//     div = Array.from(Array(sq), () => new Array(sq));
//     clearGrid();
//     createGrid(mainContainer);
//   });
// }
//remove the existing grid layout before making new one
function clearGrid() {
  mainContainer.innerHTML = "";
}
//creates the grid layout
function createGrid(range) {
  for (let i = 0; i < sq; i++) {
    container[i] = document.createElement("div");
    container[i].style.display = "flex";
    mainContainer.appendChild(container[i]);
    for (let j = 0; j < sq; j++) {
      div[i][j] = document.createElement("div");
      div[i][j].classList.add("square");
      //css in js
      div[i][j].style.margin = "0px";
      div[i][j].style.padding = "0px";
      div[i][j].style.width = `${length / sq}px`;
      div[i][j].style.height = `${length / sq}px`;
      div[i][j].style.border = "1px solid black";
      // div[i][j].style[border - sizing] = "border-box";
      container[i].appendChild(div[i][j]);
    }
  }
  addTrialColor();
}

//add the trial color when hovering on the grid
function addTrialColor() {
  squares = document.querySelectorAll(".square");
  for (let i = 0; i < sq * sq; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.add("colorTrial");
    });
  }
}
createGrid(range);
// numberOfSquares();
