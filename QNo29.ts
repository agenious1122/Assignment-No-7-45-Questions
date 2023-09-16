// Question No.29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// 	• Make a array of your three favorite fruits and call it favorite_fruits.
// 	• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favorite_fruits: string[] = ["apple", "banana", "orange"];

for (let index = 0; index < favorite_fruits.length; index++) 
{
    const element = favorite_fruits[index];

    if (element=="apple")
    {
        console.log("I like apples!");
    }

    if (element=="banana") 
    {
        console.log("I enjoy bananas!");
    }

    if (element=="orange") 
    {
        console.log("Oranges are delicious!");
    }

    if (element=="grape") 
    {
        console.log("Grapes are tasty!");
    }

    if (element=="mango") 
    {
       console.log("Mangoes are one of my favorites!");
    }
}