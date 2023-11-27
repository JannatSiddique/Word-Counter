import inquirer from "inquirer";

const word: {
   sentence: string
} = await inquirer.prompt([{
    type: "input",
    name:"sentence",
    message: "Type your message here to count the words"
}])
const sntn= word.sentence.split(" ")
console.log(`Your sentence word count is ${sntn.length}`);