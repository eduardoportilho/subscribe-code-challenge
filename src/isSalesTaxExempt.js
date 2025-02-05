// books, food, and medical products that are exempt
const EXEMPT_PRODUCTS = ["book", "chocolate", "headache pill"];

/**
 * Check if a shopping basket item is exempt of sales tax
 * @param string shoppingBasketItem - entry from input, ex. "1 imported bottle of perfume at 27.99"
 * @returns boolean
 */
const isSalesTaxExempt = (shoppingBasketItem) => {
  return EXEMPT_PRODUCTS.some((product) =>
    shoppingBasketItem.includes(product)
  );
};

module.exports = {
  isSalesTaxExempt,
};
