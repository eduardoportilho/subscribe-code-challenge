/**
 * Check if a shopping basket item imported
 * @param string shoppingBasketItem - entry from input, ex. "1 imported bottle of perfume at 27.99"
 * @returns boolean
 */
const isImportedGoods = (shoppingBasketItem) => {
  return shoppingBasketItem.includes("imported");
};

module.exports = {
  isImportedGoods,
};
