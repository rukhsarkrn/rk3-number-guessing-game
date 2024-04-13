#! /usr/bin/env node

console.log("\nΩΩΩΩΩΩΩ NUMBER GUESSING GAME ΩΩΩΩΩΩΩ\n");

import inquirer from "inquirer";

const answer = await inquirer.prompt([{
message : "Please Guess a Number between 1 to 6: ",
type: "number",
name: "userGuessedNumber",
}])

const randomNumber =   Math.floor( Math.random() * 6 + 1);
console.log("\nComputer Generated Number = ", randomNumber);

if (answer.userGuessedNumber === randomNumber)
    {console.log("\nCONGRATULATIONS !!! You Guessed the Right Number");}
else {
    console.log("\nOhh No !! You Guessed Wrong Number. \nPlease Try Again");
}