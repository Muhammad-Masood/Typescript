// Ex:23 Conditional Tests
var nu;
var myName = "Masood";
console.log("Is myName == Masood? I predict True");
console.log(myName == "Masood");
var numb = 123;
console.log("numb == 123, I predict true");
console.log(numb == 123);
nu = 231;
console.log("numb = 231 now, I predict true", numb == 231);
var iAmCoding = true;
console.log("I'm not coding right now!");
console.log(iAmCoding != true);
//console.log(iAmCoding == false) --> This is giving error/ Explore why?
console.log("I'm coding now", iAmCoding == true);
var jenny = "Jenny is not here!";
var s;
var yes = true;
for (var i = 0; i < jenny.length; i++) {
    var s_1 = jenny[i] + jenny[i + 1] + jenny[i + 2];
    if (s_1 == "not") {
        yes = false;
    }
    else {
        s_1 = " ";
    }
}
console.log("Jenny is here!", yes == true);
// Ex:24More Conditional Tests:
var str3 = "masood";
var str4 = "waheed";
console.log("str3 and str4 are different", str3 == str4);
var str1 = "Masood";
var str2 = "maheed";
console.log("str1 and str2 are exactly the same", str1 == str2);
console.log("1 is less than 3", 1 < 3);
console.log("1 is greater than 3", 1 > 3);
console.log("1 is less than 3 and 1 is greater than 0", 1 < 3 && 1 > 0);
console.log("2 is equal to 2", 2 == 2);
console.log('Either 3 is greater than 0 OR 3 is less than 0', 3 > 0 || 3 < 0);
console.log("3 is greter than 0 and -3 is less than 0", 3 > 0 && -3 < 0);
var present;
var Class = ["Masood", "Sameer", "Waheed", "abc", "Haris"];
for (var index = 0; index < Class.length; index++) {
    Class[index] == "Zain" ? present = true : false;
}
console.log("Zain is present in the class", present == true);
