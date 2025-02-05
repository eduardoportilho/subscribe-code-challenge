const { readFileSync } = require("fs");
const { generateReceiptDetails } = require("./generateReceiptDetails");

(() => {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.error(
      "Missing arguments. Usage: node src/index.js <path/to/input>"
    );
    process.exit();
  }

  const input = readFileSync(args[0], "utf8");
  const receiptDetails = generateReceiptDetails(input);

  console.log(receiptDetails);
})();
