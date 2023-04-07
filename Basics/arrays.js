/*Second task
Arrays
Ex:11 Names */
let names = ["Sameer", "Zain", "Abdullah", "Haris"];
console.log(names[0]); //getting elements on specific index
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log("\n");
//Ex:12 Greetings
const greet1 = "Hey";
const greet2 = "! how are you?";
console.log(greet1, names[0], greet2);
console.log(greet1, names[1], greet2);
console.log(greet1, names[2], greet2);
console.log(greet1, names[3], greet2);
console.log("\n");
//Ex:13 Own Array
const mode = ["Car", "Bike", "Bus", "Super Bike", "Hijet"];
for (let index = 0; index < mode.length; index++) { //We will see this later
    console.log("I would like to own a Honda", mode[index]);
}
console.log("\n");
//Ex:14 Guest List
const inv = ["Sameer", "Zain", "Haris"];
console.log("Inviting", inv[0], "to Dinner");
console.log("Inviting", inv[1], "to Dinner");
console.log("Inviting", inv[2], "to Dinner");
// Ex:15 Changing guest list
console.log(inv[0], "can't make the Dinner!");
inv[0] = "Abdullah";
console.log("Inviting", inv[0], "to Dinner");
console.log("Inviting", inv[1], "to Dinner");
console.log("Inviting", inv[2], "to Dinner");
console.log("\n");
// Ex:16 More Guests
inv.push("New Guest1", "New Guest2", "New Guest2"); //adding new element at end of array
console.log("I have found a bigger dinner table!");
inv.unshift("New Guest"); //adding new element in start of array
inv.push("Huzaifa");
for (let index = 0; index < inv.length; index++) {
    console.log("Inviting", inv[index], "to Dinner");
}
console.log("\n");
//Ex:17 Shrinking Guess List
console.log("I can invite only 2 people to the dinner.");
while (inv.length != 2) {
    console.log(`Sorry ${inv.pop()}, I can't invite you to the dinner.`); //removing last guest from list until 2 guest remains;
}
console.log("\n");
for (let i = 0; i < inv.length; i++) {
    console.log(`${inv[i]}, you are still invited!`);
}
console.log("\n");
inv.pop();
inv.pop();
for (let i = 0; i < inv.length; i++) {
    console.log(inv[i]);
}
export {};
