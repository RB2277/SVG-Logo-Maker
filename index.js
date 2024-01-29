const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')


const questions = [
    {
        type: 'input',
        message: 'What three letters would you like your logo to say?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like your letters to be?',
        name: 'lettercolor',
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color would you like your shape to be?',
        name: 'shapecolor',
    },
]

function writeToFile(filename, response) {
    fs.writeFile(filename, response, (err) => {
        err ? console.logg(err) : console.log("Your logo has been created!")
    })
}

function init(){
    inquirer
    .prompt(questions)
    .then((response) => {
        const fileName = "logo.svg"
        writeToFile(fileName, response)
    })
}

init()