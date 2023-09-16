/*Question No.41
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

function show_magicians(magicians: string[]) 
{
    for (var magician of magicians) 
    {
      console.log(magician);
    }
}
  
function make_great(magicians: string[]): string[] 
{
    const greatMagicians: string[] = [];
  
    for (const magician of magicians) 
    {
      greatMagicians.push(`${magician} the Great`);
    }
  
    return greatMagicians;
  }
  
    const magicianNames: string[] = ["Hamoon", "Zakoota", "Saamri", "Bill Batori"];
  
    const greatMagicianNames = make_great(magicianNames);
  
    show_magicians(greatMagicianNames);
  