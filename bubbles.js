// bubbles.js — small transparent bubbles full-screen
const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const bubbles = [];
const NUM = 45;
for(let i=0;i<NUM;i++){
  bubbles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: 2 + Math.random()*10,
    speed: 0.3 + Math.random()*1.2,
    alpha: 0.06 + Math.random()*0.22
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const b of bubbles){
    const g = ctx.createRadialGradient(b.x, b.y, b.r*0.1, b.x, b.y, b.r);
    g.addColorStop(0, `rgba(255,255,255,${b.alpha})`);
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
    ctx.fill();

    b.y -= b.speed;
    if(b.y < -b.r) { b.y = canvas.height + b.r; b.x = Math.random()*canvas.width; }
  }
  requestAnimationFrame(draw);
}
draw();
