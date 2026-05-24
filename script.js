/* ─────────────────────────────────────────
   NADIDE BAYKAN — Portfolio · script.js
───────────────────────────────────────── */

(function () {
  'use strict';

  // ── NAV SCROLL ─────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── MOBILE NAV ─────────────────────────
  const burger  = document.getElementById('burger');
  const overlay = document.getElementById('overlay');
  const mobLinks = document.querySelectorAll('.mob-link');

  burger.addEventListener('click', toggleMenu);
  mobLinks.forEach(l => l.addEventListener('click', closeMenu));

  function toggleMenu() {
    const open = burger.classList.toggle('open');
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  function closeMenu() {
    burger.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── REVEAL ON SCROLL ───────────────────
  const reveals = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('visible'), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Stagger siblings
  reveals.forEach(el => {
    const siblings = [...el.parentElement.querySelectorAll('.reveal')];
    const idx = siblings.indexOf(el);
    el.dataset.delay = idx * 100;
    io.observe(el);
  });

  // ── PARALLAX HERO BG TEXT ──────────────
  const bgText = document.querySelector('.hero-bg-text');
  if (bgText) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      bgText.style.transform = `translateY(calc(-50% + ${y * 0.12}px))`;
    }, { passive: true });
  }

  // ── SMOOTH ACTIVE NAV ──────────────────
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const sectionIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAnchors.forEach(a => {
          const match = a.getAttribute('href') === '#' + e.target.id ||
                        a.getAttribute('href') === '#' + e.target.id.replace('ç', '%C3%A7');
          a.style.opacity = match ? '1' : '';
          a.style.color   = match ? 'var(--terra)' : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionIO.observe(s));

  // ── CONTACT BIG TEXT PARALLAX ──────────
  const contactBig = document.querySelector('.contact-big-text');
  if (contactBig) {
    window.addEventListener('scroll', () => {
      const rect = contactBig.parentElement.getBoundingClientRect();
      const rel  = -rect.top * 0.08;
      contactBig.style.transform = `translateX(-50%) translateY(${rel}px)`;
    }, { passive: true });
  }

})();
