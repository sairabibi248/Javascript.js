const screen = document.querySelector(".calculator-screen input");
const btns = document.querySelectorAll(".buttons button");

function getFactorial(n) {
  if (n < 0) return "Error";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function displayFactorial() {
  let num = Number(screen.value);
  let factResult = getFactorial(num);
  screen.value = factResult;
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (action === "clear") {
      screen.value = "";
    } else if (action === "dc") {
      screen.value = screen.value.slice(0, -1);
    } else if (action === "!") {
      displayFactorial();
    } else if (action === "calculate") {
      try {
        let expression = screen.value;

        expression = expression.replaceAll("sin(", "Math.sin(");
        expression = expression.replaceAll("cos(", "Math.cos(");
        expression = expression.replaceAll("tan(", "Math.tan(");
        expression = expression.replaceAll("log(", "Math.log10(");
        expression = expression.replaceAll("ln(", "Math.log(");
        expression = expression.replaceAll("√(", "Math.sqrt(");
        expression = expression.replaceAll("∛(", "Math.cbrt(");

        screen.value = eval(expression);
      } catch {
        screen.value = "Error";
      }
    } else {
      screen.value += action || value;
    }
  });
});
