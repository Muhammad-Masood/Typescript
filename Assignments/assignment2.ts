//Task 02

let fruitss = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(`Before: ${fruitss}`);
fruitss.push("orange");
fruitss.unshift("strawberry");
fruitss.splice(2,1,"blueberry");
console.log(`After: ${fruitss}\n`);
