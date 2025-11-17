/* -------------------------
   FLOATING ICON ANIMATION (SLOW + ONE COLOR)
-------------------------- */

window.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".floating-icons");
  if (!container) return;

  const icons = ["★", "✦", "✧", "❉", "◆", "✪", "✿", "⬤", "●", "○"];
  const totalIcons = 50;

  const iconColor = "#ffffff";  // ⭐ choose single consistent color

  for (let i = 0; i < totalIcons; i++) {
      let icon = document.createElement("div");
      icon.classList.add("f-icon");

      icon.textContent = icons[Math.floor(Math.random() * icons.length)];
      icon.style.left = Math.random() * 100 + "vw";
      icon.style.fontSize = (15 + Math.random() * 40) + "px";
      icon.style.color = iconColor;

      // ⭐ Slower animation (10–18 seconds)
      icon.style.animationDuration = (10 + Math.random() * 8) + "s";

      container.appendChild(icon);
  }

});
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("loginForm");
  const btn = document.getElementById("loginBtn");
  const sound = document.getElementById("clickSound");

  form.addEventListener("submit", (e) => {
    e.preventDefault();   // stop form refresh

    // Enable button animation (NOT disable)
    btn.disabled = true;                     // prevent double-click
    btn.innerText = "Logging in...";
    btn.style.transform = "scale(1.1)";
    btn.style.opacity = "0.8";

    // Play sound ONLY if element exists
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }

    // Redirect after animation
    setTimeout(() => {
      btn.disabled = false;                 // allow future usage
      window.location.href = "dashboard.html";
    }, 1500);
  });

});
