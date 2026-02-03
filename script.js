// ---------- Preloader ----------
(function(){
  const pre = document.getElementById("preloader");
  const skip = document.getElementById("skipPre");
  const hide = () => {
    if(!pre) return;
    pre.style.opacity = "0";
    setTimeout(() => pre.style.display = "none", 350);
  };

  window.addEventListener("load", () => setTimeout(hide, 450));
  setTimeout(hide, 2600); // fallback
  if(skip) skip.addEventListener("click", hide);
})();

// ---------- Mobile menu ----------
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if(menuBtn && mobileMenu){
  menuBtn.addEventListener("click", () => {
    mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
  });
  document.querySelectorAll(".m").forEach(l => l.addEventListener("click", () => mobileMenu.style.display="none"));
}

// ---------- Scroll to top ----------
const topBtn = document.getElementById("topBtn");
if(topBtn){
  window.addEventListener("scroll", () => {
    if(window.scrollY > 450) topBtn.classList.add("show");
    else topBtn.classList.remove("show");
  });
  topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

// ---------- Reveal animations ----------
const reveals = document.querySelectorAll(".reveal");
if(reveals.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.12});
  reveals.forEach(el => io.observe(el));
}

// ---------- Countdown ----------
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

// ---------- WhatsApp RSVP ----------
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

// ---------- Music ----------
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let musicOn = false;

if(musicBtn && bgMusic){
  musicBtn.addEventListener("click", async () => {
    try{
      if(!musicOn){
        await bgMusic.play();
        musicOn = true;
        musicBtn.textContent = "❚❚";
      }else{
        bgMusic.pause();
        musicOn = false;
        musicBtn.textContent = "♫";
      }
    }catch(e){
      alert("Browser blocked autoplay. Tap once anywhere, then try again.");
    }
  });
}

// ---------- Gallery Lightbox ----------
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");
const galleryImgs = document.querySelectorAll(".gallery img");

if(lightbox && lbImg && lbClose && galleryImgs.length){
  galleryImgs.forEach(img => {
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
    if(e.target === lightbox) closeLB();
  });
  window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeLB();
  });
}

// ---------- Lantern generator (image based) ----------
function spawnLanterns(containerId, count, sizeMin, sizeMax, speedMin, speedMax, opacityMin, opacityMax){
  const layer = document.getElementById(containerId);
  if(!layer) return;

  for(let i=0;i<count;i++){
    const el = document.createElement("div");
    el.className = "lantern";
    const size = sizeMin + Math.random()*(sizeMax-sizeMin);
    const left = Math.random()*100;
    const delay = Math.random()*8;
    const dur = speedMin + Math.random()*(speedMax-speedMin);
    const op = opacityMin + Math.random()*(opacityMax-opacityMin);
    const drift = (Math.random()*40 - 20);

    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${left}%`;
    el.style.opacity = op;
    el.style.animationDelay = `${delay}s`;
    el.style.animationDuration = `${dur}s`;
    el.style.setProperty("--drift", `${drift}px`);

    layer.appendChild(el);
  }
}

spawnLanterns("lanternLayer", 18, 26, 70, 14, 26, 0.18, 0.55);
spawnLanterns("lanternLayer2", 12, 22, 60, 16, 30, 0.12, 0.40);

// ---------- Sparkles / Fireworks ----------
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
      x: Math.random()*W,
      y: Math.random()*H*0.6,
      r: (Math.random()*1.8 + 0.4)*devicePixelRatio,
      a: Math.random()*0.5 + 0.2,
      vy: (Math.random()*-0.18 - 0.03)*devicePixelRatio,
      life: Math.random()*240 + 120
    });
  }
  for(let i=0;i<150;i++) addSpark();

  function tick(){
    ctx.clearRect(0,0,W,H);
    for(const s of sparks){
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(201,162,76,${s.a})`;
      ctx.fill();

      s.y += s.vy;
      s.life -= 1;
      s.a *= 0.9985;

      if(s.life<=0 || s.y<-30){
        s.x = Math.random()*W;
        s.y = H*(0.55 + Math.random()*0.18);
        s.a = Math.random()*0.5 + 0.2;
        s.life = Math.random()*240 + 120;
      }
    }
    requestAnimationFrame(tick);
  }
  tick();
}
