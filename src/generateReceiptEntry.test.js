const { generateReceiptEntry } = require("./generateReceiptEntry");
const { calculateTax } = require("./calculateTax");
const { isImportedGoods } = require("./isImportedGoods");
const { isSalesTaxExempt } = require("./isSalesTaxExempt");

jest.mock("./isImportedGoods", () => ({
  isImportedGoods: jest.fn(),
}));
jest.mock("./isSalesTaxExempt", () => ({
  isSalesTaxExempt: jest.fn(),
}));
jest.mock("./calculateTax", () => ({
  calculateTax: jest.fn(),
}));

describe("generateReceiptEntry", () => {
  beforeEach(() => {
    isImportedGoods.mockReturnValue(false);
    isSalesTaxExempt.mockReturnValue(false);
    calculateTax.mockReturnValue({
      taxAmount: 10.0,
      totalPriceAfterTax: 110.0,
    });
  });

  it("returns description, tax amount and total price after tax", () => {
    const { description, taxAmount, totalPriceAfterTax } = generateReceiptEntry(
      "3 chocolate bar at 0.85"
    );

    expect(description).toEqual("3 chocolate bar");
    expect(taxAmount).toEqual(10.0);
    expect(totalPriceAfterTax).toEqual(110.0);
  });

  describe("tax calculation", () => {
    it.each([
      { exempt: true, imported: false, expectedTax: 0.0 },
      { exempt: true, imported: true, expectedTax: 5.0 },
      { exempt: false, imported: false, expectedTax: 10.0 },
      { exempt: false, imported: true, expectedTax: 15.0 },
    ])(
      `calls calculate tax with tax $expectedTax when exempt $exempt is and imported is $imported`,
      ({ exempt, imported, expectedTax }) => {
        isSalesTaxExempt.mockReturnValue(exempt);
        isImportedGoods.mockReturnValue(imported);

        generateReceiptEntry("3 chocolate bar at 0.85");

        expect(calculateTax).toHaveBeenCalledWith({
          unitPrice: 0.85,
          qtd: 3,
          tax: expectedTax,
        });
      }
    );
  });
});
