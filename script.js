// ---------- Preloader ----------
(function () {
  const pre = document.getElementById("preloader");
  const skip = document.getElementById("skipPre");

  const hide = () => {
    if (!pre) return;
    pre.style.opacity = "0";
    setTimeout(() => {
      pre.style.display = "none";
    }, 350);
  };

  window.addEventListener("load", () => setTimeout(hide, 500));
  setTimeout(hide, 2800);
  if (skip) skip.addEventListener("click", hide);
})();


// ---------- Smooth nav scroll ----------
document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ---------- Countdown ----------
const countdownEl = document.getElementById("countdown");
const weddingDate = new Date("2026-04-19T19:00:00+05:30");

function updateCountdown() {
  if (!countdownEl) return;
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "The celebration has begun!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${String(hours).padStart(2, "0")}h ${String(mins).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ---------- WhatsApp RSVP ----------
const whatsappTargets = [
  document.getElementById("whatsappBtn"),
  document.getElementById("whatsappBtnSecondary"),
].filter(Boolean);

if (whatsappTargets.length) {
  const whatsappNumber = "919993688397";
  const message = `Hi! I received your wedding invitation 💛\nName:\nAttending: Yes/No\nNo. of Guests:\nBlessings:`;
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  whatsappTargets.forEach((btn) => {
    btn.href = waLink;
  });
}

// ---------- Music ----------
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let musicOn = false;

if (musicBtn && bgMusic) {
  const unlockAudio = async () => {
    try {
      bgMusic.volume = 0.55;
      await bgMusic.play();
      bgMusic.pause();
      bgMusic.currentTime = 0;
    } catch (_e) {
      // Browser policies may block autoplay until an explicit click.
    }
    window.removeEventListener("pointerdown", unlockAudio);
  };

  window.addEventListener("pointerdown", unlockAudio);

  musicBtn.addEventListener("click", async () => {
    try {
      if (!musicOn) {
        bgMusic.volume = 0.55;
        await bgMusic.play();
        musicOn = true;
        musicBtn.textContent = "❚❚";
        musicBtn.title = "Pause music";
      } else {
        bgMusic.pause();
        musicOn = false;
        musicBtn.textContent = "♫";
        musicBtn.title = "Play music";
      }
    } catch (e) {
      console.error("Audio play failed:", e);
    }
  });
}

// ---------- Gallery Lightbox ----------
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");
const galleryImgs = document.querySelectorAll(".gallery img");

if (lightbox && lbImg && lbClose && galleryImgs.length) {
  galleryImgs.forEach((img) => {
    img.addEventListener("click", () => {
      lbImg.src = img.src;
      lightbox.classList.add("show");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  const closeLB = () => {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    lbImg.src = "";
  };

  lbClose.addEventListener("click", closeLB);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLB();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLB();
  });
}

// ---------- Lantern generator ----------
function spawnLanterns(containerId, count, sizeMin, sizeMax, speedMin, speedMax, opacityMin, opacityMax) {
  const layer = document.getElementById(containerId);
  if (!layer) return;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "lantern";

    const size = sizeMin + Math.random() * (sizeMax - sizeMin);
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const dur = speedMin + Math.random() * (speedMax - speedMin);
    const op = opacityMin + Math.random() * (opacityMax - opacityMin);
    const drift = Math.random() * 40 - 20;

    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${left}%`;
    el.style.opacity = String(op);
    el.style.animationDelay = `${delay}s`;
    el.style.animationDuration = `${dur}s`;
    el.style.setProperty("--drift", `${drift}px`);

    layer.appendChild(el);
  }
}

const isMobile = window.matchMedia("(max-width: 640px)").matches;
spawnLanterns("lanternLayer", isMobile ? 10 : 22, 24, 64, 16, 28, 0.12, 0.45);

// ---------- Sparkles ----------
const canvas = document.getElementById("sparkles");
if (canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    // Bail out gracefully if canvas context is unavailable.
    return;
  }
  let W;
  let H;

  function resize() {
    W = canvas.width = canvas.offsetWidth * devicePixelRatio;
    H = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }

  window.addEventListener("resize", resize);
  resize();

  const sparks = [];
  const sparkCount = isMobile ? 70 : 130;

  function addSpark() {
    sparks.push({
      x: Math.random() * W,
      y: Math.random() * H * 0.72,
      r: (Math.random() * 1.6 + 0.4) * devicePixelRatio,
      a: Math.random() * 0.5 + 0.2,
      vy: (Math.random() * -0.18 - 0.04) * devicePixelRatio,
      life: Math.random() * 240 + 120,
    });
  }

  for (let i = 0; i < sparkCount; i++) addSpark();

  function tick() {
    ctx.clearRect(0, 0, W, H);

    for (const s of sparks) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(246, 221, 172, ${s.a})`;
      ctx.fill();

      s.y += s.vy;
      s.life -= 1;
      s.a *= 0.998;

      if (s.life <= 0 || s.y < -24) {
        s.x = Math.random() * W;
        s.y = H * (0.58 + Math.random() * 0.2);
        s.a = Math.random() * 0.5 + 0.2;
        s.life = Math.random() * 240 + 120;
      }
    }

    requestAnimationFrame(tick);
  }

  tick();
}
