// ==========================
// PRELOADER
// ==========================
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  setTimeout(() => pre.style.opacity = "0", 500);
  setTimeout(() => pre.style.display = "none", 850);
});

// ==========================
// MOBILE MENU
// ==========================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
});

document.querySelectorAll(".m-link").forEach(link => {
  link.addEventListener("click", () => mobileMenu.style.display = "none");
});

// ==========================
// SCROLL TO TOP
// ==========================
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 450) topBtn.classList.add("show");
  else topBtn.classList.remove("show");
});
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ==========================
// REVEAL ANIMATION (VISIBLE)
// ==========================
const reveals = document.querySelectorAll(".reveal");

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      io.unobserve(entry.target);
    }
  });
},{threshold: 0.12});

reveals.forEach(el => io.observe(el));

// ==========================
// COUNTDOWN
// ==========================
const weddingDate = new Date("2026-04-19T19:00:00").getTime();
const dEl = document.getElementById("d");
const hEl = document.getElementById("h");
const mEl = document.getElementById("m");
const sEl = document.getElementById("s");

function updateCountdown(){
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

// ==========================
// WHATSAPP RSVP
// ==========================
const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappNumber = "919993688397";

const message = `Hi! I got your wedding invitation 💛
Name:
Attending: Yes/No
No. of Guests:
Blessings:`;

whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

// ==========================
// MUSIC BUTTON
// ==========================
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let musicOn = false;

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

// ==========================
// HERO SPARKLES / FIREWORKS (SUBTLE)
// ==========================
const canvas = document.getElementById("sparkles");
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

  // soft glow dots
  for(const s of sparks){
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(201,162,76,${s.a})`;
