const inquirer = require("inquirer");
const fs = require('fs');

const generatorMarkdown = require('./utils/generateMarkdown');


/// Array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents" 
}, 
{
    type: "input",
    message: "What was your motivation?Why did you build this project? (Note: the answer is not Because it was a homework assignment)",
    name: "Motivation"  
}, {
    type: "input",
    message: "What problem does it solve?",
    name: "Description"     
},  
{
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "Installation"     
},  {
    type: "input",
    message: " How is the app used? Give instructions",
    name: "Usage"   
}, {
    type: "input",
    message: "Do you have collaborators? or did you used any third-party assets that require attribution?",
    name: "Credits" 
}, {
    type: 'checkbox', 
            name: 'license',
            choices: ["MIT", "GPLv3", "GPL"],
            message: 'Pick your License.'
},
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}





// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })

}

// function call to initialize program
init();