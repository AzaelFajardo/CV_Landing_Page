import { initTheme } from './theme.js';
import { initLanguage } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initScrollSpy();
  initExperienceCarousel();
  initResumeModal();
});

/**
 * Single-page navigation: scroll-spy highlights the nav link
 * of the section currently in view.
 */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Experience carousel: prev/next buttons slide one card at a time.
 * Buttons auto-disable at the start/end of the track.
 */
function initExperienceCarousel() {
  const track = document.getElementById('experience-track');
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');

  if (!track || !prev || !next) return;

  const getStep = () => {
    const card = track.querySelector('.exp-card');
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0');
    return card.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prev.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft >= maxScroll - 1;
  };

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    track.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);

  updateButtons();
}

/**
 * Resume Modal Logic
 * Dynamically loads the english or spanish PDF based on current language.
 */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const iframe = document.getElementById('resume-iframe');
  if (!modal || !iframe) return;

  const openBtns = document.querySelectorAll('.btn-nav-resume, .icon-resume');
  const closeBtns = document.querySelectorAll('[data-close-modal]');

  const openModal = (e) => {
    e.preventDefault();
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const pdfFile = currentLang === 'en' ? 'docs/CV_Angel_Fajardo(english).pdf' : 'docs/CV_Angel_Fajardo(español).pdf';
    iframe.src = pdfFile;
    modal.classList.add('active');
  };

  const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => { iframe.src = ''; }, 300); // clear src after animation
  };

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

  // Also close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
