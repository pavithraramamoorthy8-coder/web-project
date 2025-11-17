// ========= CARD NAVIGATION =========
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const target = card.getAttribute('data-target');
    if (target) {
      // Small animation before navigation
      card.classList.add('clicked');
      setTimeout(() => {
        window.location.href = target;
      }, 400);
    }
  });
});

// ========= DAILY REWARD =========
const dailyBtn = document.getElementById('dailyBtn');
const dailyModal = document.getElementById('dailyModal');
const closeDailyBtn = document.getElementById('closeDailyBtn');
const claimDailyBtn = document.getElementById('claimDailyBtn');
const coinCountEl = document.getElementById('coinCount');
const dailyMsg = document.getElementById('dailyMsg');

let coins = parseInt(localStorage.getItem("coins") || "0");
coinCountEl.textContent = coins;

dailyBtn.addEventListener('click', () => {
  dailyModal.classList.remove('hidden');
});

// ✅ DAILY REWARD button → go to daily.html
document.getElementById('dailyBtn').addEventListener('click', () => {
  window.location.href = 'daily.html';
});

claimDailyBtn.addEventListener('click', () => {
  const lastClaim = localStorage.getItem("lastDailyClaim");
  const today = new Date().toDateString();
  if (lastClaim === today) {
    dailyMsg.textContent = "You already claimed today’s reward!";
  } else {
    coins += 100;
    coinCountEl.textContent = coins;
    localStorage.setItem("coins", coins);
    localStorage.setItem("lastDailyClaim", today);
    dailyMsg.textContent = "Reward claimed! +100 coins added 💰";
  }
});

closeDailyBtn.addEventListener('click', () => {
  dailyModal.classList.add('hidden');
});

// ========= SPIN & WIN NAVIGATION =========
document.getElementById('spinBtn').addEventListener('click', () => {
  window.location.href = 'spin.html';
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
