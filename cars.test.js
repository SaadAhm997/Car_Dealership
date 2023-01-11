const Car = require('./Car');
let car;

beforeEach(() => {
    car = new Car("Ferrari", 100000, "Diesel");
})

describe('Testing Car class manufacturer', () => {
    test('Check manufacturer',              () => {
        expect(car.manufacturer).toBe("Ferrari"); })
    })

describe('Testing Car class price', () => {
    test('Check price',             () => {
        expect(car.price).toBe(100000); })
    })

describe('Testing Car class engine', () => {
    test('Check engine',             () => {
            expect(car.engine_type).toBe("Diesel"); })
    })