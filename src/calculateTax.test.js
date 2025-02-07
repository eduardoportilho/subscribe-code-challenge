const { calculateTax } = require("./calculateTax");

describe("calculateTax", () => {
  it("calculate the tax amount and the total amount after tax rounding up", () => {
    const { taxAmount, totalPriceAfterTax } = calculateTax({
      qtd: 3,
      unitPrice: 47.4,
      tax: 15,
    });

    // round 21.33 to the nearest 0.05 (up)
    expect(taxAmount).toEqual(21.35);
    expect(totalPriceAfterTax).toEqual(163.55);
  });

  it("calculate the tax amount and the total amount after tax rounding down", () => {
    const { taxAmount, totalPriceAfterTax } = calculateTax({
      qtd: 3,
      unitPrice: 47.6,
      tax: 15,
    });

    // round 21.42 to the nearest 0.05 (down)
    expect(taxAmount).toEqual(21.4);
    expect(totalPriceAfterTax).toEqual(164.2);
  });

  it("returns unchanged value when tax is zero", () => {
    const { taxAmount, totalPriceAfterTax } = calculateTax({
      qtd: 1,
      unitPrice: 47.4,
      tax: 0,
    });

    expect(taxAmount).toEqual(0);
    expect(totalPriceAfterTax).toEqual(47.4);
  });
});
