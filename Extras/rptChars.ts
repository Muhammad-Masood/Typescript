let element = "masoodddd";
let c = 0; 

for (let index = 0; index < element.length; index++) {
    let temp = element[index];

    for (let j = 0; j < element.length; j++) {
        if(index!=j){
        if(temp == element[j]){
        ++c;
    }
}
}
if(c>1){
console.log(`${temp} is repeating ${c} times`);
c = 0;
}
}

let array = ["masood",12,1.23,'c'];
// console.log(`${array[0]} ${array[1]} ${array[2]}`);
// console.log(typeof(array[2]));
// array.pop()
console.log(array.push(1,2,3,4,5));
console.log(array);
array.splice(1,5);
