export function initMetricesShapes() {
  const circleRadiusInput = document.querySelector(".circle-radius-input");
  const circleScreen = document.querySelector(".circle-screen-input");
  const circleBtn = document.querySelector(".circle-btn");

  function calculateCircleArea() {
    let radius = circleRadiusInput.value;

    if (radius === "") {
      circleScreen.value = "Enter value";
    } else {
      let r = Number(radius);

      if (r < 0) {
        circleScreen.value = "Invalid radius";
      } else {
        // Formula: Area = π * r²
        let area = Math.PI * r * r;
        circleScreen.value = area.toFixed(2) + " units²";
      }
    }
  }
  /*Circle Area*/

  circleBtn.addEventListener("click", calculateCircleArea);
  const triangleBaseInput = document.querySelector(".triangle-base-input");
  const triangleHeightInput = document.querySelector(".triangle-height-input");
  const triangleScreen = document.querySelector(".triangle-screen-input");
  const triangleBtn = document.querySelector(".triangle-btn");

  function calculateTriangleArea() {
    let base = triangleBaseInput.value;
    let height = triangleHeightInput.value;

    if (base === "" || height === "") {
      triangleScreen.value = "Enter value";
    } else {
      let b = Number(base);
      let h = Number(height);

      if (b <= 0 || h <= 0) {
        triangleScreen.value = "Invalid dimensions";
      } else {
        // Formula: Area = 0.5 * Base * Height
        let area = 0.5 * b * h;
        triangleScreen.value = area.toFixed(2) + " units²";
      }
    }
  }

  triangleBtn.addEventListener("click", calculateTriangleArea);
}
