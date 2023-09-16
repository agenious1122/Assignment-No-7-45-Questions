// Question No.32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var curUser:string[]=["admin","Adnan","Asif","Shafi","Mohsin","Zeeshan"];
var newUser:string[]=["mani","shafi","Ghani","zeeshan","Zaheer",];

function chkUserName(curUser:string[],newUser:string[]){
    var lowercaseCurrentUser=curUser.map(Element=>Element.toLowerCase());
    for (let user of newUser) {
        var lowercasenewUser = user.toLowerCase();
        if (lowercaseCurrentUser.includes(lowercasenewUser)){
            console.log("usernmae",user,"is alredytaken plz add new user name");
        }else{
            console.log("user name",user,"is available");            
        }}}
chkUserName(curUser,newUser)