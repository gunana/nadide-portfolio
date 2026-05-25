/* ─────────────────────────────────────────
   NADIDE BAYKAN — Portfolio v2 · script.js
───────────────────────────────────────── */
(function () {
  'use strict';

  // ── NAV SCROLL ──
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── MOBILE MENU ──
  const burger = document.getElementById('burger');
  const overlay = document.getElementById('overlay');
  const mobLinks = document.querySelectorAll('.mob-link');

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
  burger.addEventListener('click', toggleMenu);
  mobLinks.forEach(l => l.addEventListener('click', closeMenu));

  // ── REVEAL ON SCROLL ──
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const sibs = [...el.parentElement.querySelectorAll('.reveal')];
        const idx = Math.max(0, sibs.indexOf(el));
        setTimeout(() => el.classList.add('visible'), idx * 90);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => io.observe(el));

  // ── GALLERY FILTER ──
  const filters = document.querySelectorAll('.filter');
  const items = [...document.querySelectorAll('.gallery-item')];

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.classList.toggle('hide', !show);
      });
      rebuildVisibleList();
    });
  });

  // ── LIGHTBOX ──
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  let visibleItems = items.slice();
  let currentIndex = 0;

  function rebuildVisibleList() {
    visibleItems = items.filter(it => !it.classList.contains('hide'));
  }

  function openLightbox(item) {
    rebuildVisibleList();
    currentIndex = visibleItems.indexOf(item);
    showCurrent();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function showCurrent() {
    const item = visibleItems[currentIndex];
    if (!item) return;
    const img = item.querySelector('img');
    const cat = item.querySelector('.cap-cat')?.textContent || '';
    const title = item.querySelector('.cap-title')?.textContent || '';
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = (cat ? cat + ' — ' : '') + title;
    lbPrev.style.display = visibleItems.length > 1 ? 'grid' : 'none';
    lbNext.style.display = visibleItems.length > 1 ? 'grid' : 'none';
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function next() { currentIndex = (currentIndex + 1) % visibleItems.length; showCurrent(); }
  function prev() { currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length; showCurrent(); }

  items.forEach(item => item.addEventListener('click', () => openLightbox(item)));
  lbClose.addEventListener('click', closeLightbox);
  lbNext.addEventListener('click', next);
  lbPrev.addEventListener('click', prev);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  // touch swipe on lightbox
  let touchX = null;
  lightbox.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    touchX = null;
  }, { passive: true });

})();
