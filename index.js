#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Please Enter Your First Number"
    },
    {
        name: "num2",
        type: "number",
        message: "Please Enter Your Second Number"
    },
    {
        name: "operator",
        type: "list",
        message: "Please Select The Operator: ",
        choices: ['+', '-', '*', '/']
    }
]);
let number1 = answers.num1;
let number2 = answers.num2;
let opt = answers.operator;
if (opt === "+") {
    console.log(`${number1} ${opt} ${number2} = ${number1 + number2}`);
}
else if (opt === "-") {
    console.log(`${number1} ${opt} ${number2} = ${number1 - number2}`);
}
else if (opt === "*") {
    console.log(`${number1} ${opt} ${number2} = ${number1 * number2}`);
}
else if (opt === "/") {
    console.log(`${number1} ${opt} ${number2} = ${number1 / number2}`);
}
