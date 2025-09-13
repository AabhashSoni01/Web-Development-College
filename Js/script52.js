document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".inp-dsp");
  const buttons = document.querySelectorAll(".keyboard button");

  let currentInput = "";
  let operator = "";
  let firstValue = null;

  // Update display
  function updateDisplay(value) {
    display.value = value;
  }

  // Handle button clicks
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.textContent;

      // Numbers
      if (!isNaN(val) || val === ".") {
        currentInput += val;
        updateDisplay(currentInput);
      }
      // Operators
      else if (["+", "-", "*", "/"].includes(val)) {
        if (currentInput === "" && firstValue === null) return;
        if (firstValue === null) {
          firstValue = parseFloat(currentInput);
        } else if (currentInput !== "") {
          firstValue = operate(firstValue, parseFloat(currentInput), operator);
        }
        operator = val;
        currentInput = "";
        updateDisplay(firstValue);
      }
      // Equal
      else if (val === "=") {
        if (firstValue !== null && operator && currentInput !== "") {
          firstValue = operate(firstValue, parseFloat(currentInput), operator);
          updateDisplay(firstValue);
          operator = "";
          currentInput = "";
        }
      }
      // Clear (C)
      else if (val === "C" || val === "CE") {
        currentInput = "";
        operator = "";
        firstValue = null;
        updateDisplay("");
      }
      // Backspace (⌫)
      else if (val === "⌫") {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
      }
      // +/- (sign change)
      else if (val === "+/-") {
        if (currentInput) {
          currentInput = (parseFloat(currentInput) * -1).toString();
          updateDisplay(currentInput);
        }
      }
    });
  });

  // Math operations
  function operate(a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Error";
      default:
        return b;
    }
  }
});
