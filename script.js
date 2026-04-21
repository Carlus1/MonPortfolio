// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ===== Mobile menu toggle =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}

// Close mobile menu on link click
if (navLinks && navToggle) {
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll(
  '.app-card, .pricing-card, .faq-item, .section-header, .cta-block, .hero-stats, .content-card, .article-card, .app-link-card, .stat-card, .cta-panel'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

revealElements.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="spin"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="40" stroke-dashoffset="10"/></svg> ' + (window.t ? window.t('contact.sending') : 'Envoi en cours...');
    submitBtn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      } else {
        throw new Error('Erreur');
      }
    } catch (err) {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      alert(window.t ? window.t('contact.error') : 'Une erreur est survenue. Veuillez réessayer.');
    }
  });
}

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

const currentPath = normalizePath(window.location.pathname);

navLinksAll.forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#')) return;

  const normalizedHref = normalizePath(href);
  const isAppsPage = currentPath.startsWith('/applications/') && normalizedHref === '/applications/';
  const isBlogPage = currentPath.startsWith('/blog/') && normalizedHref === '/blog/';

  if (normalizedHref === currentPath || isAppsPage || isBlogPage) {
    link.classList.add('active');
  }
});

if (sections.length > 0) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinksAll.forEach(link => {
          if ((link.getAttribute('href') || '').startsWith('/')) return;
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}
