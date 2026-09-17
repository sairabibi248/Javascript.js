export function initScientificCalculator() {
  const sciScreen = document.querySelector(
    '[data-content="scientific-calculator"] .calculator-screen input',
  );
  const sciBtns = document.querySelectorAll(
    '[data-content="scientific-calculator"] .buttons button',
  );

  let isDegree = true; // Default Mode: Degree (DEG)

  function getFactorial(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  sciBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const value = btn.dataset.value;
      const action = btn.dataset.action;

      if (action === "clear") {
        sciScreen.value = "";
      } else if (action === "dc") {
        sciScreen.value = sciScreen.value.slice(0, -1);
      } else if (action === "!") {
        let num = Number(sciScreen.value);
        sciScreen.value = getFactorial(num);
      } else if (action === "toggle") {
        // DEG aur RAD toggle logic
        isDegree = !isDegree;

        // Button text change ho kar dikhayega ke kaun sa mode active hai
        btn.textContent = isDegree ? "DEG" : "RAD";
      } else if (action === "calculate") {
        try {
          let expression = sciScreen.value;

          // Trigonometric Functions
          if (isDegree) {
            // Degree Mode: Angle ko (Math.PI / 180) se multiply karein
            expression = expression.replaceAll(
              "sin(",
              "Math.sin((Math.PI/180)*",
            );
            expression = expression.replaceAll(
              "cos(",
              "Math.cos((Math.PI/180)*",
            );
            expression = expression.replaceAll(
              "tan(",
              "Math.tan((Math.PI/180)*",
            );
          } else {
            // Radian Mode: Direct Math functions
            expression = expression.replaceAll("sin(", "Math.sin(");
            expression = expression.replaceAll("cos(", "Math.cos(");
            expression = expression.replaceAll("tan(", "Math.tan(");
          }

          expression = expression.replaceAll("log(", "Math.log10(");
          expression = expression.replaceAll("ln(", "Math.log(");
          expression = expression.replaceAll("√(", "Math.sqrt(");
          expression = expression.replaceAll("∛(", "Math.cbrt(");

          sciScreen.value = eval(expression);
        } catch {
          sciScreen.value = "Error";
        }
      } else {
        sciScreen.value += action || value;
      }
    });
  });
}
