// ======= coinSystem.js =======
// Shared coin system for all pages using localStorage

function getCoins() {
  return parseInt(localStorage.getItem("coins")) || 0;
}

function addCoins(amount) {
  let coins = getCoins() + amount;
  localStorage.setItem("coins", coins);
  updateCoinDisplay();

  // Animate coin addition
  showCoinAnimation(amount);
}

function updateCoinDisplay() {
  const coinEl = document.getElementById("coinCount");
  if (coinEl) coinEl.textContent = getCoins();
}

// Coin reward animation
function showCoinAnimation(amount) {
  const anim = document.createElement("div");
  anim.className = "coin-animation";
  anim.textContent = `+${amount}`;
  document.body.appendChild(anim);
  setTimeout(() => anim.remove(), 1500);
}

// Load display on page load
window.addEventListener("DOMContentLoaded", updateCoinDisplay);
