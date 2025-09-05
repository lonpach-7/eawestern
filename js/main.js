// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      if(nav.classList.contains('open')) nav.style.display = 'flex';
      else nav.style.display = '';
    });
  }

  // Smooth scroll on anchor links within page
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if(href.length>1 && document.querySelector(href)){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});


