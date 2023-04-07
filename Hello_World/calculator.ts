let add = (num1:number,num2:number) => console.log(num1+num2); 
let sub = (num1:number,num2:number) => console.log(num1-num2); 
let multiply = (num1:number,num2:number) => console.log(num1*num2); 
let divide = (num1:number,num2:number) => console.log(num1/num2); 
let mod = (num1:number,num2:number) => console.log(num1%num2); 

let calc = (choice: number,num1:number,num2:number) =>{
    console.log("Input 1 to perform addition, 2 for subtraction, 3 for multiplication, 4 for divide, and 5 for modulus");
    
    if(choice == 1){
        add(num1,num2);
    }
    else if(choice == 2){
        sub(num1,num2);
    }
    else if(choice == 3){
        multiply(num1,num2);
    }
    else if(choice == 4){
        divide(num1,num2);
    }
    else if(choice == 5){
        mod(num1,num2);
    }
}

calc(1,5,6);
calc(2,2,4);
calc(3,9,8);
calc(4,12,4);
calc(5,9,3);


