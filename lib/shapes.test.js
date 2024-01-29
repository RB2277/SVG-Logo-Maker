const shape = require('./shapes.js');

describe("Shape", () => {
    describe("Instantiation", () => {
        it('should Instantiate correctly', () => {
            const logo = new shape.Circle('RB2', 'blue', 'circle', 'red');
            expect(logo).toBeInstanceOf(shape.Circle)
        })
    })
    it('should create the correr svg string with a circle shape', () => {
        const logo = new shape.Circle('RB2', 'blue', 'red');
        const circleSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">RB2</text></svg>`
        expect(logo.createLogo()).toEqual(circleSvg)
    });
})