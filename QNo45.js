/*Question No.45
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
function createCar(manufacturer, modelName, ...options) {
    var car = {
        manufacturer,
        modelName,
    };
    // Merge the additional options into the car object
    for (const option of options) {
        Object.assign(car, option);
    }
    return car;
}
// Call the function with required and optional information
const myCar = createCar("Toyota", "Camry", { color: "Silver", year: 2023 });
// Print the resulting car object
console.log(myCar);
export {};
