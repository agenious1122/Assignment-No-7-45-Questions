/*Question No.35
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!*/
console.log("---------------------------------------------------------------------------------------------------");
var animalNames = ["Cat", "Dog", "Lion"];
for (let name of animalNames) {
    console.log(name);
}
console.log("---------------------------------------------------------------------------------------------------");
var animalNames = ["Cat", "Dog", "Lion"];
for (let name of animalNames)
    if (name === "Cat") {
        console.log(name, ",Graceful and independent, a cat's curiosity dances in its eyes.");
    }
    else if (name === "Dog") {
        console.log(name, ",with their unwavering loyalty and boundless affection, truly are humanity's best friends.");
    }
    else if (name === "Lion") {
        console.log(name, ",with its golden mane and regal presence, symbolizes strength and courage in the animal kingdom.");
    }
console.log("---------------------------------------------------------------------------------------------------");
console.log("Cats, dogs, and lions share an innate predatory instinct and possess sharp claws, keen senses, and a strong social hierarchy within their respective species.");
console.log("---------------------------------------------------------------------------------------------------");
export {};
