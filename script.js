"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let operation = prompt(
  "What do you want to do? (add, subtract, multiply, divide): ",
);

if (operation === "add") {
  let num1 = Number(prompt("Enter Num 1: "));
  let num2 = Number(prompt("Enter Num 2: "));
  let sum = num1 + num2;
  console.log("current sum", sum);

  while (true) {
    let userinput = prompt("Do you want to add another number? yes/no: ");
    if (userinput === "no") {
      break;
    } else if (userinput === "yes") {
      let nextnumber = Number(prompt("Enter next number: "));
      sum = sum + nextnumber;
      console.log("currentsum", sum);
    } else {
      console.log("type yes/no");
    }
  }
  console.log("Final Sum:", sum);
} else if (operation === "subtract") {
  let num1 = Number(prompt("Enter Num 1: "));
  let num2 = Number(prompt("Enter Num 2: "));
  let result = num1 - num2;
  console.log("current result", result);

  while (true) {
    let userinput = prompt("Do you want to subtract another number? yes/no: ");
    if (userinput === "no") {
      break;
    } else if (userinput === "yes") {
      let nextnumber = Number(prompt("Enter next number: "));
      result = result - nextnumber;
      console.log("current result", result);
    } else {
      console.log("type yes/no");
    }
  }
  console.log("Final Result:", result);
} else if (operation === "multiply") {
  let num1 = Number(prompt("Enter Num 1: "));
  let num2 = Number(prompt("Enter Num 2: "));
  let product = num1 * num2;
  console.log("current product", product);

  while (true) {
    let userinput = prompt("Do you want to multiply another number? yes/no: ");
    if (userinput === "no") {
      break;
    } else if (userinput === "yes") {
      let nextnumber = Number(prompt("Enter next number: "));
      product = product * nextnumber;
      console.log("current product", product);
    } else {
      console.log("type yes/no");
    }
  }
  console.log("Final Product:", product);
} else if (operation === "divide") {
  let num1 = Number(prompt("Enter Num 1: "));
  let num2 = Number(prompt("Enter Num 2: "));

  if (num2 === 0) {
    console.log("Error: Cannot divide by zero!");
  } else {
    let result = num1 / num2;
    console.log("current result", result);

    while (true) {
      let userinput = prompt(
        "Do you want to divide by another number? yes/no: ",
      );
      if (userinput === "no") {
        break;
      } else if (userinput === "yes") {
        let nextnumber = Number(prompt("Enter next number: "));
        if (nextnumber === 0) {
          console.log("Error: Cannot divide by zero! Try a different number.");
        } else {
          result = result / nextnumber;
          console.log("current result", result);
        }
      } else {
        console.log("type yes/no");
      }
    }
    console.log("Final Result:", result);
  }
} else {
  console.log(
    "Invalid operation! Please type add, subtract, multiply, or divide.",
  );
}
