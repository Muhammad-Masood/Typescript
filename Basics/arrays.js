//Second task
//Arrays
//Names
var names = ["Sameer", "Zain", "Abdullah", "Haris"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//Greetings
var greet1 = "Hey";
var greet2 = "! how are you?";
console.log(greet1, names[0], greet2);
console.log(greet1, names[1], greet2);
console.log(greet1, names[2], greet2);
console.log(greet1, names[3], greet2);
//Own Array
var mode = ["Car", "Bike", "Bus", "Super Bike", "Hijet"];
for (var index = 0; index < mode.length; index++) { //We will see this later
    console.log("I would like to own a Honda", mode[index]);
}
//Guest List
var inv = ["Sameer", "Zain", "Haris"];
console.log("Inviting", inv[0], "to Dinner");
console.log("Inviting", inv[1], "to Dinner");
console.log("Inviting", inv[2], "to Dinner");
//Changing guest list
console.log(inv[0], "can't make the Dinner!");
inv[0] = "Abdullah";
console.log("Inviting", inv[0], "to Dinner");
console.log("Inviting", inv[1], "to Dinner");
console.log("Inviting", inv[2], "to Dinner");
//More Guests
inv.push("New Guest1", "New Guest2", "New Guest2");
console.log("I have found a bigger dinner table!");
inv.unshift("New Guest");
inv.push("Huzaifa");
for (var index = 0; index < inv.length; index++) {
    console.log("Inviting", inv[index], "to Dinner");
}
