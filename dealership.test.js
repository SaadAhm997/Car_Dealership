const Car = require('./Car');
const Dealership = require('./Dealership');
let dealership;

beforeEach(() => {
    name = "S dealers"
    max_cars_in_stock = 10
    current_stock_cars = new Car("Ferrari", 100000, "Diesel"),
                        new Car("Mercedes", 75000, "hybrid");
})

describe('Test for stock count', () => {
    test('Count cars in stock', () => {
        const expected = 2;
        expect(dealership.current_stock_cars).toBe(expected);
    })
})