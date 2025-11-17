const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');
let bubbles = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
window.addEventListener('resize', resize);
resize();

function createBubble() {
  const radius = Math.random() * 12 + 6;
  const x = Math.random() * canvas.width;
  const y = canvas.height + radius;
  const speed = Math.random() * 1 + 0.5;
  const hue = Math.floor(Math.random() * 360);
  bubbles.push({x, y, radius, speed, hue});
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < bubbles.length; i++) {
    const b = bubbles[i];
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${b.hue},70%,70%,0.6)`;
    ctx.fill();
    b.y -= b.speed;
    if (b.y + b.radius < 0) bubbles.splice(i, 1);
  }
  requestAnimationFrame(draw);
}
setInterval(createBubble, 150);
draw();

/* sound on Get Started */
const btn = document.getElementById('getStarted');
const sound = document.getElementById('btnSound');
btn.addEventListener('click', () => {
  sound.currentTime = 0;
  sound.play();
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => { btn.style.transform = 'scale(1)'; }, 150);
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
