/*Question No.40
Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
function show_magicians(magicians) {
    for (var magician of magicians) {
        console.log(magician);
    }
}
var magicianNames = ["Hamoon", "Zakoota", "Saamri", "Bill Batori"];
show_magicians(magicianNames);
export {};
