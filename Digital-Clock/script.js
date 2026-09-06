function clock() {
  const monthname = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  let today = new Date();

  let day = today.getDate();
  let month = monthname[today.getMonth()];
  let year = today.getFullYear();

  document.querySelector(".date p").textContent = `${day} ${month}${year}`;

  let hours = today.getHours();
  let mins = today.getMinutes();
  let sec = today.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector(".hours").textContent = hours;
  document.querySelector(".mins").textContent = mins;
  document.querySelector(".sec").textContent = sec;
}
let inter = setInterval(clock, 400);
