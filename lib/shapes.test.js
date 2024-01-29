const shape = require('./shapes.js');

describe("Shape", () => {
    describe("Instantiation", () => {
        it('should Instantiate correctly', () => {
            const logo = new shape.Circle('RB2', 'blue', 'circle', 'red');
            expect(logo).toBeInstanceOf(shape.Circle)
        })
    })
})