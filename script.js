const calculator = {
  firstNumber: null,
  secondNumber: null,
  operator: null,
  add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  },
  subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  },
  multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  },
  divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  },
  operate(firstNumber, operator, secondNumber) {
    switch (operator) {
      case '+':
        return this.add(firstNumber, secondNumber);
        break;
      case '-':
        return this.subtract(firstNumber, secondNumber);
        break;
      case '*':
        return this.multiply(firstNumber, secondNumber);
        break;
      case '/':
        return this.divide(firstNumber, secondNumber);
        break;
      default:
        break;
    }
  }
};