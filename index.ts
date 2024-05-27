import inquirer from "inquirer";
import chalk from "chalk";

let randomNumber: number = Math.floor(100000+Math.random()*80000)
let myBalance: number =0

console.log(chalk.bgBlueBright("\n\t************* Welcome to Student Management System**************\n\t"));


let student_interface = await inquirer.prompt({
    
    name: "firstQuestion",
    type:"list",
    message:"what do want to do",
    choices:["Create new student","Exit"]


})
if (student_interface.firstQuestion == "Create new student"){
         await inquirer.prompt(
            
                {
                    name:"students",
                    message:"Enter name",
                    type:"input"

                }
            
         )
}

 


let student = await inquirer.prompt({
    name: "secondQuestion",
    type: "list",
    message: "which course  do you want to do?",
    choices: ["python","Typescript","Javascript"]

})


    

if (student.secondQuestion == "python"){
    await inquirer.prompt(
        
           {
               name: "course detail",
               type: "input",
               message: "course fee : 4000" 
            }
        
    )
}

console.log ("Balance = 0");
    

let  payment_method = await inquirer.prompt([{
    name: "payment",
    type:"list",
    choices:["Bank transfer","jazz cash","easy paisa"],
    message: " select your payment method"

}])
if (payment_method.payment === " Bank transfer") {
    console.log ("Transfer money 4000")
} else {
    console.log("Transfer money 4000")
}


if (student.secondQuestion == "Typescript"){


    await inquirer.prompt(
        
           {
               name: "course detail",
               type: "input",
               message: "course fee : 4000" 
            }
        
    )
}

console.log ("Balance = 0");

if (payment_method.payment === " Bank transfer") {
    console.log ("Transfer money 4000")
} else {
    console.log("Transfer money 4000")
}
if (student.secondQuestion ==="Javascript"){ 
    await inquirer.prompt(
    [
       {
           name: "course detail",
           type: "input",
           message: "course fee : 4000" 
        }
    ]
)
}

console.log ("Balance = 0");

if (payment_method.payment === " Bank transfer") {
console.log ("Transfer money 4000")
} else {
console.log("Transfer money 4000")
}

console.log(chalk.greenBright("Congractulation..! you have successfully  enroll  in this course"));
 
 let studentCard = await inquirer.prompt(
    
        {
            name : "card",
            type: "confirm",
            message: "Do you want to get your card?",
            default: "false"
        }
    
)
console.log(chalk.bgGray("***********************STATUS**********************"));


console.log(`Student Name: ${student_interface.students}`)
if (student.secondQuestion == "python"){
    console.log(" Course Name: python");
    
} else if (student.secondQuestion == "Typescript"){
    console.log("Course Name: Typescript");
    
} else if ( student.secondQuestion == "Javascript") {
    console.log(" Course Name :Javascript");
    
}
console.log(`Student ID: ${randomNumber}`);

console.log("Tution fees paid: 4000");








