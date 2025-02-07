const { roundToNearest05, roundTo2DecimalPlaces } = require("./round");

describe("round", () => {
  describe("roundToNearest05", () => {
    it.each([
      { number: 54.62, rounded: 54.6 },
      { number: 54.625, rounded: 54.65 },
      { number: 54.63, rounded: 54.65 },
      { number: 54.65, rounded: 54.65 },
    ])("rounds $number to $rounded", ({ number, rounded }) => {
      expect(roundToNearest05(number)).toEqual(rounded);
    });
  });
  describe("roundTo2DecimalPlaces", () => {
    it.each([
      { number: 54.624, rounded: 54.62 },
      { number: 54.625, rounded: 54.63 },
      { number: 54.626, rounded: 54.63 },
    ])("rounds $number to $rounded", ({ number, rounded }) => {
      expect(roundTo2DecimalPlaces(number)).toEqual(rounded);
    });
  });
});
