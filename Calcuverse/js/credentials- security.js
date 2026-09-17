export function initCredentials() {
  const passwordInput = document.querySelector(".password-input");
  const passwordScreen = document.querySelector(".password-screen-input");

  function checkPasswordStrength() {
    let password = passwordInput.value;

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    passwordScreen.classList.remove("weak", "medium", "strong");

    if (password === "") {
      passwordScreen.value = "";
    } else if (hasUpper && hasLower && hasNumber && hasSymbol) {
      passwordScreen.value = "Strong";
      passwordScreen.classList.add("strong");
    } else if (hasUpper && hasLower && hasNumber && !hasSymbol) {
      passwordScreen.value = "Medium";
      passwordScreen.classList.add("medium");
    } else {
      passwordScreen.value = "Weak";
      passwordScreen.classList.add("weak");
    }
  }

  passwordInput.addEventListener("input", checkPasswordStrength);
  const encoderInput = document.querySelector(".encoder-input");
  const encoderScreen = document.querySelector(".encoder-screen-input");
  const encodeBtn = document.querySelector(".encode-btn");
  /*E26 Encode*/

  function encodeText() {
    let text = encoderInput.value;

    if (text === "") {
      encoderScreen.value = "Enter text";
    } else {
      encoderScreen.value = btoa(text);
    }
  }

  encodeBtn.addEventListener("click", encodeText);
}
