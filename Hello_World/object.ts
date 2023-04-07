const obj = {
    namee:String,
    address:Number
};

const newObj = {
    att1:"Masood",
    att2: 18
}

console.log(newObj["att1"],newObj["att2"]);

//type alias
type StudentType = {
    name:string,
    age:number,
    grade:string
}

//interfaces
interface IStudent{
    name:string
    age:number
    grade:string
}
// type StudentType = {  //error

// }
interface IStudent{
    class:string
}

//Masood is now inheriting Properties of ISTudent
interface Masood extends IStudent{
    undergraduate:boolean
}

// const std: IStudent = {

// }