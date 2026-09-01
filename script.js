let screen = document.querySelector(".calculator-screen input");
let btns = document.querySelectorAll(".buttons button");

btns[0].onclick = function () {
  screen.value = screen.value + "1";
};
btns[1].onclick = function () {
  screen.value = screen.value + "2";
};
btns[2].onclick = function () {
  screen.value = screen.value + "3";
};
btns[3].onclick = function () {
  screen.value = screen.value + "/";
};
btns[4].onclick = function () {
  screen.value = screen.value + "4";
};
btns[5].onclick = function () {
  screen.value = screen.value + "5";
};
btns[6].onclick = function () {
  screen.value = screen.value + "6";
};
btns[7].onclick = function () {
  screen.value = screen.value + "+";
};
btns[8].onclick = function () {
  screen.value = screen.value + "7";
};
btns[9].onclick = function () {
  screen.value = screen.value + "8";
};
btns[10].onclick = function () {
  screen.value = screen.value + "9";
};
btns[11].onclick = function () {
  screen.value = screen.value + "-";
};
btns[12].onclick = function () {
  screen.value = screen.value + "0";
};

btns[13].onclick = function () {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
};
btns[14].onclick = function () {
  screen.value = screen.value + "*";
};
btns[15].onclick = function () {
  screen.value = "";
};