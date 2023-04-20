const readline = require("readline-sync")
var num1 =readline.question ("Please enter your first number ")
var num2 =readline.question ("Please enter your second number ")
var op = ["add", "sub", "div", "multi"];
var index = readline.keyInSelect(op, "Please choose a opetation");
var result = "";


if (op[index] == "add") {
  result = parseInt(num1) + parseInt(num2)
} else if (op[index] == "sub") {
  result = num1-num2
} else if (op[index] == "div") {
  result = num1/num2
} else if (op[index] == "multi") {
  result = num1*num2
} 
console.log("The answer is " +result);