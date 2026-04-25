// Lazy load i18n bundle on homepage to reduce initial unused JS.
(function () {
  const I18N_SRC = '/i18n.min.js';
  let loadPromise = null;

  function loadI18n() {
    if (window.applyTranslations) return Promise.resolve();
    if (loadPromise) return loadPromise;

    loadPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-carlusone-i18n="true"]');
      if (existing) {
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', () => reject(new Error('Failed to load i18n.js')), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = I18N_SRC;
      script.async = true;
      script.dataset.carlusoneI18n = 'true';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load i18n.js'));
      document.head.appendChild(script);
    });

    return loadPromise;
  }

  function initLazyLanguageSwitch() {
    const buttons = document.querySelectorAll('.lang-btn');
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const lang = btn.dataset.lang || 'fr';
        try {
          await loadI18n();
          if (window.applyTranslations) {
            window.applyTranslations(lang);
          }
        } catch {
          // Keep default FR content if i18n bundle fails.
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLazyLanguageSwitch();

    const storedLang = localStorage.getItem('carlusone-lang');
    if (storedLang && storedLang !== 'fr') {
      loadI18n().catch(() => {
        // Keep default FR content if i18n bundle fails.
      });
    }
  });
})();
