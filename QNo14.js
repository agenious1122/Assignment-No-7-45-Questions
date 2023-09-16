// Question No.14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = [];
guestList.push("Adnan Khalil", "Asif Riaz", "Zeeshan Ghani", "Zeeshan Shafi", "Amanual James");
// console.log(guestList);
for (let name of guestList) {
    console.log("Hello!", name, "You are ainvited to dinner at my place");
}
export { guestList };
