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
    cell.classList.remove("hit", "miss");
    cell.innerText = `BS${index + 1}`;
    cell.style.pointerEvents = "auto";
  });
  pickSecretSpot();
  objective.textContent = "Find the Battleship";
}

// Handle when a player clicks on a cell
function handleCellClick(clickEvent) {
  // Get which cell was clicked (as a number)
  const clickedCell = clickEvent.target;
  const allCellsArray = Array.from(cells);
  const clickedCellNumber = allCellsArray.indexOf(clickedCell);

  // Check if the clicked cell has the battleship
  if (clickedCellNumber === secretSpot) {
    // CORRECT GUESS (HIT)
    clickedCell.classList.add("hit");      // Make cell green
    clickedCell.textContent = "Hit!";     // Show "Hit!" text
    objective.textContent = "You sunk the battleship! 🎉";
    
    // Disable all cells (game over)
    cells.forEach(cell => {
      cell.style.pointerEvents = "none";
    });
  } else {
    // WRONG GUESS (MISS)
    clickedCell.classList.add("miss");    // Make cell red
    clickedCell.textContent = "Miss!";    // Show "Miss!" text
    objective.textContent = "Keep searching!";
    
    // Disable just this cell (can't click it again)
    clickedCell.style.pointerEvents = "none";
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

