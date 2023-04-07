//challenge #01
function miniMaxSum(arr) {
    let sumArr = [];
    let minSum = 0;
    let maxSum = 0;
    for (let index = 0; index < arr.length; index++) {
        let sum = 0;
        for (let index2 = 0; index2 < arr.length; index2++) {
            if (index2 != index) {
                sum += arr[index2];
            }
        }
        sumArr[index] = sum;
    }
    let min = sumArr[0];
    let max = sumArr[0];
    for (let index = 0; index < sumArr.length; index++) {
        if (sumArr[index + 1] < min) {
            min = sumArr[index + 1];
        }
        if (sumArr[index + 1] > max) {
            max = sumArr[index + 1];
        }
    }
    console.log(min);
    console.log(max);
}
miniMaxSum([1, 3, 5, 7, 9]);
export {};
