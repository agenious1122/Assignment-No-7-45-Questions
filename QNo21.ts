// Question No.21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define a TypeScript interface to describe the properties of an object
interface fruits 
{
    fruitName: string;
    fruitColor: string;
    fruitPrice: number
    fruitScale: string
    fruitAvailability: boolean
}
  var fruitArray: fruits[] = [];
  
   var Banana: fruits = 
  {
    fruitName: "Banana",
    fruitColor: "Yellow",
    fruitPrice: 120,
    fruitScale: "dozen",
    fruitAvailability: true,
  }
  var apple:fruits=
  {
    fruitName: "Apple",
    fruitColor: "Red",
    fruitPrice: 300,
    fruitScale: "KG",
    fruitAvailability: false,
  }
  
   fruitArray.push(Banana);
  fruitArray.push(apple)
  
  console.log(fruitArray);
  