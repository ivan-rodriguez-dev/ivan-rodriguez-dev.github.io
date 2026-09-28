// Menú móvil
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Resalta la sección activa en el menú
const navAnchors = [...links.querySelectorAll('a')];
const sections = navAnchors
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = '#' + entry.target.id;
      navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => observer.observe(s));

// Mensaje prellenado de WhatsApp
const wa = document.getElementById('waBtn');
const msg = 'Hola Iván, vi tu portafolio y quiero información sobre una página web para mi negocio.';
wa.href = 'https://wa.me/573127614717?text=' + encodeURIComponent(msg);

// Año actual
document.getElementById('year').textContent = new Date().getFullYear();
