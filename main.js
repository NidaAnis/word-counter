#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence to count words"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word counts are ${words.length}`);
