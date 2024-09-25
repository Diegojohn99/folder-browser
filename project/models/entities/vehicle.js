class Vehicle{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    getDetails(){
        return `Su marca es: ${this.brand} y su modelo es ${this.model}`
    }
}
module.exports = Vehicle;