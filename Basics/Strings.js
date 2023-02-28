var n = "Masood";
console.log("Hello ".concat(n, ", would you like to learn\nsome Typescript today?\n"));
var n2 = "masood waheed";
console.log(n2.toUpperCase(), n2.toLowerCase(), "\n");
//Converting into Camel Case
var sum = n2[0].toUpperCase();
for (var index = 0; index < n2.length; index++) {
    if (n2[index - 1] == " ") {
        sum += n2[index].toUpperCase();
    }
    if (index != 0 && n2[index - 1] != " ") {
        sum += n2[index];
    }
}
console.log(sum, "\n");
console.log("Albert Einstein once said, A person who never made a mistake never tried anything new.\n");
var famous_person = "Anounymous";
var message = "New Message";
console.log(famous_person, message);
var stripName = "\tMasood\n";
console.log("Before Stripping: ", stripName);
console.log("After Stripping: ", stripName.trim(), "\n");
