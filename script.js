// Always hide preloader no matter what
(function forceHidePreloader(){
  const hide = () => {
    const pre = document.getElementById("preloader");
    if(!pre) return;
    pre.style.opacity = "0";
    setTimeout(() => pre.style.display = "none", 400);
  };

  window.addEventListener("load", () => setTimeout(hide, 300));
  setTimeout(hide, 2500); // fallback even if load doesn't fire
})();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn && mobileMenu){
  menuBtn.addEventListener("click", () => {
    mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
  });

  document.querySelectorAll(".m-link").forEach(link => {
    link.addEventListener("click", () => mobileMenu.style.display = "none");
  });
}

// Scroll to top
const topBtn = document.getElementById("topBtn");
if(topBtn){
  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) topBtn.classList.add("show");
    else topBtn.classList.remove("show");
  });
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Reveal animations
const reveals = document.querySelectorAll(".reveal");
if(reveals.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(el => io.observe(el));
}

// Countdown
const weddingDate = new Date("2026-04-19T19:00:00").getTime();
const dEl = document.getElementById("d");
const hEl = document.getElementById("h");
const mEl = document.getElementById("m");
const sEl = document.getElementById("s");

function updateCountdown(){
  if(!dEl || !hEl || !mEl || !sEl) return;
  const diff = weddingDate - Date.now();
  if(diff <= 0){
    dEl.textContent = "00";
    hEl.textContent = "00";
    mEl.textContent = "00";
    sEl.textContent = "00";
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  const hrs  = Math.floor((diff / (1000*60*60)) % 24);
  const mins = Math.floor((diff / (1000*60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  dEl.textContent = String(days).padStart(2,"0");
  hEl.textContent = String(hrs).padStart(2,"0");
  mEl.textContent = String(mins).padStart(2,"0");
  sEl.textContent = String(secs).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// WhatsApp RSVP
const whatsappBtn = document.getElementById("whatsappBtn");
if(whatsappBtn){
  const whatsappNumber = "919993688397";
  const message = `Hi! I got your wedding invitation 💛
Name:
Attending: Yes/No
No. of Guests:
Blessings:`;
  whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Music toggle
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let musicOn = false;

if(musicBtn && bgMusic){
  musicBtn.addEventListener("click", async () => {
    try {
      if (!musicOn) {
        await bgMusic.play();
        musicOn = true;
        musicBtn.textContent = "❚❚";
      } else {
        bgMusic.pause();
        musicOn = false;
        musicBtn.textContent = "♫";
      }
    } catch (e) {
      alert("Browser blocks autoplay. Tap once anywhere on the page, then try again.");
    }
  });
}

// Sparkles
const canvas = document.getElementById("sparkles");
if(canvas){
  const ctx = canvas.getContext("2d");
  let W, H;

  function resize(){
    W = canvas.width = canvas.offsetWidth * devicePixelRatio;
    H = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }
  window.addEventListener("resize", resize);
  resize();

  const sparks = [];
  function addSpark(){
    sparks.push({
      x: Math.random() * W,
      y: Math.random() * H * 0.6,
      r: (Math.random() * 1.6 + 0.6) * devicePixelRatio,
      a: Math.random() * 0.5 + 0.25,
      vy: (Math.random() * -0.15 - 0.05) * devicePixelRatio,
      life: Math.random() * 200 + 120
    });
  }
  for(let i=0;i<90;i++) addSpark();

  function animate(){
    ctx.clearRect(0,0,W,H);
    for(const s of sparks){
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(201,162,76,${s.a})`;
      ctx.fill();

      s.y += s.vy;
      s.life -= 1;
      s.a *= 0.999;

      if(s.life <= 0 || s.y < -20){
        s.x = Math.random() * W;
        s.y = H * (0.55 + Math.random()*0.15);
        s.a = Math.random() * 0.5 + 0.25;
        s.life = Math.random() * 200 + 120;
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}
