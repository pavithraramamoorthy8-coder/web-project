let currentSet = [];
let currentIndex = 0;
let score = 0;
let answered = false;

// DOM elements
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const backBtn = document.getElementById("backBtn");
const backDashboard = document.getElementById("backDashboard");

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");
const scoreText = document.getElementById("scoreText");
const progressText = document.getElementById("progressText");
const quizTitle = document.getElementById("quizTitle");

// Pick a random quiz set
function loadRandomSet() {
  const keys = Object.keys(quizSets);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  currentSet = quizSets[randomKey];
  quizTitle.textContent = `Set: ${randomKey.toUpperCase()}`;
}

// Start Quiz
startBtn.addEventListener("click", () => {
  loadRandomSet();
  currentIndex = 0;
  score = 0;
  startScreen.classList.add("hidden");
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
});

// Show Question
function showQuestion() {
  answered = false;
  const q = currentSet[currentIndex];
  questionText.textContent = q.question;
  optionsBox.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => selectOption(btn, q.answer);
    optionsBox.appendChild(btn);
  });
  progressText.textContent = `Question ${currentIndex + 1} of ${currentSet.length}`;
}

// Handle answer
function selectOption(btn, correctAnswer) {
  if (answered) return;
  answered = true;
  const options = document.querySelectorAll(".option-btn");
  options.forEach(b => {
    b.disabled = true;
    if (b.textContent === correctAnswer) b.classList.add("correct");
  });
  if (btn.textContent === correctAnswer) {
    score++;
  } else {
    btn.classList.add("wrong");
  }
}

// Next Button
nextBtn.addEventListener("click", () => {
  if (currentIndex < currentSet.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    showResult();
  }
});

// Show result
function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  scoreText.textContent = `You scored ${score} / ${currentSet.length}`;
}

// Retry button
retryBtn.addEventListener("click", () => {
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
});

// Back buttons
backBtn.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

backDashboard.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
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
