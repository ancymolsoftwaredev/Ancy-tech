// ---------------------------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------------------------
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// ---------------------------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------------------------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ---------------------------------------------------------------------------
// Hero network / circuit animation
// ---------------------------------------------------------------------------
const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let W, H, nodes;

function resize() {
  const hero = document.getElementById('top');
  W = canvas.width = hero.offsetWidth;
  H = canvas.height = hero.offsetHeight;
  initNodes();
}

function initNodes() {
  const count = Math.max(28, Math.floor((W * H) / 42000));
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    r: Math.random() * 1.6 + 0.6,
  }));
}

const LINK_DIST = 150;
const BLUE = '53, 183, 255';
const VIOLET = '138, 107, 255';

function step() {
  ctx.clearRect(0, 0, W, H);

  // links
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < LINK_DIST) {
        const alpha = (1 - dist / LINK_DIST) * 0.35;
        ctx.strokeStyle = `rgba(${BLUE}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  // nodes
  nodes.forEach((n, idx) => {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;

    const color = idx % 5 === 0 ? VIOLET : BLUE;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color}, 0.85)`;
    ctx.fill();
  });

  if (!prefersReducedMotion) {
    requestAnimationFrame(step);
  }
}

resize();
window.addEventListener('resize', () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(resize, 150);
});
step();
if (prefersReducedMotion) {
  // draw a single static frame instead of animating
  step();
}
