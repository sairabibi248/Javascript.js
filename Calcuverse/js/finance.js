export function initFinance() {
  const billInput = document.querySelector(".bill-input");
  const peopleInput = document.querySelector(".people-input");
  const billScreen = document.querySelector(".bill-screen input");
  const splitBtn = document.querySelector(".split-btn");

  function calculateSplit() {
    let bill = billInput.value;
    let people = peopleInput.value;

    if (bill === "" || people === "") {
      billScreen.value = "Enter value";
    } else {
      let totalBill = Number(bill);
      let totalPeople = Number(people);

      if (totalPeople <= 0) {
        billScreen.value = "Invalid people";
      } else {
        let result = totalBill / totalPeople;
        billScreen.value = +result.toFixed(2) + " Each";
      }
    }
  }

  splitBtn.addEventListener("click", calculateSplit);
}
