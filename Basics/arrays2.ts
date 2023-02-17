//Ex:18 Seeing the world
const places = ["Turkey","Italy","Switzerland","Swat","Kashmir"];
for (let index = 0; index < places.length; index++) {
    console.log(places[index]);
}

console.log("\n"); 

// for(let i = 0 ; i<places.length ; i++){
//     for(let j = 0 ; j<places.length ; j++){

//     }
// }
let not = true; let count = 0; let exclude = 0;
for(let i = 0 ; i<places.length; i++){
    let temp = places[i];
    // console.log(tempElem);
    for(let j = 0 ; j<places.length ; j++){
        let comp = places[j];
        if(i!=j && temp.charCodeAt(0)<=comp.charCodeAt(0)){
            ++count;
           // console.log(comp,j); console.log(comp.charCodeAt(0));
            
        }
    }
    console.log(count,i);
    let c = (places.length -1) - exclude;
    if(count == c ){
    console.log(temp,temp.charCodeAt(0));
    ++exclude;
    count = 0;
    }
    // else{
    //     not = true;
    // }
  //  console.log("\n",temp,temp.charCodeAt(0));
}
// let a = 'Turkey'; let b = 'Italy';
// console.log(a.charCodeAt(0),b.charCodeAt(0));
// for (let index = 0; index < places.length; index++) {
//     console.log(places[index]);
// }

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

// places.sort(); //arranging array in alphabetical order
// for (let index = 0; index < places.length; index++) {
//     console.log(places[index]);
// }

//Ex:19 Dinner Guests
console.log(`I'm inviting 2 guests to the dinner!`);
