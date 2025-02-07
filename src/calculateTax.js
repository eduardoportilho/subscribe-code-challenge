const { roundTo2DecimalPlaces, roundToNearest05 } = require("./round");

/**
 * Function input
 * @typedef {Object} CalculateTaxProps
 * @property {number} unitPrice - Unit price
 * @property {number} qtd - Number of items
 * @property {number} tax - Percentage tax to be applied (ex. `10` for 10%)
 */

/**
 * Function result
 * @typedef {Object} CalculateTaxResult
 * @property {number} taxAmount - Tax amount
 * @property {number} totalPriceAfterTax - Total price of items including tax
 */

/**
 * Calculate the tax amount and the total amount after tax. The tax amount is rounded
 * to the nearest 0.05.
 * @param {CalculateTaxProps} input
 * @returns {CalculateTaxResult}
 */
const calculateTax = ({ unitPrice, qtd, tax }) => {
  const totalPrice = qtd * unitPrice;
  const taxAmount = roundToNearest05((totalPrice * tax) / 100);
  const totalPriceAfterTax = roundTo2DecimalPlaces(totalPrice + taxAmount);

  return {
    taxAmount,
    totalPriceAfterTax,
  };
};

module.exports = {
  calculateTax,
};
