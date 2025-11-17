document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const sound = document.getElementById("clickSound");
  sound.play();

  const btn = document.getElementById("signupBtn");
  btn.innerText = "Creating Account...";
  btn.style.transform = "scale(1.1)";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});

// --- Bubble animation background ---
const canvas = document.getElementById("bubbleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];
for (let i = 0; i < 40; i++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 8 + 2,
    d: Math.random() * 0.8 + 0.2,
  });
}

function drawBubbles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.beginPath();
  bubbles.forEach(b => {
    ctx.moveTo(b.x, b.y);
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, true);
  });
  ctx.fill();
  moveBubbles();
}

function moveBubbles() {
  bubbles.forEach(b => {
    b.y -= b.d;
    if (b.y < -10) {
      b.y = canvas.height + 10;
      b.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawBubbles, 30);
