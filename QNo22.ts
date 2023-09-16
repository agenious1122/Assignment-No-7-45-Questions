// Question No.22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
function Cars(name: string, company: string, color: string) 
{
    return {
        name,
        company,
        color,
    };
}
//creat an Array of car
var carsType = 
[
    Cars("kia", "suzki", "red"),
    Cars("civic", "honda", "silver"),
    Cars("city", "honda", "black"),
];
//Access an invalid Index
var invalidIndex = 10;
console.log("cars at index", invalidIndex, carsType[invalidIndex]);
carsType.forEach((Cars) => 
{
    console.log("Name=", Cars.name, "company=", Cars.company, "color", Cars.color);
})
export { };