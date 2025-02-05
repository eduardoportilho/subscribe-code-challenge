const { isImportedGoods } = require("./isImportedGoods");
const { isSalesTaxExempt } = require("./isSalesTaxExempt");
const { parseShoppingBasketItem } = require("./parseShoppingBasketItem");
const { roundTo2DecimalPlaces } = require("./round");

const SALES_TAX = 10 / 100;
const IMPORT_DUTY_TAX = 5 / 100;

/**
 * Receipt entry
 * @typedef {Object} ReceiptEntry
 * @property {string} description - Entry description, ex. "1 music CD"
 * @property {number} taxAmount - Total sales tax amount, ex 1.5
 * @property {number} totalPriceAfterTax - Total price after sales tax, ex. 16.49
 */

/**
 * Calculate toptal price after sales taxes
 * @param string shoppingBasketEntry - entry from input, ex. "1 imported bottle of perfume at 27.99"
 * @returns {ReceiptEntry}
 */
const calculateTotalPriceAfterTax = (shoppingBasketEntry) => {
  let tax = 0.0;

  if (!isSalesTaxExempt(shoppingBasketEntry)) {
    tax += SALES_TAX;
  }
  if (isImportedGoods(shoppingBasketEntry)) {
    tax += IMPORT_DUTY_TAX;
  }

  const { description, unitPrice, qtd } =
    parseShoppingBasketItem(shoppingBasketEntry);

  const totalPrice = qtd * unitPrice;
  // TODO: check which rounding method should be used
  const taxAmount = roundTo2DecimalPlaces(totalPrice * tax);
  const totalPriceAfterTax = roundTo2DecimalPlaces(totalPrice + taxAmount);

  return {
    description,
    taxAmount,
    totalPriceAfterTax,
  };
};

module.exports = {
  calculateTotalPriceAfterTax,
};
