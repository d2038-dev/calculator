const calculator = {
  firstNumber: "0",
  secondNumber: "",
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

const numberBtnGroup = document.querySelectorAll('.calculator__button--type-number');
const numberDisplay = document.querySelector('.calculator__number-line');

numberBtnGroup.forEach((button) => {
  button.addEventListener("click", update);
});

function update(e) {
  updateState(e);
  updateDisplay();
};

function updateState(e) {
  const value = e.target.textContent;
  if (calculator.firstNumber === "0") {
    calculator.firstNumber = value;
  } else {
    calculator.firstNumber += value;
  }
};

function updateDisplay() {
  numberDisplay.textContent = calculator.firstNumber;
};