// index.js - Coding Team
function additionner(a, b) {
  return a + b;
}

function soustraire(a, b) {
  return a - b;
}

function multiplier(a, b) {
  return a * b;
}

function diviser(a, b) {
  if (b === 0) {
    throw new Error("Division par zéro n'est pas autorisée.");
  }
  return a / b;
}

function puissance(base, exposant) {
  return Math.pow(base, exposant);
}

module.exports = {
  additionner,
  soustraire,
  multiplier,
  diviser,
  puissance,
};
