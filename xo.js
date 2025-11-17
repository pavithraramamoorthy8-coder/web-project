let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameOver = false;
let mode = "pvp";

function setMode(m) {
    mode = m;
    resetBoard();
}

function makeMove(i) {
    if (board[i] !== "" || gameOver) return;

    board[i] = currentPlayer;
    updateBoard();

    if (checkWin(currentPlayer)) {
        alert(currentPlayer + " wins!");
        updateScore(currentPlayer);
        gameOver = true;
        return;
    }

    if (board.every(cell => cell !== "")) {
        alert("Draw!");
        updateScore("draw");
        gameOver = true;
        return;
    }

    if (mode === "pvp") {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    } 
    else if (mode === "ai-easy") {
        currentPlayer = "O";
        setTimeout(aiEasy, 500);
    } 
    else if (mode === "ai-hard") {
        currentPlayer = "O";
        setTimeout(aiHard, 500);
    }
}

function aiEasy() {
    let empty = board.map((v,i)=>v===""?i:null).filter(v=>v!==null);
    let move = empty[Math.floor(Math.random() * empty.length)];
    board[move] = "O";
    finishAIMove();
}

function aiHard() {
    let move = minimax(board, "O").index;
    board[move] = "O";
    finishAIMove();
}

function finishAIMove() {
    updateBoard();
    if (checkWin("O")) {
        alert("AI Wins!");
        updateScore("O");
        gameOver = true;
        return;
    }
    if (board.every(c => c !== "")) {
        alert("Draw!");
        updateScore("draw");
        gameOver = true;
        return;
    }
    currentPlayer = "X";
}

function updateBoard() {
    document.querySelectorAll(".cell").forEach((c,i)=>{
        c.textContent = board[i];
    });
}

function checkWin(player) {
    const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    return wins.some(w => w.every(i => board[i] === player));
}

function updateScore(player) {
    if (player === "X") 
        scoreX.textContent = parseInt(scoreX.textContent) + 1;
    else if (player === "O") 
        scoreO.textContent = parseInt(scoreO.textContent) + 1;
    else 
        draws.textContent = parseInt(draws.textContent) + 1;
}

function resetBoard() {
    board = ["","","","","","","","",""];
    gameOver = false;
    currentPlayer = "X";
    updateBoard();
}
/* ==== FLOATING ICON BACKGROUND ==== */

const dashIcons = [
  "ri-gamepad-line", "ri-trophy-line", "ri-star-smile-line",
  "ri-coin-line", "ri-wallet-3-line", "ri-bar-chart-line",
  "ri-heart-3-line", "ri-flashlight-line", "ri-information-line",
  "ri-question-answer-line"
];

const dashContainer = document.getElementById("iconContainer");

for (let i = 0; i < 20; i++) {  // 20 floating icons
  const icon = document.createElement("i");
  icon.className = dashIcons[Math.floor(Math.random() * dashIcons.length)];

  icon.style.left = Math.random() * 100 + "%";
  icon.style.top = Math.random() * 100 + "%";
  icon.style.animationDelay = Math.random() * 3 + "s";
  icon.style.fontSize = (28 + Math.random() * 35) + "px";

  dashContainer.appendChild(icon);
}
