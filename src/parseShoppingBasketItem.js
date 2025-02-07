/**
 * Shopping basket entry
 * @typedef {Object} ShoppingBasketEntry
 * @property {string} description - Entry description, ex. "2 imported bottles of perfume"
 * @property {number} unitPrice - Unit price of the entry, ex. 27.99
 * @property {number} qtd - Entry quantity, ex. 2
 */

/**
 * Parses a shopping basket entry
 * @param string shoppingBasketItem - entry from input, ex. "2 imported bottle of perfume at 27.99"
 * @returns {ShoppingBasketEntry}
 */
const parseShoppingBasketItem = (shoppingBasketItem) => {
  if (!shoppingBasketItem.includes(" at ")) {
    throw new Error("Invalid entry");
  }

  const [description, unitPriceString] = shoppingBasketItem.split(" at ");
  const qtdMatch = shoppingBasketItem.match(/^(?<qtd>\d+) /);

  if (!qtdMatch.groups) {
    throw new Error("Invalid entry");
  }

  const qtd = parseInt(qtdMatch.groups.qtd);
  const unitPrice = parseFloat(unitPriceString);

  if (isNaN(qtd) || isNaN(unitPrice)) {
    throw new Error("Invalid entry");
  }

  return {
    qtd,
    description,
    unitPrice,
  };
};

module.exports = { parseShoppingBasketItem };
