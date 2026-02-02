// AOS animation init
AOS.init({
  once: true
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
});

// Close mobile menu when clicked
document.querySelectorAll(".m-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});

// ===================
// COUNTDOWN
// ===================
// Set your wedding date here:
const weddingDate = new Date("2026-02-14T19:00:00").getTime();

const dEl = document.getElementById("d");
const hEl = document.getElementById("h");
const mEl = document.getElementById("m");
const sEl = document.getElementById("s");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    dEl.innerText = "00";
    hEl.innerText = "00";
    mEl.innerText = "00";
    sEl.innerText = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  dEl.innerText = String(days).padStart(2, "0");
  hEl.innerText = String(hours).padStart(2, "0");
  mEl.innerText = String(mins).padStart(2, "0");
  sEl.innerText = String(secs).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===================
// WHATSAPP RSVP LINK
// ===================
const whatsappBtn = document.getElementById("whatsappBtn");

// Put your WhatsApp number here (with country code, no + sign)
// Example: 919999999999
const whatsappNumber = "919999999999";

const message = `Hi! I got your wedding invitation 💛
Name:
Attending: Yes/No
No. of Guests:
Blessings:`;

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
whatsappBtn.href = whatsappLink;
