/* ================================================
   BALAJI MOTORS — script.js
   Language Toggle + QR Code + Nav Highlight
   ================================================ */

// ── LANGUAGE TOGGLE ──────────────────────────────
let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ta' : 'en';
  document.body.classList.toggle('ta', currentLang === 'ta');
  document.getElementById('langBtn').textContent =
    currentLang === 'en' ? 'தமிழ்' : 'English';

  document.querySelectorAll('.tamil').forEach(el => {
    el.style.display = currentLang === 'ta' ? '' : 'none';
  });
  document.querySelectorAll('.english').forEach(el => {
    el.style.display = currentLang === 'ta' ? 'none' : '';
  });

  showToast(currentLang === 'ta' ? '✅ தமிழ்' : '✅ English');
}

// ── ACTIVE NAV ON SCROLL ─────────────────────────
const sections = document.querySelectorAll('section, .hero');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ── TOAST NOTIFICATION ────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── QR CODE GENERATION ────────────────────────────
// IMPORTANT: Replace this with YOUR live Vercel URL after deployment!
const WEBSITE_URL = "https://balaji-motors-kappa.vercel.app/";

window.addEventListener('DOMContentLoaded', () => {
  // QR Code in QR Section
  new QRCode(document.getElementById("qrcode"), {
    text: WEBSITE_URL,
    width: 180,
    height: 180,
    colorDark: "#1c3144",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // QR Code on Visiting Card Back
  new QRCode(document.getElementById("qrcode-card"), {
    text: WEBSITE_URL,
    width: 110,
    height: 110,
    colorDark: "#1c3144",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});