const {
  calculateTotalPriceAfterTax,
} = require("./calculateTotalPriceAfterTax");

describe("calculateTotalPriceAfterTax", () => {
  describe("when item is exempt", () => {
    describe("and quantity is 1", () => {
      it("returns unit price", () => {
        const { totalPriceAfterTax } = calculateTotalPriceAfterTax(
          "1 chocolate bar at 0.85"
        );

        expect(totalPriceAfterTax).toEqual(0.85);
      });
    });

    describe("and quantity is more than 1", () => {
      it("multiply unit price by quantity", () => {
        const { totalPriceAfterTax } =
          calculateTotalPriceAfterTax("2 book at 12.49");

        expect(totalPriceAfterTax).toEqual(24.98);
      });
    });
  });

  describe("when item is not exempt of sales tax", () => {
    it("apply sales tax", () => {
      const { totalPriceAfterTax } = calculateTotalPriceAfterTax(
        "1 music CD at 14.99"
      );

      expect(totalPriceAfterTax).toEqual(16.49);
    });
  });

  describe("when item is imported", () => {
    it("apply import duty tax", () => {
      const { totalPriceAfterTax } = calculateTotalPriceAfterTax(
        "1 imported box of chocolates at 10.00"
      );

      expect(totalPriceAfterTax).toEqual(10.5);
    });
  });

  describe("when item is imported and not exempt of sales tax", () => {
    // TODO: single documented example is using `roundToNearest05`
    it.skip("apply sales tax and import duty tax", () => {
      const { totalPriceAfterTax } = calculateTotalPriceAfterTax(
        "1 imported bottle of perfume at 47.50"
      );

      expect(totalPriceAfterTax).toEqual(54.65);
    });

    // TODO: can't find the reasoning behind this documented example
    it.skip("apply sales tax and import duty tax", () => {
      const { totalPriceAfterTax } = calculateTotalPriceAfterTax(
        "3 imported boxes of chocolates at 11.25"
      );

      expect(totalPriceAfterTax).toEqual(35.55);
    });
  });
});
