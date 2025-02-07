const { roundTo2DecimalPlaces } = require("./round");
const { generateReceiptEntry } = require("./generateReceiptEntry");

const formatAmount = (number) => number.toFixed(2);

/**
 * Generate receipt detail for shopping basket
 * @param string shoppingBasket
 * @returns string
 */
const generateReceiptDetails = (shoppingBasket) => {
  const receiptEntries = shoppingBasket.split("\n").map(generateReceiptEntry);

  const receiptItemRows = receiptEntries.map(
    ({ description, totalPriceAfterTax }) =>
      `${description}: ${formatAmount(totalPriceAfterTax)}`
  );

  const { totalPrice, totalTaxAmount } = receiptEntries.reduce(
    (acc, item) => {
      return {
        totalPrice: roundTo2DecimalPlaces(
          acc.totalPrice + item.totalPriceAfterTax
        ),
        totalTaxAmount: roundTo2DecimalPlaces(
          acc.totalTaxAmount + item.taxAmount
        ),
      };
    },
    { totalPrice: 0.0, totalTaxAmount: 0.0 }
  );

  return [
    ...receiptItemRows,
    `Sales Taxes: ${formatAmount(totalTaxAmount)}`,
    `Total: ${formatAmount(totalPrice)}`,
  ].join("\n");
};

module.exports = { generateReceiptDetails };
