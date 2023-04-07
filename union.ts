

//In union we can assign multiple types to a variable
let number : string | number;
number = 12; //narrowing
console.log(number);
number = "Twelve";
console.log(number);

let name = Math.random() > 0.6?"Masood" : undefined
console.log(name,typeof name);
