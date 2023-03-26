//Task 01
const englishMarks = 83;
const urduMarks = 92;
const avgScore = (englishMarks + urduMarks) / 2;
if (avgScore >= 80) {
    console.log("You have got an A grade");
}
else if (avgScore >= 70 && avgScore < 80) {
    console.log("You have got a B grade");
}
else if (avgScore >= 60 && avgScore < 70) {
    console.log("You have got a C grade");
}
else {
    console.log("You have got a F grade");
}
console.log("\n");
export {};
