//This includes the required packages for the application
const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes')


//Array of inquirer questions for the user to answer
const questions = [
    {
        type: 'input',
        message: 'What three letters would you like your logo to say?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like your letters to be? (Color name or Hexadecimal)',
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
        message: 'What color would you like your shape to be? (Color name or Hexadecimal)',
        name: 'shapecolor',
    },
]
//Function that takes user input from the inquirer array and then calls the createLogo function to return a logo
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

//Function that writes the logo.svg file after it has received it from the createSvg function
function writeToFile(filename, response) {
    const logo = createSvg(response.text, response.color, response.shape, response.shapecolor)
    fs.writeFile(filename, logo, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg")
    })
}

//Function that uses inquirer to ask the questions array
function init(){
    inquirer
    .prompt(questions)
    .then((response) => {
        const fileName = "logo.svg"
        writeToFile(fileName, response)
    })
}
//Calls the init function above
init()