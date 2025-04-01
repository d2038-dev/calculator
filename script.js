const calculator = {
  firstNumber: 3,
  secondNumber: 2,
  operator: "+",
  add: function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  },
  subtract: function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  },
  multiply: function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  },
  divide: function (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  },
  operate: function (firstNumber, secondNumber, operator) {
    switch (operator) {
      case "+":
        return this.add(firstNumber, secondNumber);
        break;
      case "-":
        return this.subtract(firstNumber, secondNumber);
        break;
      case "*":
        return this.multiply(firstNumber, secondNumber);
        break;
      case "/":
        return this.divide(firstNumber, secondNumber);
        break;

      default:
        break;
    }
  },
};
