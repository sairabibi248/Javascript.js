"use strict";
const ps = require("prompt-sync");
const prompt = ps();
//sum
let num1 = Number(prompt("Enter Num 1:"));
let num2 = Number(prompt("Enter Num 2:"));
function add(num1, num2) {
  return num1 + num2;
}
let sum = add(num1, num2);
console.log("sum:", sum);

//subtraction
function subtract(num1, num2) {
  return num1 - num2;
}
let subtraction = subtract(num1, num2);
console.log("subtrct:", subtraction);

//Multiplication
function multiply(num1, num2) {
  return num1 * num2;
}
let mulResult = multiply(num1, num2);
console.log("multiply:", mulResult);

//Division
function divide(num1, num2) {
  if (num2 === 0) {
    return "Error";
  }
  return num1 / num2;
}
let division = divide(num1, num2);
console.log("divide:", division);
