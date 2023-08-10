const Calculator = require('../../src/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });
  // test the addition functionality
  it('should add two numbers', () => {
    const result = calculator.add(5, 3);
    expect(result).toBe(8);
  });
  // test the subtraction functionality
  it('should subtract two numbers', () => {
    const result = calculator.subtract(10, 3);
    expect(result).toBe(7);
  });
  // test the multiplication functionality
  it('should multiply two numbers', () => {
    const result = calculator.multiply(4, 6);
    expect(result).toBe(24);
  });
  // test the division functionality
  it('should divide two numbers', () => {
    const result = calculator.divide(10, 2);
    expect(result).toBe(5);
  });
  // test division by 0
  it('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(8, 0)).toThrowError("Division by zero is not allowed");
  });
});