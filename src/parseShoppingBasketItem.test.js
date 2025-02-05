const { parseShoppingBasketItem } = require("./parseShoppingBasketItem");

describe("parseShoppingBasketItem", () => {
  it.each([
    {
      item: "2 book at 12.49",
      description: "2 book",
      qtd: 2,
      unitPrice: 12.49,
    },
    {
      item: "3 imported boxes of chocolates at 11.25",
      description: "3 imported boxes of chocolates",
      qtd: 3,
      unitPrice: 11.25,
    },
    {
      item: "3 imported boxes of chocolates at 1011.25",
      description: "3 imported boxes of chocolates",
      qtd: 3,
      unitPrice: 1011.25,
    },
  ])(
    'parses description, qtd, and unit price from "$item"',
    ({ item, description, qtd, unitPrice }) => {
      const result = parseShoppingBasketItem(item);

      expect(result.description).toEqual(description);
      expect(result.qtd).toEqual(qtd);
      expect(result.unitPrice).toEqual(unitPrice);
    }
  );
});
