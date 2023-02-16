//Ex:18 Seeing the world
const places = ["Turkey","Italy","Switzerland","Swat","Kashmir"];
for (let index = 0; index < places.length; index++) {
    console.log(places[index]);
}

console.log("\n"); 
// let temp; let elm1; let elm2;

// for (let index = 0; index < places.length; index++){
//     elm1 = places[index];
//     for(let j = index+1 ; j<places.length ; j++){
//         elm2 = places[j];
//         console.log(elm2,"\n");
//         if(elm2[0]<elm1[0]){
//             temp = places[index];
//             places[index+1] = places[index];
//             places[index] = elm2;
//         }
//     }
// }

// for (let index = 0; index < places.length; index++) {
//     console.log(places[index]);
// }

console.log("\n");

places.sort(); //arranging array in alphabetical order
for (let index = 0; index < places.length; index++) {
    console.log(places[index]);
}

//Ex:19 Dinner Guests
console.log(`I'm inviting ${inv.length} guests to the dinner!`);