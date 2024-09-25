const { add, subtract, PI } = require('./utils/mathOperations');
const vehicleController = require('./controllers/vehicleController');

console.log(`: 5 + 3 = ${add(5, 3)}`);
console.log(`Subtract: 5 - 3 = ${subtract(5, 3)}`);
console.log(`PI: ${PI}`);