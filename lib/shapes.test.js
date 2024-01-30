//imports the shape classes
const shape = require('./shapes.js');

//Test to ensure a circular logo is created correctly
describe("Shape", () => {
    describe("Instantiation", () => {
        it('should Instantiate correctly', () => {
            const logo = new shape.Circle('RB2', 'blue', 'circle', 'red');
            expect(logo).toBeInstanceOf(shape.Circle)
        })
    })
    it('should create the correct svg string with a circle shape', () => {
        const logo = new shape.Circle('RB2', 'blue', 'red');
        const circleSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">RB2</text></svg>`
        expect(logo.createLogo()).toEqual(circleSvg)
    });
})

//Test to ensure a square logo is created correctly
describe("Shape", () => {
    describe("Instantiation", () => {
        it('should Instantiate correctly', () => {
            const logo = new shape.Square('G59', 'black', 'gray');
            expect(logo).toBeInstanceOf(shape.Square)
        })
    })
    it('should create the correct svg string with a square shape', () => {
        const logo = new shape.Circle('G59', 'black', 'gray');
        const circleSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="gray"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">G59</text></svg>`
        expect(logo.createLogo()).toEqual(circleSvg)
    });
})

//Test to ensure a triangular logo is created correctly
describe("Shape", () => {
    describe("Instantiation", () => {
        it('should Instantiate correctly', () => {
            const logo = new shape.Triangle('KBD', 'purple', 'yellow');
            expect(logo).toBeInstanceOf(shape.Triangle)
        })
    })
    it('should create the correct svg string with a triangular shape', () => {
        const logo = new shape.Circle('KBD', 'purple', 'yellow');
        const circleSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="yellow"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">KBD</text></svg>`
        expect(logo.createLogo()).toEqual(circleSvg)
    });
})