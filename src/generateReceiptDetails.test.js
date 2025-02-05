const { generateReceiptDetails } = require("./generateReceiptDetails");
const { readFileSync } = require("fs");

describe("generateReceiptDetails", () => {
  describe("for each test input file", () => {
    it.each([
      { input: "sample-data/input1.txt", output: "sample-data/output1.txt" },
      { input: "sample-data/input2.txt", output: "sample-data/output2.txt" },
      { input: "sample-data/input3.txt", output: "sample-data/output3.txt" },
    ])(
      "expect the receipt details of '$input' to match '$output'",
      ({ input, output }) => {
        const inputContent = readFileSync(input, "utf8");
        const expectedOutput = readFileSync(output, "utf8");

        expect(generateReceiptDetails(inputContent)).toEqual(expectedOutput);
      }
    );
  });
});
