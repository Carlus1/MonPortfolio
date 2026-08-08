// Unit tests for the portfolio Jeudemots pricing localization.
// Run with: node --test pricing.test.cjs
// No external dependencies — uses Node's built-in test runner + assert.
const assert = require('node:assert/strict');
const { test } = require('node:test');
const pricing = require('./pricing.js');

const ALL = ['CAD', 'EUR', 'CHF'];

test('detectCurrency: *-CA locales map to CAD', () => {
  assert.equal(pricing.detectCurrency('fr-CA', ALL), 'CAD');
  assert.equal(pricing.detectCurrency('en-CA', ALL), 'CAD');
  assert.equal(pricing.detectCurrency('FR-ca', ALL), 'CAD');
});

test('detectCurrency: *-CH locales map to CHF', () => {
  assert.equal(pricing.detectCurrency('fr-CH', ALL), 'CHF');
  assert.equal(pricing.detectCurrency('de-CH', ALL), 'CHF');
  assert.equal(pricing.detectCurrency('it-CH', ALL), 'CHF');
});

test('detectCurrency: FR/BE/other locales map to EUR', () => {
  assert.equal(pricing.detectCurrency('fr-FR', ALL), 'EUR');
  assert.equal(pricing.detectCurrency('fr-BE', ALL), 'EUR');
  assert.equal(pricing.detectCurrency('fr-RE', ALL), 'EUR');
  assert.equal(pricing.detectCurrency('fr-SN', ALL), 'EUR');
  assert.equal(pricing.detectCurrency('es-ES', ALL), 'EUR');
  assert.equal(pricing.detectCurrency('en-GB', ALL), 'EUR');
});

test('detectCurrency: falls back to CAD when preferred is not configured', () => {
  assert.equal(pricing.detectCurrency('fr-FR', ['CAD']), 'CAD');
  assert.equal(pricing.detectCurrency('fr-CH', ['CAD']), 'CAD');
  assert.equal(pricing.detectCurrency('fr-CH', ['CAD', 'EUR']), 'CAD');
});

test('detectCurrency: empty/undefined locale falls back to CAD', () => {
  assert.equal(pricing.detectCurrency('', ALL), 'CAD');
  assert.equal(pricing.detectCurrency(undefined, ALL), 'CAD');
});

test('detectLanguage: fr / en / es', () => {
  assert.equal(pricing.detectLanguage('fr-CA'), 'fr');
  assert.equal(pricing.detectLanguage('fr-FR'), 'fr');
  assert.equal(pricing.detectLanguage('en-US'), 'en');
  assert.equal(pricing.detectLanguage('en-GB'), 'en');
  assert.equal(pricing.detectLanguage('es-ES'), 'es');
  assert.equal(pricing.detectLanguage('es-MX'), 'es');
  assert.equal(pricing.detectLanguage(''), 'fr');
});

test('formatPriceParts: CAD FR = "5 $" + "CAD"', () => {
  const p = pricing.formatPriceParts('CAD', 'fr');
  assert.equal(p.value, '5 $');
  assert.equal(p.currency, 'CAD');
});

test('formatPriceParts: CAD EN = "$5" + "CAD"', () => {
  const p = pricing.formatPriceParts('CAD', 'en');
  assert.equal(p.value, '$5');
  assert.equal(p.currency, 'CAD');
});

test('formatPriceParts: EUR FR = "4 €" + "EUR"', () => {
  const p = pricing.formatPriceParts('EUR', 'fr');
  assert.equal(p.value, '4 €');
  assert.equal(p.currency, 'EUR');
});

test('formatPriceParts: EUR EN = "€4" + "EUR"', () => {
  const p = pricing.formatPriceParts('EUR', 'en');
  assert.equal(p.value, '€4');
  assert.equal(p.currency, 'EUR');
});

test('formatPriceParts: CHF FR = "4 CHF" + "CHF"', () => {
  const p = pricing.formatPriceParts('CHF', 'fr');
  assert.equal(p.value, '4 CHF');
  assert.equal(p.currency, 'CHF');
});

test('formatPriceParts: CHF EN = "CHF 4" + "CHF"', () => {
  const p = pricing.formatPriceParts('CHF', 'en');
  assert.equal(p.value, 'CHF 4');
  assert.equal(p.currency, 'CHF');
});

test('PRICE_AMOUNTS matches Jeudemots app', () => {
  assert.deepEqual(pricing.PRICE_AMOUNTS, { CAD: 5, EUR: 4, CHF: 4 });
});

test('applyJeudemotsPricing: no-op when document is undefined (Node env)', () => {
  // Should not throw even without a document — safe to call in Node.
  assert.doesNotThrow(() => pricing.applyJeudemotsPricing());
});
