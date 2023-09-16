/*Question No.41
Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
var magicianNames = ["Hamoon", "Zakoota", "Saamri", "Bill Batori"];
function show_magicians(magicians) {
    for (var magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicianNames);
export {};
