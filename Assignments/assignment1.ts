//Task 01
const englishMarks:number = 83;
const urduMarks:number = 92;
const avgScore:number = (englishMarks+urduMarks)/2;

    if(avgScore >= 80){
        console.log("You have got an A grade");
    }

    else if(avgScore >= 70 && avgScore<80){
        console.log("You have got a B grade");
    }

    else if(avgScore >= 60 && avgScore <70){
        console.log("You have got a C grade");
    }

    else{
        console.log("You have got a F grade");
    }
    console.log("\n");