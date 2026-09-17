export function initDeveloperTools() {
  const textInput = document.querySelector(".text-input");
  const textScreen = document.querySelector(".text-screen-input");
  const uppercaseBtn = document.querySelector(".uppercase-btn");
  const lowercaseBtn = document.querySelector(".lowercase-btn");

  function convertToUpperCase() {
    let text = textInput.value;

    if (text === "") {
      textScreen.value = "Enter text";
    } else {
      textScreen.value = text.toUpperCase();
    }
  }

  function convertToLowerCase() {
    let text = textInput.value;

    if (text === "") {
      textScreen.value = "Enter text";
    } else {
      textScreen.value = text.toLowerCase();
    }
  }
  uppercaseBtn.addEventListener("click", convertToUpperCase);
  lowercaseBtn.addEventListener("click", convertToLowerCase);
}
