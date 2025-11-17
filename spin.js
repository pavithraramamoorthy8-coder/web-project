const wheel = document.getElementById("wheel");
const ctx = wheel.getContext("2d");
const spinButton = document.getElementById("spinButton");
const msg = document.getElementById("msg");

const coinCanvas = document.getElementById("coinCanvas");
const coinCtx = coinCanvas.getContext("2d");
coinCanvas.width = window.innerWidth;
coinCanvas.height = window.innerHeight;

let lastSpinTime = localStorage.getItem("lastSpinTime");

const prizes = ["10 Coins", "20 Coins", "50 Coins", "Try Again", "100 Coins", "30 Coins"];
let isSpinning = false;

function drawWheel() {
  const numSlices = prizes.length;
  const sliceAngle = (2 * Math.PI) / numSlices;

  for (let i = 0; i < numSlices; i++) {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, i * sliceAngle, (i + 1) * sliceAngle);
    ctx.fillStyle = i % 2 === 0 ? "#861e5e" : "#fad0c4";
    ctx.fill();
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(i * sliceAngle + sliceAngle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#0d0d0d";
    ctx.font = "bold 18px Poppins";
    ctx.fillText(prizes[i], 170, 10);
    ctx.restore();
  }
}

drawWheel();

function canSpin() {
  if (!lastSpinTime) return true;
  const now = Date.now();
  const diff = now - parseInt(lastSpinTime);
  return diff >= 3600000; // 1 hour
}

function spinWheel() {
  if (isSpinning) return;
  if (!canSpin()) {
    msg.textContent = "You can spin again after 1 hour!";
    return;
  }

  isSpinning = true;
  msg.textContent = "";
  const randomDegree = 360 * 5 + Math.floor(Math.random() * 360);
  const duration = 5000;
  const start = Date.now();

  function animate() {
    const now = Date.now();
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const angle = randomDegree * easeOut(progress);

    ctx.save();
    ctx.clearRect(0, 0, 400, 400);
    ctx.translate(200, 200);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.translate(-200, -200);
    drawWheel();
    ctx.restore();

    if (progress < 1) requestAnimationFrame(animate);
    else {
      const selected = prizes[Math.floor(((360 - (angle % 360)) / 60) % prizes.length)];
      msg.textContent = `🎉 You got ${selected}!`;
      localStorage.setItem("lastSpinTime", Date.now());
      isSpinning = false;
      if (selected.includes("Coins")) dropCoins(20);
    }
  }

  requestAnimationFrame(animate);
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
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
      coinCtx.save();
      coinCtx.clearRect(0, 0, coinCanvas.width, coinCanvas.height);
      coinCtx.translate(x, y);
      coinCtx.rotate(angle);
      coinCtx.beginPath();
      coinCtx.arc(0, 0, size, 0, 2 * Math.PI);
      coinCtx.fillStyle = "gold";
      coinCtx.fill();
      coinCtx.restore();
      requestAnimationFrame(frame);
    }
  }
  frame();
}

spinButton.addEventListener("click", spinWheel);
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
