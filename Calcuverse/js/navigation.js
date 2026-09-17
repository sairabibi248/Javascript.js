export function initNavigation() {
  const buttons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".content-section");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      sections.forEach(function (sec) {
        sec.classList.remove("active");
      });

      button.classList.add("active");
      const targetName = button.getAttribute("data-target");
      const targetSection = document.querySelector(
        `[data-content="${targetName}"]`,
      );

      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });

  const calcButtons = document.querySelectorAll(".action-btn[data-calc]");
  const contentSections = document.querySelectorAll(".content-section");
  const backButtons = document.querySelectorAll(".action-btn[data-back]");

  calcButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const calcType = event.currentTarget.getAttribute("data-calc");

      contentSections.forEach(function (sec) {
        sec.classList.remove("active");
      });

      let targetView =
        document.querySelector(`[data-content="${calcType}-calculator"]`) ||
        document.querySelector(`[data-content="${calcType}"]`);

      if (targetView) {
        targetView.classList.add("active");
      }
    });
  });

  backButtons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const backTarget = event.currentTarget.getAttribute("data-back");

      contentSections.forEach(function (sec) {
        sec.classList.remove("active");
      });

      const parentSection = document.querySelector(
        `[data-content="${backTarget}"]`,
      );
      if (parentSection) {
        parentSection.classList.add("active");
      }
    });
  });
}
