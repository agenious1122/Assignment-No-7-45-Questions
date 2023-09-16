// Question No.3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName="Adnan Khalil"
var lowerCaseName=personName.toLowerCase();
console.log(lowerCaseName);
console.log("--------------------------------------------------");
var upperCaseName=personName.toUpperCase();
console.log(upperCaseName);
console.log("--------------------------------------------------");
var titlecaseName = personName.replace(/\w\S*/, (word) => 
{
return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
})
console.log(titlecaseName);
console.log("--------------------------------------------------");