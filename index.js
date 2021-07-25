const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown');

const promptUser = [
    {
        type: "input",
        name: "title",
        message: "Enter Project Title",
    },
    {
        type: "input",
        name: "description",
        message: "Enter Project Description",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter Project Installation Instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter Usage Information",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter Your Projects Contribution Guidelines",
    },
    {
        type: "input",
        name: "test",
        message: "Enter Test Instructions",
    },
    {
        type: "checkbox",
        message: "Licensing Options",
        name: "license",
        choices: ["MIT","Apache2.0","GNU Public v3.0"]
    },
    {
        type: "input",
        name: "username",
        message: "Enter Github Username",
    },
    {
        type: "input",
        name: "email",
        message: "Enter Email Address",

    }
];

function init() {
    inquirer.prompt(promptUser).then((data) => {
        fs.writeFile('newREADME.md', generateMarkdown(data), (err) => err ? console.error(err) : console.log("It Worked!"))
    })
};

init();