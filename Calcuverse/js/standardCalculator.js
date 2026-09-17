export function initStandardCalculator() {
  const stdScreen = document.querySelector(
    '[data-content="standard-calculator"] .calculator-screen input',
  );
  const stdBtns = document.querySelectorAll(
    '[data-content="standard-calculator"] .buttons button',
  );

  stdBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const value = btn.dataset.value;
      const action = btn.dataset.action;

      if (action === "clear") {
        stdScreen.value = "";
      } else if (action === "calculate") {
        try {
          stdScreen.value = eval(stdScreen.value);
        } catch {
          stdScreen.value = "Error";
        }
      } else {
        stdScreen.value += action || value;
      }
    });
  });
}
