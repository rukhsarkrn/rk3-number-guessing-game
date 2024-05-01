#! /usr/bin/env node

console.log(chalk.bgRed("\nΩΩΩΩΩΩΩ NUMBER GUESSING GAME ΩΩΩΩΩΩΩ\n"));

import inquirer from "inquirer";
import chalk from "chalk";
let attempt=5;
while(attempt > 0){

const answer = await inquirer.prompt([
    {
message :( chalk.blue(`(Attempt left ${attempt}) \n Guess Number Between 1 to 6`)),
type: "number",
name: "userGuessedNumber",
}
])

const randomNumber =   Math.floor( Math.random() * 6 + 1);
console.log("\nComputer Generated Number = ", randomNumber);

if (answer.userGuessedNumber === randomNumber)
    {console.log(chalk.green("\nCONGRATULATIONS !!! You Guessed the Right Number"));
   break; }
 
else
{console.log("\nOhh No !! You Guessed Wrong Number.")
if (attempt>1)
{console.log("Try Again \n")}
else{ console.log("Your 5 Round Has Complete")}
}

(attempt--)

}

