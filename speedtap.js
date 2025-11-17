// speedtap.js - combines glass UI, arcade tap button, confetti, leaderboard, coins
document.addEventListener('DOMContentLoaded', () => {
  // elements
  const durButtons = document.querySelectorAll('.dur-btn');
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');
  const tapBtn = document.getElementById('tapBtn');
  const tapZone = document.getElementById('tapZone');
  const timeLeftEl = document.getElementById('timeLeft');
  const scoreEl = document.getElementById('score');
  const bestEl = document.getElementById('best');
  const coinCountEl = document.getElementById('coinCount');
  const leaderboardEl = document.getElementById('leaderboard');
  const confettiCanvas = document.getElementById('confetti');

  // state
  let duration = 10;
  let running = false;
  let score = 0;
  let timeLeft = duration;
  let timerInterval = null;
  let lastTapTime = 0;

  // coins & leaderboard
  let coins = Number(localStorage.getItem('coins') || 0);
  coinCountEl.textContent = coins;
  let best = Number(localStorage.getItem('speedtap_best') || 0);
  bestEl.textContent = best;
  let leaderboard = JSON.parse(localStorage.getItem('speedtap_board') || '[]');
  renderLeaderboard();

  // confetti canvas
  const ctx = confettiCanvas.getContext ? confettiCanvas.getContext('2d') : null;
  function resize() {
    confettiCanvas.width = confettiCanvas.clientWidth;
    confettiCanvas.height = confettiCanvas.clientHeight;
  }
  resize(); window.addEventListener('resize', resize);

  // randomize background icons
  document.querySelectorAll('.bg-icons .icon').forEach(el=>{
    el.style.left = (Math.random()*100)+'%';
    el.style.top = (Math.random()*100)+'%';
    el.style.fontSize = (12 + Math.random()*36)+'px';
    el.style.animationDelay = (Math.random()*6)+'s';
    el.style.opacity = (0.06 + Math.random()*0.22).toString();
  });

  // duration selection
  durButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      durButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      duration = Number(btn.dataset.sec);
      resetGame();
    });
  });

  // start/reset
  startBtn.addEventListener('click', () => {
    if(!running) startGame();
  });
  resetBtn.addEventListener('click', () => {
    // reset coins only if long press? here resets score & timer
    resetGame();
  });

  // tapping: both central button and entire zone
  function registerTap() {
    if(!running) return;
    score++;
    scoreEl.textContent = score;
    // small pop animation
    tapBtn.animate([{ transform:'scale(1)' }, { transform:'scale(1.06)' }, { transform:'scale(1)' }], { duration: 120, easing: 'ease-out' });

    // speed multiplier idea: if taps are fast, produce small burst
    const now = performance.now();
    if(now - lastTapTime < 120) {
      // mini-particles
      miniBurst();
    }
    lastTapTime = now;
  }

  tapBtn.addEventListener('click', registerTap);
  tapZone.addEventListener('click', (e)=> {
    // ensure taps on background zone also trigger
    if(e.target === tapBtn) return;
    registerTap();
  });

  // keyboard support (space)
  window.addEventListener('keydown', (e) => {
    if(e.code === 'Space') {
      e.preventDefault();
      registerTap();
    }
  });

  // start timer
  function startGame() {
    running = true;
    score = 0;
    timeLeft = duration;
    scoreEl.textContent = score;
    timeLeftEl.textContent = timeLeft.toFixed(1);
    startBtn.textContent = 'Running...';
    startBtn.disabled = true;

    timerInterval = setInterval(() => {
      timeLeft -= 0.1;
      if(timeLeft <= 0) {
        endGame();
      } else {
        timeLeftEl.textContent = timeLeft.toFixed(1);
      }
    }, 100);
  }

  function endGame() {
    running = false;
    clearInterval(timerInterval);
    timeLeft = 0;
    timeLeftEl.textContent = '0.0';
    startBtn.textContent = 'Start';
    startBtn.disabled = false;

    // handle best & coins
    if(score > best) {
      // reward coins and update best
      const reward = 50;
      coins += reward;
      localStorage.setItem('coins', coins);
      coinCountEl.textContent = coins;

      best = score;
      localStorage.setItem('speedtap_best', best);
      bestEl.textContent = best;

      // add to leaderboard
      leaderboard.unshift({score, when: Date.now()});
      leaderboard = leaderboard.slice(0,6);
      localStorage.setItem('speedtap_board', JSON.stringify(leaderboard));
      renderLeaderboard();

      // confetti & message
      burstConfetti();
      flashMessage(`New best! +${reward} coins`);
    } else {
      flashMessage(`You scored ${score}`);
    }
  }

  function resetGame() {
    running = false;
    clearInterval(timerInterval);
    score = 0;
    timeLeft = duration;
    scoreEl.textContent = '0';
    timeLeftEl.textContent = timeLeft.toFixed(1);
    startBtn.textContent = 'Start';
    startBtn.disabled = false;
  }

  // leaderboard render
  function renderLeaderboard(){
    leaderboardEl.innerHTML = '';
    if(leaderboard.length === 0) {
      leaderboardEl.innerHTML = '<li>No scores yet</li>';
      return;
    }
    leaderboard.forEach(entry => {
      const li = document.createElement('li');
      const d = new Date(entry.when);
      li.textContent = `${entry.score} — ${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
      leaderboardEl.appendChild(li);
    });
  }

  // small flash message
  function flashMessage(txt){
    const el = document.createElement('div');
    el.textContent = txt;
    el.style.position = 'fixed';
    el.style.left = '50%';
    el.style.top = '14%';
    el.style.transform = 'translateX(-50%)';
    el.style.padding = '10px 16px';
    el.style.background = 'linear-gradient(90deg,#ffd166,#ff8a00)';
    el.style.color = '#111';
    el.style.borderRadius = '999px';
    el.style.fontWeight = '800';
    el.style.zIndex = 9999;
    document.body.appendChild(el);
    el.animate([{ opacity:1, transform:'translateX(-50%) translateY(0)' }, { opacity:0, transform:'translateX(-50%) translateY(-20px)' }], { duration:2000 }).onfinish = () => el.remove();
  }

  // confetti functions
  function burstConfetti(){
    if(!ctx) return;
    const W = confettiCanvas.width = confettiCanvas.clientWidth;
    const H = confettiCanvas.height = confettiCanvas.clientHeight;
    const pieces = [];
    const colors = ['#FF6B6B','#FFD166','#6BE1FF','#A78BFA','#FF9F43'];
    for(let i=0;i<40;i++){
      pieces.push({
        x: W/2 + (Math.random()-0.5)*(W*0.4),
        y: H/2 + (Math.random()-0.5)*(H*0.4),
        vx: (Math.random()-0.5)*8,
        vy: - (Math.random()*9 + 2),
        rot: Math.random()*360,
        vr: (Math.random()-0.5)*12,
        size: 6 + Math.random()*10,
        color: colors[Math.floor(Math.random()*colors.length)],
        life: 0
      });
    }

    let last = performance.now();
    function frame(t){
      const dt = (t-last)/1000;
      last = t;
      ctx.clearRect(0,0,W,H);
      for(let p of pieces){
        p.life += dt;
        p.vy += 18*dt;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr*dt;
        ctx.save();
        ctx.translate(p.x,p.y);
        ctx.rotate(p.rot*Math.PI/180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        ctx.restore();
      }
      if(pieces[0].life < 1.6) requestAnimationFrame(frame);
      else ctx.clearRect(0,0,W,H);
    }
    requestAnimationFrame(frame);
  }

  // mini burst for fast taps
  function miniBurst(){
    if(!ctx) return;
    const W = confettiCanvas.width = confettiCanvas.clientWidth;
    const H = confettiCanvas.height = confettiCanvas.clientHeight;
    const pieces = [];
    const colors = ['#FF6B6B','#FFD166','#6BE1FF'];
    for(let i=0;i<12;i++){
      pieces.push({
        x: W/2 + (Math.random()-0.5)*40,
        y: H/2 + (Math.random()-0.5)*40,
        vx: (Math.random()-0.5)*8,
        vy: - (Math.random()*6 + 1),
        rot: Math.random()*360,
        vr: (Math.random()-0.5)*8,
        size: 4 + Math.random()*6,
        color: colors[Math.floor(Math.random()*colors.length)],
        life: 0
      });
    }
    let last = performance.now();
    function frame(t){
      const dt = (t-last)/1000;
      last = t;
      ctx.clearRect(0,0,W,H);
      for(let p of pieces){
        p.life += dt;
        p.vy += 18*dt;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr*dt;
        ctx.save();
        ctx.translate(p.x,p.y);
        ctx.rotate(p.rot*Math.PI/180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        ctx.restore();
      }
      if(pieces[0].life < 0.65) requestAnimationFrame(frame);
      else ctx.clearRect(0,0,W,H);
    }
    requestAnimationFrame(frame);
  }

  // expose reset leaderboard for debug (not UI)
  window._speedtap = {
    resetLeaderboard: ()=> { localStorage.removeItem('speedtap_board'); leaderboard = []; renderLeaderboard(); },
    resetCoins: ()=> { localStorage.removeItem('coins'); coins = 0; coinCountEl.textContent = coins; }
  };

  // initial values
  resetGame();
});
