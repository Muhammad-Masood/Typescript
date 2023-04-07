let v1 = 11; let v2 = 2;
let v3 = v1%v2;
console.log(v3);

//Task 2
let naa = "Imran is a smart boy";
let arrr = [];
let stored = "";
let i = 0;
for (let index = 0; index < naa.length; index++) {
 //   console.log(index);
    stored += naa[index];

    if(index+1 != naa.length){
    if(naa[index] == " "){
        arrr[i] = stored;
        ++i;
       // console.log(stored);
        stored = "";
    }
}
else{
    arrr[i] = stored;
}
}

for (let index = 0; index < arrr.length; index++) {
    console.log(arrr[index]);
}

//Sorting the array in ascending order now
for (let index1 = 0; index1 < arrr.length; index1++) {
    let temp = arrr[index1];
    let t = temp[0];
    
    for (let index2 = 0; index2 < arrr.length; index2++) {
        let temp2 = arrr[index2];
        let t2 = temp2[0];
        if(index1!=index2){
            //if()
        }
    }
}
console.log(arrr.length);

// for (let j = 0; j < arrr.length; j++) {
    
//      if(arrr[j]<)
// }