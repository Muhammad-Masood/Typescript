const n = "Masood";
console.log(`Hello ${n}, would you like to learn
some Typescript today?\n`);
                   
let n2 = "masood waheed";

console.log(n2.toUpperCase(),n2.toLowerCase(),"\n");
//Converting into Camel Case
let sum = n2[0].toUpperCase();

for (let index = 0; index < n2.length; index++){

    if(n2[index-1] == " "){
        sum += n2[index].toUpperCase();
    }

    if(index!=0 && n2[index-1]!=" "){
        sum += n2[index];
    }
}
console.log(sum,"\n");

console.log("Albert Einstein once said, A person who never made a mistake never tried anything new.\n");

let famous_person = "Anounymous";
let message = "New Message";
console .log(famous_person,message);

const stripName = "\tMasood\n";
console.log("Before Stripping: ",stripName);
console.log("After Stripping: ",stripName.trim(),"\n");





