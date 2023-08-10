const { Given, When, Then } = require('cucumber');
const Calculator = require('../../src/calculator');
const { expect } = require('chai');

let calculator;
let enteredNumbers = [];

Given('I have entered {int} into the calculator', function (number) {
  calculator = new Calculator();
  calculator.enterNumber(number);
  enteredNumbers.push(number);
});


When('I press add', function () {
  const a = enteredNumbers[0];
  const b = enteredNumbers[1];
  console.log(a, "+", b)
  calculator.add(a, b);
});

When('I press subtract', function () {
  const a = enteredNumbers[2];
  const b = enteredNumbers[3];
  console.log(a, "-", b)
  calculator.subtract(a, b);
});

When('I press multiply', function () {
  const a = enteredNumbers[4];
  const b = enteredNumbers[5];
  console.log(a, "x", b)
  calculator.multiply(a, b);
});

When('I press divide', function () {
  const a = enteredNumbers[6];
  const b = enteredNumbers[7];
  console.log(a, "/", b)
  calculator.divide(a, b);
});

Then('the result should be {int} on the screen', function (expectedResult) {
  const result = calculator.getResult();
  expect(result).to.equal(expectedResult);
});

