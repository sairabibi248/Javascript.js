export function initHealthUtility() {
  const weightInput = document.querySelector(".weight-input");
  const heightInput = document.querySelector(".height-input");
  const bmiScreen = document.querySelector(".bmi-screen-input");
  const bmiBtn = document.querySelector(".bmi-btn");

  function calculateBMI() {
    let weight = weightInput.value;
    let height = heightInput.value;

    const genderInput = document.querySelector('input[name="gender"]:checked');

    if (weight === "" || height === "") {
      bmiScreen.value = "Enter value";
      return;
    }

    if (!genderInput) {
      bmiScreen.value = "Select gender";
      return;
    }

    let w = Number(weight);
    let h = Number(height);
    let gender = genderInput.value;

    if (h <= 0 || w <= 0) {
      bmiScreen.value = "Invalid input";
      return;
    }

    let bmi = w / (h * h);
    let category = "";

if (gender === "male" || gender === "female") {
      if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Healthy Weight";
      } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Overweight";
      } else if (bmi >= 30.0 && bmi <= 34.9) {
        category = "Obesity (Class 1)";
      } else {
        category = "Obesity (Class 2 High)";
      }
    }

    bmiScreen.value = `${bmi.toFixed(1)} (${category})`;
  }

  bmiBtn.addEventListener("click", calculateBMI);

  /*Water Intake*/

  const waterWeightInput = document.querySelector(".water-weight-input");
  const waterScreen = document.querySelector(".water-screen-input");
  const waterBtn = document.querySelector(".water-btn");

  function calculateWater() {
    let weight = waterWeightInput.value;

    if (weight === "") {
      waterScreen.value = "Enter value";
    } else {
      let w = Number(weight);

      if (w <= 0) {
        waterScreen.value = "Invalid weight";
      } else {
        // Standard formula: 33 ml per kg of body weight converted to liters
        let waterIntake = w * 0.033;
        waterScreen.value = waterIntake.toFixed(1) + " Liters / day";
      }
    }
  }

  waterBtn.addEventListener("click", calculateWater);
}
