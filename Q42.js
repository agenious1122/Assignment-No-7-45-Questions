/*Question No.43
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.*/
function order_sandwich(...items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please select some items.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log(item);
        }
    }
}
order_sandwich("Ham", "Cheese", "Lettuce");
order_sandwich("Turkey", "Tomato");
order_sandwich();
export {};
