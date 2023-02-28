// EX:28 Cities

function describe_city(city:string,country:string){
    console.log(`${city} is in ${country}`);   
}

let def = "Pakistan";

describe_city("Karachi",def);
describe_city("Lahore",def);
describe_city("Islamabad",def);

console.log("\n");

// EX:39 City Names

function city_country(city:string,country:string){
    return(city+","+country);
}
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Delhi","India"));
console.log(city_country("Goungzou","China"));