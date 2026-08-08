// CarlusOne — Jeudemots pricing localization for the portfolio.
// Mirrors the app's detectCurrency logic (Jeudemots/src/utils/pricing.ts)
// so displayed prices stay consistent when a visitor lands on the portfolio
// before opening the app. UMD wrapper: works in browsers (auto-applies on
// DOMContentLoaded) and in Node.js for unit tests.
(function (global, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
    return;
  }
  global.CarlusOnePricing = api;
  if (typeof document === 'undefined') return;
  var run = function () { api.applyJeudemotsPricing(); };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})(typeof window !== 'undefined' ? window : globalThis, function () {
  var PRICE_AMOUNTS = { CAD: 5, EUR: 4, CHF: 4 };
  var DEFAULT_CONFIGURED = ['CAD', 'EUR', 'CHF'];

  function detectCurrency(locale, configured) {
    var list = configured && configured.length ? configured : DEFAULT_CONFIGURED;
    var lc = (locale || 'fr-CA').toLowerCase();
    var preferred;
    if (lc.endsWith('-ch') || lc === 'ch') {
      preferred = 'CHF';
    } else if (lc.endsWith('-ca') || lc === 'ca') {
      preferred = 'CAD';
    } else {
      preferred = 'EUR';
    }
    return list.indexOf(preferred) >= 0 ? preferred : 'CAD';
  }

  function detectLanguage(locale) {
    var lc = (locale || 'fr').toLowerCase();
    if (lc.indexOf('en') === 0) return 'en';
    if (lc.indexOf('es') === 0) return 'es';
    return 'fr';
  }

  function formatPriceParts(currency, language) {
    var amount = PRICE_AMOUNTS[currency];
    switch (currency) {
      case 'CAD':
        return language === 'fr'
          ? { value: amount + ' $', currency: 'CAD' }
          : { value: '$' + amount, currency: 'CAD' };
      case 'EUR':
        return language === 'en'
          ? { value: '€' + amount, currency: 'EUR' }
          : { value: amount + ' €', currency: 'EUR' };
      case 'CHF':
        return language === 'en'
          ? { value: 'CHF ' + amount, currency: 'CHF' }
          : { value: amount + ' CHF', currency: 'CHF' };
      default:
        return { value: PRICE_AMOUNTS.CAD + ' $', currency: 'CAD' };
    }
  }

  function applyJeudemotsPricing(root) {
    if (typeof document === 'undefined') return;
    var scope = root || document;
    var locale = typeof navigator !== 'undefined' ? navigator.language : undefined;
    var currency = detectCurrency(locale);
    var language = detectLanguage(locale);
    var parts = formatPriceParts(currency, language);
    var blocks = scope.querySelectorAll('.pricing-amount[data-app="jeudemots"]');
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      var value = block.querySelector('.price-value');
      var cur = block.querySelector('.price-currency');
      if (value) value.textContent = parts.value;
      if (cur) cur.textContent = parts.currency;
    }
  }

  return {
    PRICE_AMOUNTS: PRICE_AMOUNTS,
    detectCurrency: detectCurrency,
    detectLanguage: detectLanguage,
    formatPriceParts: formatPriceParts,
    applyJeudemotsPricing: applyJeudemotsPricing,
  };
});
