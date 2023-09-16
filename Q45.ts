/*Question No.44
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): Record<string, any> {
    const car: Record<string, any> = {
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
  