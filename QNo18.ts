// Question No.18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// 	1done• Store the locations in a array. Make sure the array is not in alphabetical order.
// 	2done• Print your array in its original order.
// 	3done• Print your array in alphabetical order without modifying the actual list.
// 	4done• Show that your array is still in its original order by printing it.
// 	5• Print your array in reverse alphabetical order without changing the order of the original list.
// 	6• Show that your array is still in its original order by printing it again.
// 	7• Reverse the order of your list. Print the array to show that its order has changed.
// 	8• Reverse the order of your list again. Print the list to show it’s back to its original order.
// 	9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 	10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Step 1");
var placesToVisit:string[]=["Makka","Madina","UK","USA","Australia"]
console.log("----------------------------------------");
console.log(placesToVisit);
console.log("----------------------------------------");
console.log("Step 2");
console.log([...placesToVisit].sort());
console.log("----------------------------------------");
console.log("Step 3");
console.log(placesToVisit);
console.log("----------------------------------------");
console.log("step 4")
console.log([...placesToVisit].reverse());
console.log("----------------------------------------");
console.log("step 5")
console.log(placesToVisit);
console.log("----------------------------------------");
console.log("step 6")
console.log([...placesToVisit].reverse());
console.log("----------------------------------------");

