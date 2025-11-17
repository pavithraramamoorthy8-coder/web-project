const claimBtn = document.getElementById("claimBtn");
const rewardMsg = document.getElementById("rewardMsg");
const coinCanvas = document.getElementById("coinCanvas");
const ctx = coinCanvas.getContext("2d");
coinCanvas.width = window.innerWidth;
coinCanvas.height = window.innerHeight;

let lastClaimTime = localStorage.getItem("lastClaimTime");

function canClaim() {
  if (!lastClaimTime) return true;
  const diff = Date.now() - parseInt(lastClaimTime);
  return diff >= 86400000; // 24 hours
}

if (!canClaim()) {
  claimBtn.disabled = true;
  claimBtn.textContent = "Come back tomorrow!";
  rewardMsg.textContent = "You've already claimed your reward today.";
}

claimBtn.addEventListener("click", () => {
  if (!canClaim()) return;

  localStorage.setItem("lastClaimTime", Date.now());
  rewardMsg.textContent = "🎉 You earned +100 coins!";
  claimBtn.disabled = true;
  claimBtn.textContent = "Claimed ✔";
  addCoins(100);
  dropCoins(40);
});

function addCoins(amount) {
  const coins = parseInt(localStorage.getItem("coins") || "0");
  localStorage.setItem("coins", coins + amount);
}

// Coin Animation
function dropCoins(count) {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * coinCanvas.width;
    const y = -10;
    const size = Math.random() * 8 + 4;
    const speed = Math.random() * 3 + 2;
    const spin = Math.random() * 0.2;
    animateCoin(x, y, size, speed, spin);
  }
}

function animateCoin(x, y, size, speed, spin) {
  let angle = 0;
  function frame() {
    y += speed;
    angle += spin;
    if (y < coinCanvas.height + size) {
      ctx.save();
      ctx.clearRect(0, 0, coinCanvas.width, coinCanvas.height);
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, 2 * Math.PI);
      ctx.fillStyle = "gold";
      ctx.fill();
      ctx.restore();
      requestAnimationFrame(frame);
    }
  }
  frame();
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
