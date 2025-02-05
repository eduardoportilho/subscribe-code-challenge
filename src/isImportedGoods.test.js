const { isImportedGoods } = require("./isImportedGoods");

describe("isImportedGoods", () => {
  describe("when item is imported", () => {
    it.each([
      "1 imported bottle of perfume: 54.65",
      "3 imported boxes of chocolates at 11.25",
    ])('return true for imported item "%s"', (item) => {
      expect(isImportedGoods(item)).toBe(true);
    });
  });

  describe("when item is not imported", () => {
    it.each(["1 music CD at 14.99", "1 packet of headache pills at 9.75"])(
      'return false for not imported item "%s"',
      (item) => {
        expect(isImportedGoods(item)).toBe(false);
      }
    );
  });
});
