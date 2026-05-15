// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// スクロールトップ
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => scrollBtn.classList.toggle('show', window.scrollY > 400));
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// フェードイン
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// アクティブナビ
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul li a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});
