// EX:33 Ordinal Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var index = 0; index < numbers.length; index++) {
    if (numbers[index] == 1) {
        console.log(numbers[index] + "st");
    }
    if (numbers[index] == 2) {
        console.log(numbers[index] + "nd");
    }
    if (numbers[index] == 3) {
        console.log(numbers[index] + "rd");
    }
    if (numbers[index] >= 4) {
        console.log(numbers[index] + "th");
    }
}
