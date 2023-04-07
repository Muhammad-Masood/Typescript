//challenge #01
function miniMaxSum(arr:number[]){
    let sumArr:number[] = [];
let minSum:number = 0;
let maxSum:number = 0;
for (let index = 0; index < arr.length; index++) {
    let sum:number = 0;
    for (let index2 = 0; index2 < arr.length; index2++) {
        if(index2!=index){
            sum+=arr[index2];
        }
    }
    sumArr[index] = sum;
}
let min:number = sumArr[0];
let max:number = sumArr[0];
for (let index = 0; index < sumArr.length; index++) {
    if(sumArr[index+1]<min){
        min = sumArr[index+1];
    }
    if(sumArr[index+1]>max){
        max = sumArr[index+1];
    }
}
console.log(min);
console.log(max);
}

miniMaxSum([1,3,5,7,9]);