let sq = 4;
const length = 800;
let div = Array.from(Array(sq), () => new Array(sq));
container = [];
const button = document.querySelector("button");
let mainContainer = document.createElement("div");
button.insertAdjacentElement("afterend", mainContainer);
//take the value of number of rows/columns of the grid from user
function numberOfSquares() {
  button.addEventListener("click", function () {
    sq = parseInt(prompt("Enter the number of squares per row "));
    clearGrid();
    createGrid(mainContainer);
  });
}
//remove the existing grid layout before making new one
function clearGrid() {
  mainContainer.innerHTML = "";
}
//creates the grid layout
function createGrid(button) {
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
      div[i][j].style.border = "2px solid black";
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
createGrid(button);
numberOfSquares();
