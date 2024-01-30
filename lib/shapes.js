//Parent Shape class
class Shape{
    constructor(text, color, shapeChoice, shapecolor,) {
        this.text = text
        this.color = color
        this.shapeChoice = shapeChoice
        this.shapecolor = shapecolor
    }
    //Function that creates the desired HTML based off of user choices
    createLogo() {
        const logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeChoice}fill="${this.shapecolor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`

      return logo
    }
}
//Class that creates a circle object
class Circle extends Shape{
    constructor(text, color, shapecolor){
        const circle = '<circle cx="150" cy="100" r="80" '
        super(text, color, circle, shapecolor)

    }

}
//Class that creates a square object
class Square extends Shape{
    constructor(text, color, shapecolor){
        const square = `<rect x="90" y="40" width="120" height="120" `
        super(text, color, square, shapecolor)

    }

}
//Class that creates a triangle object
class Triangle extends Shape{
    constructor(text, color, shapecolor){
        const triangle = `<polygon points="150, 18 244, 182 56, 182" `
        super(text, color, triangle, shapecolor)

    }

}

//Exports each of the classes
module.exports = {
Shape,
Circle,
Square,
Triangle,
}