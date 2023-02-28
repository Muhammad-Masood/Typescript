// Ex:23 Conditional Tests
let nu;
let myName = "Masood";
console.log("Is myName == Masood? I predict True");
console.log(myName == "Masood");

let numb = 123;
console.log("numb == 123, I predict true");
console.log(numb == 123);
nu = 231;
console.log("numb = 231 now, I predict true", numb == 231);

let iAmCoding = true;
console.log("I'm not coding right now!");
console.log(iAmCoding != true);
//console.log(iAmCoding == false) --> This is giving error/ Explore why?
console.log("I'm coding now",iAmCoding == true);

let jenny = "Jenny is not here!"; let s; let yes = true;
for(let i = 0 ; i<jenny.length ; i++){
    let s = jenny[i]+jenny[i+1]+jenny[i+2];
    if(s == "not"){
        yes = false;
    }
    else{
        s = " ";
    }
}
console.log("Jenny is here!",yes == true );

// Ex:24 More Conditional Tests:
let str3 = "masood";
let str4 = "waheed";
console.log("str3 and str4 are different", str3 == str4);

let str1 = "Masood";
let str2 = "maheed";
console.log("str1 and str2 are exactly the same", str1 == str2);

console.log("1 is less than 3", 1<3);
console.log("1 is greater than 3", 1>3);

console.log("1 is less than 3 and 1 is greater than 0",1<3 && 1>0);
console.log("2 is equal to 2",  2==2);
console.log('Either 3 is greater than 0 OR 3 is less than 0', 3>0 || 3<0);
console.log("3 is greter than 0 and -3 is less than 0", 3>0 && -3<0);

let present;
let Class = ["Masood","Sameer", "Waheed","Zain","Haris"];
for (let index = 0; index < Class.length; index++) {
    Class[index] == "Zain"? present = true: false;
    
}
console.log("Zain is present in the class", present == true);

