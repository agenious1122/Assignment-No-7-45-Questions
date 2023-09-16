// Question No.21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var fruitArray = [];
var Banana = {
    fruitName: "Banana",
    fruitColor: "Yellow",
    fruitPrice: 120,
    fruitScale: "dozen",
    fruitAvailability: true,
};
var apple = {
    fruitName: "Apple",
    fruitColor: "Red",
    fruitPrice: 300,
    fruitScale: "KG",
    fruitAvailability: false,
};
fruitArray.push(Banana);
fruitArray.push(apple);
console.log(fruitArray);
export {};
