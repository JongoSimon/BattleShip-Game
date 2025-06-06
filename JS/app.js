// DOM elements
const btn = document.getElementById("reset-button");
const cells = document.querySelectorAll(".cell");
const objective = document.getElementById("objective");

let secretSpot;

// Pick a random cell for battleship
function pickSecretSpot() {
  secretSpot = Math.floor(Math.random() * cells.length);
}

// Reset the game
function resetGame() {
  cells.forEach((cell, index) => {
    if (cell.classList.contains("hit")) {
      cell.classList.remove("hit");
    }
    if (cell.classList.contains("miss")) {
      cell.classList.remove("miss");
    }
    cell.innerText = `BS${index + 1}`;
    cell.style.pointerEvents = "auto";
  });
  pickSecretSpot();
  objective.textContent = "Find the Battleship";
}

// Handle cell click
function handleCellClick(e) {
  const index = Array.from(cells).indexOf(e.target);
  if (index === secretSpot) {
    e.target.classList.add("hit");
    e.target.innerText = "Hit!";
    objective.textContent = "You hit the battleship!";
    // Optionally disable all cells after hit
    cells.forEach(cell => cell.style.pointerEvents = "none");
  } else {
    e.target.classList.add("miss");
    e.target.innerText = "Miss!";
    objective.textContent = "You missed the battleship!";
    e.target.style.pointerEvents = "none";
  }
}

// Add event listeners to each cell
cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

// Reset button on click
btn.addEventListener("click", resetGame);

// Initialize game
resetGame();

