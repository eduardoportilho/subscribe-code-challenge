const {
  calculateTotalPriceAfterTax,
} = require("./calculateTotalPriceAfterTax");

const formatAmount = (number) => number.toFixed(2);

/**
 * Generate receipt detail for shopping basket
 * @param string shoppingBasket
 * @returns string
 */
const generateReceiptDetails = (shoppingBasket) => {
  const shoppingBasketItems = shoppingBasket
    .split("\n")
    .map(calculateTotalPriceAfterTax);

  const receiptItems = shoppingBasketItems.map(
    ({ description, totalPriceAfterTax }) =>
      `${description}: ${formatAmount(totalPriceAfterTax)}`
  );

  const { totalPrice, totalTaxAmount } = shoppingBasketItems.reduce(
    (acc, item) => {
      return {
        totalPrice: acc.totalPrice + item.totalPriceAfterTax,
        totalTaxAmount: acc.totalTaxAmount + item.taxAmount,
      };
    },
    { totalPrice: 0.0, totalTaxAmount: 0.0 }
  );

  return [
    ...receiptItems,
    `Sales Taxes: ${formatAmount(totalTaxAmount)}`,
    `Total: ${formatAmount(totalPrice)}`,
  ].join("\n");
};

module.exports = { generateReceiptDetails };
