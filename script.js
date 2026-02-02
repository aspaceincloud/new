AOS.init({ once: true });

// mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
});

document.querySelectorAll(".m-link").forEach(link => {
  link.addEventListener("click", () => mobileMenu.style.display = "none");
});

// countdown to wedding
const weddingDate = new Date("2026-04-19T19:00:00").getTime();

const dEl = document.getElementById("d");
const hEl = document.getElementById("h");
const mEl = document.getElementById("m");
const sEl = document.getElementById("s");

function updateCountdown(){
  const now = Date.now();
  const diff = weddingDate - now;

  if(diff <= 0){
    dEl.textContent = "00";
    hEl.textContent = "00";
    mEl.textContent = "00";
    sEl.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  dEl.textContent = String(days).padStart(2,"0");
  hEl.textContent = String(hours).padStart(2,"0");
  mEl.textContent = String(mins).padStart(2,"0");
  sEl.textContent = String(secs).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// WhatsApp RSVP
const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappNumber = "919993688397";

const message = `Hi! I got your wedding invitation 💛
Name:
Attending: Yes/No
No. of Guests:
Blessings:`;

whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
