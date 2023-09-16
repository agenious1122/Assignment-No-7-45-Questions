/*Question No.34
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
	• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
    For each pizza you should have one line of output containing a simple statement like I like 	pepperoni pizza.
	• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 	output should consist of three or more lines about the kinds of pizza you like and then an additional 	sentence, such as I really love pizza!*/

    var favouritePizas = ["Tandoori Paneer","Tikka Chicken","Chapli Kabab","Fajita Chicken","Chicken Supreme"];
       
    for (let index = 0; index < favouritePizas.length; index++) 
    {
        var element = favouritePizas[index];
        if (element === "Tandoori Paneer") 
        {
            console.log(element , "Is best option for today");    
        }
        else if (element ==="Tikka Chicken") 
        {
            console.log(element , "Is also tasty");
        } 
        else if (element ==="Chapli Kabab")
        {
            console.log(element , "is not my favourite");
        }
        else if (element ==="Fajita Chicken")
        {
            console.log(element , "We must try");
        }
        else
        {
            console.log(element , "Best selling item");
        }
            
            console.log("---------------------------------------------------------");
    }    
    console.log("I Love Pizza");