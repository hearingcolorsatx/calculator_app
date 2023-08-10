class Calculator {
  constructor() {
    this.result = 0;
  }

  enterNumber(number) {
    this.result = number;
    return this.result
  }
  
  add(a, b) {
    this.result = a + b;
    return this.result
  }
  
  subtract(a, b) {
    this.result = a - b;
    return this.result
  }
  
  multiply(a, b) {
    this.result = a * b;
    return this.result
  }
  
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result = a / b;
    return this.result
  }
  
  getResult() {
    return this.result;
  }
}

module.exports = Calculator;
