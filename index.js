"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var randomNumber = Math.floor(100000 + Math.random() * 80000);
var myBalance = 0;
console.log(chalk_1.default.bgBlueBright("\n\t************* Welcome to Student Management System**************\n\t"));
var student_interface = await inquirer_1.default.prompt({
    name: "firstQuestion",
    type: "list",
    message: "what do want to do",
    choices: ["Create new student", "Exit"]
});
if (student_interface.firstQuestion == "Create new student") {
    await inquirer_1.default.prompt({
        name: "students",
        message: "Enter name",
        type: "input"
    });
}
var studentName = "students";
var student = await inquirer_1.default.prompt({
    name: "secondQuestion",
    type: "list",
    message: "which course  do you want to do?",
    choices: ["python", "Typescript", "Javascript"]
});
if (student.secondQuestion == "python") {
    await inquirer_1.default.prompt({
        name: "course detail",
        type: "input",
        message: "course fee : 4000"
    });
}
console.log("Balance = 0");
var payment_method = await inquirer_1.default.prompt([{
        name: "payment",
        type: "list",
        choices: ["Bank transfer", "jazz cash", "easy paisa"],
        message: " select your payment method"
    }]);
if (payment_method.payment === " Bank transfer") {
    console.log("Transfer money 4000");
}
else {
    console.log("Transfer money 4000");
}
if (student.secondQuestion == "Typescript") {
    await inquirer_1.default.prompt({
        name: "course detail",
        type: "input",
        message: "course fee : 4000"
    });
}
console.log("Balance = 0");
if (payment_method.payment === " Bank transfer") {
    console.log("Transfer money 4000");
}
else {
    console.log("Transfer money 4000");
}
if (student.secondQuestion === "Javascript") {
    await inquirer_1.default.prompt([
        {
            name: "course detail",
            type: "input",
            message: "course fee : 4000"
        }
    ]);
}
console.log("Balance = 0");
if (payment_method.payment === " Bank transfer") {
    console.log("Transfer money 4000");
}
else {
    console.log("Transfer money 4000");
}
console.log(chalk_1.default.greenBright("Congractulation..! you have successfully  enroll  in this course"));
var studentCard = await inquirer_1.default.prompt({
    name: "card",
    type: "confirm",
    message: "Do you want to get your card?",
    default: "false"
});
console.log(chalk_1.default.bgGray("***********************STATUS**********************"));
console.log("Student Name: ".concat(student_interface.studentName));
if (student.secondQuestion == "python") {
    console.log(" Course Name: python");
}
else if (student.secondQuestion == "Typescript") {
    console.log("Course Name: Typescript");
}
else if (student.secondQuestion == "Javascript") {
    console.log(" Course Name :Javascript");
}
console.log("Student ID: ".concat(randomNumber));
console.log("Tution fees paid: 4000");
