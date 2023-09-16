// Question No.17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// 	• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 	invite only two people for dinner.
// 	• Remove guests from your list one at a time until only two names remain in your list. Each time you 	pop a name from your list, print a message to that person letting them know you’re sorry you can’t 	invite them to dinner.
// 	• Print a message to each of the two people still on your list, letting them know they’re still invited.
// 	• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 	actually have an empty list at the end of your program.
var guestList = [];
guestList.push("Adnan Khalil", "Asif Riaz", "Zeeshan Ghani", "Zeeshan Shafi", "Amanual James");
for (let name of guestList) {
    console.log("Hello!", name, "You are invited to dinner at my place");
}
console.log("-------------------------------------------------------------");
console.log("Oops! My new dinner table won’t arrive in time for the dinner, and I have space for only two guests.");
console.log("-------------------------------------------------------------");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log(removedGuest, "I am sorry I can’t invite you to dinner.");
}
console.log("-------------------------------------------------------------");
for (let name of guestList) {
    console.log("Hello!", name, "You are still invited to dinner");
}
console.log("-------------------------------------------------------------");
guestList.pop();
guestList.pop();
console.log("Dinner Finished", guestList);
console.log("-------------------------------------------------------------");
export {};
