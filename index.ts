#! /usr/bin/env node 

// Importing inquirer and chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display colourfull Welcome massage
console.log(chalk.bold.cyanBright("\n \t\t anusshahid - Word Counter"));
console.log("=" .repeat(60));

// Prompt the user to enter a Sentence
let answer = await inquirer.prompt([
 {
      name: "sentence",
      type: "input",
      message: "Enter a Sentence",   
      }   
]);

// Trimming the sentences and splitting it into words based on "spaces"
let words = answer.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Word::"));
console.log(words);     
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));



      










