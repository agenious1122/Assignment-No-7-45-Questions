// Question No.27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// 	• If the alien is green, print a message that the player earned 5 points.
// 	• If the alien is yellow, print a message that the player earned 10 points.
// 	• If the alien is red, print a message that the player earned 15 points.
// 	• Write three versions of this program, making sure each message is printed for the appropriate color 	alien.
var alien_color = ["Green", "Yellow", "Red"];
for (let index = 0; index < alien_color.length; index++) {
    const element = alien_color[index];
    if (element == "Green") {
        console.log("The player earned 5 points.");
    }
    else if (element == "Yellow") {
        console.log("The player earned 10 points.");
    }
    else if (element == "Red") {
        console.log("The player earned 15 points.");
    }
}
export {};
