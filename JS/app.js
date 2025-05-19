

// DOM elements



const cell = document.querySelectorAll(".cell");
console.log(cell);
const btn = document.querySelector(".btn");
console.log(btn);


// add event listeners to each cell 
cell.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.classList.toggle("active");
    console.log(cell.innerText);
  });
});

// function to make only one cell to be active at a time randomly with colors change if correct cell is clicked
function randomCell() {
  const randomIndex = Math.floor(Math.random() * cell.length);
  cell.forEach((cell) => {
    cell.classList.remove("active");
    cell.style.backgroundColor = "white";
  });
  cell[randomIndex].classList.add("active");
  cell[randomIndex].style.backgroundColor = "green";
}
