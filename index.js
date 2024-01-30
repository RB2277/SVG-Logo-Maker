const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes')



const questions = [
    {
        type: 'input',
        message: 'What three letters would you like your logo to say?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like your letters to be?',
        name: 'color',
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

function createSvg(text, color, logoShape, shapecolor) {
    let requestedLogo;

    switch(logoShape) {
        case 'circle':
            requestedLogo = new shape.Circle(text, color, shapecolor)
            break;
        case 'square':
            requestedLogo = new shape.Square(text, color, shapecolor)
            break;
         case 'triangle':
            requestedLogo = new shape.Triangle(text, color, shapecolor)
            break;
        default:
            console.log("There was an error creating your shape!")
    }

    return requestedLogo.createLogo()
}


function writeToFile(filename, response) {
    const logo = createSvg(response.text, response.color, response.shape, response.shapecolor)
    fs.writeFile(filename, logo, (err) => {
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