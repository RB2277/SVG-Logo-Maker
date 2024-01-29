const inquirer = require('inquirer');
const fs = require('fs');


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