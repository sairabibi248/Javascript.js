const screen = document.querySelector(".calculator-screen input");
const btns = document.querySelectorAll(".buttons button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.dataset.value;
    const action = btn.dataset.action;
    if (action === "clear") {
      screen.value = "";
    } else if (action === "calculate") {
      try {
        screen.value = eval(screen.value);
      } catch {
        screen.value = "Error";
      }
    } else {
      screen.value += value;
    }
  });
});
