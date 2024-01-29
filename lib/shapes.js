class Shape{
    constructor(text, color, shapecolor) {
        this.text = text
        this.color = color
        this.shapecolor = shapecolor
    }
    createLogo() {
        const logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}fill="${this.shapecolor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`

      return logo
    }
}

class Circle extends Shape{
    constructor(text, color, shape, shapecolor){
        super(text, color, shapecolor)
        this.shape = `<circle cx="150" cy="100" r="80" `
    }

}
class Square extends Shape{
    constructor(text, color, shape, shapecolor){
        super(text, color, shapecolor)
        this.shape = `<rect x="90" y="40" width="120" height="120" `
    }

}
class Triangle extends Shape{
    constructor(text, color, shape, shapecolor){
        super(text, color, shapecolor)
        this.shape = `<polygon points="150, 18 244, 182 56, 182 `
    }

}

module.exports = {
Shape,
Circle,
Square,
Triangle,
}