/*Question No.38
Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.*/
function describe_city(city, country = "America") {
    console.log("The city", city, "is in", country);
}
console.log("-------------------------------------------------------------------------------------------------------");
describe_city("Karachi", "Pakistan");
console.log("-------------------------------------------------------------------------------------------------------");
describe_city("New York");
console.log("-------------------------------------------------------------------------------------------------------");
describe_city("Paris", "France");
console.log("-------------------------------------------------------------------------------------------------------");
export {};
