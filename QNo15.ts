// Question No.15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// 	• Start with your program from Exercise 14. Add a print statement at the end of your program stating 	the name of the guest who can’t make it.
// 	• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 	you are inviting.
// 	• Print a second set of invitation messages, one for each person who is still in your list.

var guestList:string[]=[]
guestList.push("Adnan Khalil","Asif Riaz","Zeeshan Ghani","Zeeshan Shafi","Amanual James")
for (let name of guestList)
{
console.log("Hello!",name,"You are invited to dinner at my place");
console.log("---------------------------------------------------------")
}
var guestRefused="Asif Riaz"
console.log(guestRefused,"Reused, He has a busy shedule");
console.log("---------------------------------------------------------")
var newGuest="Sabri"
var indexOfGuestRefused=guestList.indexOf(guestRefused)
if (indexOfGuestRefused!==-1) 
{
    guestList[indexOfGuestRefused]=newGuest    
}
console.log("New invitation sent to",newGuest);
console.log("---------------------------------------------------------")
for (let name of guestList)
{
console.log("Hello!",name,"You are invited to dinner at my place");
}
console.log("---------------------------------------------------------")




export{guestList}
