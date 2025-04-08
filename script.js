const calculator = {
  ui: {
    display: document.querySelector("[data-id='calculator__display']"),
    digitBtns: document.querySelectorAll("[data-digit-id]"),
  },
  state: {
    firstNumber: "0",
    secondNumber: null,
    operator: "",
  },

  handleDigit: function (e) {
    const digitString = e.target.dataset.digitId;
    if (this.state.firstNumber !== "0") {
      this.state.firstNumber += digitString;
    } else {
      this.state.firstNumber = digitString;
    }
    this.ui.display.textContent = this.state.firstNumber;
  },

  operations: {
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
        case "-":
          return this.subtract(firstNumber, secondNumber);
        case "*":
          return this.multiply(firstNumber, secondNumber);
        case "/":
          return this.divide(firstNumber, secondNumber);

        default:
          break;
      }
    },
  },
};

calculator.ui.digitBtns.forEach((digitBtn) => {
  digitBtn.addEventListener("click", (e) => {
    calculator.handleDigit(e);
  });
});
