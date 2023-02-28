// EX:28 Cities
function describe_city(city, country) {
    console.log("".concat(city, " is in ").concat(country));
}
var def = "Pakistan";
describe_city("Karachi", def);
describe_city("Lahore", def);
describe_city("Islamabad", def);
// EX:39 City Names
function city_country(city, country) {
    return (city + "," + country);
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Delhi", "India"));
console.log(city_country("Goungzou", "China"));
