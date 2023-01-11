const Car = require('./Car');

const Dealership = function(name, max_cars_in_stock, current_stock_cars){
    this.name = name;
    this.max_cars_in_stock = max_cars_in_stock;
    this.current_stock_cars = current_stock_cars;
}
Dealership.prototype.count_stock = function(){
    return this.current_stock_cars.length;
}
Dealership.prototype.add_car = function(){
    return this.current_stock_cars.push(Car);
}
