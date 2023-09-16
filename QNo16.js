// Question No 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let gestArrayN = ["Adnan", "Asif", "Zeeshan", "Shafi", "Mani", "Mohsin"];
for (let gest of gestArrayN) {
    console.log(`hello,${gest}, we found new bigggner dinner table`);
}
//• Add one new guest to the beginning of your array.
let newGuest = "Sajjad";
gestArrayN.unshift(newGuest);
// console.log(gestArrayN);
//• Add one new guest to the middle of your array.
let newGestM = "Naveed";
let middleindex = Math.floor(gestArrayN.length / 2);
gestArrayN.splice(middleindex, 0, newGestM);
// console.log(gestArrayN);
//add one new guest to the end of your list.
let newGestL = "Raheem";
gestArrayN.push(newGestL);
console.log(gestArrayN);
console.log("       .....Now New List with New Bignner Guest");
console.log("___________________________________________________________________");
for (let gest of gestArrayN) {
    console.log(`Hello , ${gest} ,We found a bigger dinner table.
`);
}
export {};
