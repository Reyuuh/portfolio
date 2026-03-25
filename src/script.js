// Dark mode
const toggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Typewriter
const typewriterEl = document.getElementById('typewriter');
const typewriterText = 'Fullstack Developer';
let charIndex = 0;

function type() {
  if (charIndex < typewriterText.length) {
    typewriterEl.textContent += typewriterText[charIndex];
    charIndex++;
    setTimeout(type, 75);
  }
}

setTimeout(type, 600);

// Scroll reveal with stagger for sibling cards
const revealEls = document.querySelectorAll('.reveal');

// Apply stagger delay to cards within the same list
const staggerSelectors = [
  '.projects__list .project-card',
  '.experience__list .experience__card',
  '.tech-stack__categories .tech-stack__card',
];

staggerSelectors.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.12}s`;
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));
