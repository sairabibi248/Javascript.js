export function initConverters() {
  const tempInput = document.querySelector(".temp-input");
  const tempScreen = document.querySelector(".temp-screen input");
  const cToFBtn = document.querySelector(".c-to-f-btn");
  const fToCBtn = document.querySelector(".f-to-c-btn");

  function celsiusToFahrenheit() {
    let num = tempInput.value;

    if (num === "") {
      tempScreen.value = "Enter value";
    } else {
      let result = (Number(num) * 9) / 5 + 32;
      tempScreen.value = result + " °F";
    }
  }

  function fahrenheitToCelsius() {
    let num = tempInput.value;

    if (num === "") {
      tempScreen.value = "Enter value";
    } else {
      let result = ((Number(num) - 32) * 5) / 9;
      tempScreen.value = result + " °C";
    }
  }

  cToFBtn.addEventListener("click", celsiusToFahrenheit);
  fToCBtn.addEventListener("click", fahrenheitToCelsius);

  const speedInput = document.querySelector(".speed-input");
  const speedScreen = document.querySelector(".speed-screen input");
  const kmhToMphBtn = document.querySelector(".kmh-to-mph-btn");
  const mphToKmhBtn = document.querySelector(".mph-to-kmh-btn");

  function convertKmhToMph() {
    let num = speedInput.value;

    if (num === "") {
      speedScreen.value = "Enter value";
    } else {
      // 1 km/h = 0.621371 mph
      let result = Number(num) * 0.621371;
      speedScreen.value = result + " Mph";
    }
  }

  function convertMphToKmh() {
    let num = speedInput.value;

    if (num === "") {
      speedScreen.value = "Enter value";
    } else {
      // 1 mph = 1.60934 km/h
      let result = Number(num) * 1.60934;
      speedScreen.value = result + " Km/h";
    }
  }

  kmhToMphBtn.addEventListener("click", convertKmhToMph);
  mphToKmhBtn.addEventListener("click", convertMphToKmh);
}
