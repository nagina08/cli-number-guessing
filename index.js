#! /usr/bin/evn node
import inquirer from "inquirer";
// 1) Computer will generate a random number -done
// 2) User input for guessing number - done
// 3) Compare user input with computer generated number and show result -done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "Please guess a number between 1-6",
        type: "number",
        messagee: "userGuessedNumber",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulation! you guessed right number:");
}
else {
    console.log("You guessed wrong number");
}
;
