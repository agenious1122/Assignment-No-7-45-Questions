// Question No.31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// 	• If the list is empty, print the message We need to find some users!
// 	• Remove all of the usernames from your array, and make sure the correct message is printed.
var username = ["Admin", "Adnan", "Asif", "Ghani", "Shafi"];
for (let index = 0; index < username.length; index++) {
    var element = username[index];
    if (element == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello", element, "thank you for logging in again.");
    }
}
//for empty array
var userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
export {};
