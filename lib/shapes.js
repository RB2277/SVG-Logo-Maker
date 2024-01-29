class Shape{
    constructor(text, color) {
        this.text = text
        this.color = color
    }
    createLogo() {
        console.log(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="green" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
      </svg>`)
    }
}

class Circle extends Shape{
    constructor(text, color, shape){
        super(text, color)
        this.shape = shape
    }

}
class Square extends Shape{
    constructor(text, color, shape){
        super(text, color)
        this.shape = shape
    }

}
class Triangle extends Shape{
    constructor(text, color, shape){
        super(text, color)
        this.shape = shape
    }

}

module.exports = {
Shape,
Circle,
Square,
Triangle,
}



