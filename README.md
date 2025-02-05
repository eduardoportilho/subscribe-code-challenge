## Requirements

- To run the project you need a recent version of [Node.js](https://nodejs.org/en/download) and NPM.

## Assumptions

- Numeric values in the input should not have any thousand separator (i.e. `1234.56` and not `1,234.56`).
- Imported goods in the input should cointain the word "imported" (in lower case) in their description.
- Products that are exempt of sales tax should have one of the listed terms in their description:
  - Book: "book"
  - Food: "chocolate"
  - Medical product: "headache pill"

## Running the application

1. If it is the first time you are running the project, run `npm install` in order to install Jest and peer dependencies.

```
$ npm install
```

2. Create a text file with a shopping basket input like in the example below:

Input file: `sample-data/input1.txt`:

```
2 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85
```

3. Run `src/index.js` with node CLI passing the relative path to the input file as argument:

```
$ node src/index.js sample-data/input1.txt
```

4. The output will be printed out in the console:

```
2 book: 24.98
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 42.32
```

## Running unit tests

- Execute the following command to run all unit tests:

```
$ npm run test
```

- The `src/generateReceiptDetails.test.js` test receives a list of input and output file paths, runs the application for each input, and compares the result with the corresponding output. You can edit this file to add more test cases:

```js
...
describe("generateReceiptDetails", () => {
  describe("for each test input file", () => {
    it.each([
      ...
      { input: "sample-data/new-input.txt", output: "sample-data/new-output.txt" },
      ...
    ])(
      "expect the receipt details of '$input' to match '$output'",
      ({ input, output }) => {
        ...
```

- Then you can run this test file directly:

```
$ npm run test src/generateReceiptDetails.test.js
```
