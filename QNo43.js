/*Question No.43
Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
var magicianNames = ["Hamoon", "Zakoota", "Saamri", "Bill Batori"];
function show_magicians(magicians) {
    for (var magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
console.log("--------------------------------------------------------------------");
show_magicians(magicianNames);
console.log("--------------------------------------------------------------------");
var greatMagicianNames = make_great(magicianNames);
show_magicians(greatMagicianNames);
console.log("--------------------------------------------------------------------");
export {};
