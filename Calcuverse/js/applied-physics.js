export function initAppliedPhysics() {
  const velocityDistInput = document.querySelector(".velocity-dist-input");
  const velocityTimeInput = document.querySelector(".velocity-time-input");
  const velocityScreen = document.querySelector(".velocity-screen-input");
  const velocityBtn = document.querySelector(".velocity-btn");

  function calculateVelocity() {
    let distance = velocityDistInput.value;
    let time = velocityTimeInput.value;

    if (distance === "" || time === "") {
      velocityScreen.value = "Enter value";
    } else {
      let d = Number(distance);
      let t = Number(time);

      if (t <= 0) {
        velocityScreen.value = "Invalid time";
      } else {
        // Formula: Velocity = Distance / Time
        let velocity = d / t;
        velocityScreen.value = velocity.toFixed(2) + " m/s";
      }
    }
  }

  velocityBtn.addEventListener("click", calculateVelocity);

  const accelViInput = document.querySelector(".accel-vi-input");
  const accelVfInput = document.querySelector(".accel-vf-input");
  const accelTimeInput = document.querySelector(".accel-time-input");
  const accelScreen = document.querySelector(".accel-screen-input");
  const accelBtn = document.querySelector(".accel-btn");

  function calculateAcceleration() {
    let vi = accelViInput.value;
    let vf = accelVfInput.value;
    let t = accelTimeInput.value;

    if (vi === "" || vf === "" || t === "") {
      accelScreen.value = "Enter value";
    } else {
      let initialV = Number(vi);
      let finalV = Number(vf);
      let time = Number(t);

      if (time <= 0) {
        accelScreen.value = "Invalid time";
      } else {
        let acceleration = (finalV - initialV) / time;
        accelScreen.value = acceleration.toFixed(2) + " m/s²";
      }
    }
  }

  accelBtn.addEventListener("click", calculateAcceleration);
}
