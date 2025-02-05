const { isSalesTaxExempt } = require("./isSalesTaxExempt");

describe("isSalesTaxExempt", () => {
  describe("when item is exempt", () => {
    it.each([
      "2 book at 12.49",
      "3 imported boxes of chocolates at 11.25",
      "1 packet of headache pills at 9.75",
    ])('return true for exempt item "%s"', (item) => {
      expect(isSalesTaxExempt(item)).toBe(true);
    });
  });

  describe("when item is not exempt", () => {
    it.each(["1 music CD at 14.99", "1 imported bottle of perfume: 54.65"])(
      'return false for not exempt item "%s"',
      (item) => {
        expect(isSalesTaxExempt(item)).toBe(false);
      }
    );
  });
});
