const Calculator = require('../../src/calculator');
const { expect } = require('chai');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // Test the addition functionality
  it('should add two numbers', () => {
    const result = calculator.add(5, 3);
    expect(result).to.equal(8);
  });

  // Test the subtraction functionality
  it('should subtract two numbers', () => {
    const result = calculator.subtract(10, 3);
    expect(result).to.equal(7);
  });

  // Test the multiplication functionality
  it('should multiply two numbers', () => {
    const result = calculator.multiply(4, 6);
    expect(result).to.equal(24);
  });

  // Test the division functionality
  it('should divide two numbers', () => {
    const result = calculator.divide(10, 2);
    expect(result).to.equal(5);
  });

  // Test division by 0
  it('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(8, 0)).to.throw(Error, "Division by zero is not allowed");
  });
});
