const { parseShoppingBasketItem } = require("./parseShoppingBasketItem");

describe("parseShoppingBasketItem", () => {
  describe("when the entry is valid", () => {
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
      {
        item: "1 ball at 10",
        description: "1 ball",
        qtd: 1,
        unitPrice: 10.0,
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

  describe("when the entry is invalid", () => {
    it.each([
      "A book at 12.49",
      "1 book",
      "1.5 books at 10.0",
      "1 book at xyz",
      "xxxxxx",
      "",
    ])(`throws error for invalid item "%s"`, (item) => {
      expect(() => {
        parseShoppingBasketItem(item);
      }).toThrow();
    });
  });
});
