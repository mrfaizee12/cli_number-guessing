#! /usr/bin/env node
import inquirer from "inquirer";
// // 1) Computer will generate a randam number
// // 2) User input for guessing number
// // 3) Compare user input with computer generated number and show result
const randamNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessing Game");
// console.log(randamNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess  a number between 1-6: ",
    }
]);
if (answers.userGuessedNumber === randamNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
