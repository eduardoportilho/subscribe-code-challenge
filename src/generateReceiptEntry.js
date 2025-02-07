const { calculateTax } = require("./calculateTax");
const { isImportedGoods } = require("./isImportedGoods");
const { isSalesTaxExempt } = require("./isSalesTaxExempt");
const { parseShoppingBasketItem } = require("./parseShoppingBasketItem");

const SALES_TAX = 10;
const IMPORT_DUTY_TAX = 5;

/**
 * Receipt entry
 * @typedef {Object} ReceiptEntry
 * @property {string} description - Entry description, ex. "1 music CD"
 * @property {number} taxAmount - Total sales tax amount, ex 1.5
 * @property {number} totalPriceAfterTax - Total price after sales tax, ex. 16.49
 */

/**
 * Generate a receipt entry for a shopping basket item
 * @param string shoppingBasketEntry - entry from input, ex. "1 imported bottle of perfume at 27.99"
 * @returns {ReceiptEntry}
 */
const generateReceiptEntry = (shoppingBasketEntry) => {
  let tax = 0.0;

  if (!isSalesTaxExempt(shoppingBasketEntry)) {
    tax += SALES_TAX;
  }
  if (isImportedGoods(shoppingBasketEntry)) {
    tax += IMPORT_DUTY_TAX;
  }

  const { description, unitPrice, qtd } =
    parseShoppingBasketItem(shoppingBasketEntry);

  const { taxAmount, totalPriceAfterTax } = calculateTax({
    unitPrice,
    qtd,
    tax,
  });

  return {
    description,
    taxAmount,
    totalPriceAfterTax,
  };
};

module.exports = {
  generateReceiptEntry,
};
