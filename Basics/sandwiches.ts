// EX:44 Sandwiches

function sandwich(items:string[]) {
    console.log("The Sandwich contains: ");
    for (let index = 0; index < items.length; index++) {
        console.log(items[index]);
    }
}

sandwich(["lattice","sauce","spices","chicken"]);
console.log("\n");
sandwich(["meat","chilli","bread"]);