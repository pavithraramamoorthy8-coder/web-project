const board = document.getElementById("puzzleBoard");
const statusTxt = document.getElementById("status");

const shuffleBtn = document.getElementById("shuffleBtn");
const resetBtn = document.getElementById("resetBtn");

let tiles = [];
let emptyIndex = 8; // empty tile at last position

function createPuzzle() {
  board.innerHTML = "";
  tiles = [];

  for (let i = 0; i < 9; i++) {
    const tile = document.createElement("div");

    if (i === 8) {
      tile.classList.add("empty");
      tiles.push("");
    } else {
      tile.classList.add("tile");
      tile.textContent = i + 1;
      tiles.push(i + 1);
    }

    tile.dataset.index = i;
    tile.addEventListener("click", () => moveTile(i));
    board.appendChild(tile);
  }

  statusTxt.textContent = "";
}

function moveTile(i) {
  if (isAdjacent(i, emptyIndex)) {
    const temp = tiles[i];
    tiles[i] = "";
    tiles[emptyIndex] = temp;
    emptyIndex = i;

    updateBoard();
    checkWin();
  }
}

function isAdjacent(a, b) {
  const rowA = Math.floor(a / 3);
  const colA = a % 3;
  const rowB = Math.floor(b / 3);
  const colB = b % 3;

  return (
    (rowA === rowB && Math.abs(colA - colB) === 1) ||
    (colA === colB && Math.abs(rowA - rowB) === 1)
  );
}

function updateBoard() {
  const children = board.children;
  for (let i = 0; i < 9; i++) {
    const tile = children[i];

    if (tiles[i] === "") {
      tile.className = "empty";
      tile.textContent = "";
    } else {
      tile.className = "tile";
      tile.textContent = tiles[i];
    }
  }
}

function shufflePuzzle() {
  for (let i = 0; i < 200; i++) {
    const moves = [];
    for (let j = 0; j < 9; j++) {
      if (isAdjacent(j, emptyIndex)) moves.push(j);
    }
    const move = moves[Math.floor(Math.random() * moves.length)];
    moveTile(move);
  }

  statusTxt.textContent = "";
}

function checkWin() {
  for (let i = 0; i < 8; i++) {
    if (tiles[i] !== i + 1) return;
  }

  statusTxt.textContent = "🎉 You Won 100 Coins!";

  // OPTIONAL: Add coins to storage
  let coins = Number(localStorage.getItem("coins") || 0);
  coins += 100;
  localStorage.setItem("coins", coins);

  console.log("Total Coins:", coins);
}

shuffleBtn.addEventListener("click", shufflePuzzle);
resetBtn.addEventListener("click", createPuzzle);

createPuzzle();
window.onload = () => {
  const icons = document.querySelectorAll(".bg-icons .icon");

  icons.forEach(icon => {
    icon.style.left = Math.random() * 100 + "%";
    icon.style.top = Math.random() * 100 + "%";
    icon.style.animationDelay = Math.random() * 4 + "s";
    icon.style.fontSize = 25 + Math.random() * 40 + "px";
  });
};
