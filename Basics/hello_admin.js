// Ex:30 Hello Admin
var usernames = ['unknown', 'complex', 'admin', 'xyz909', 'algo789'];
for (var index = 0; index < usernames.length; index++) {
    if (usernames[index] == 'admin') {
        console.log("Hello ".concat(usernames[index], ", would you like to see a status report?"));
    }
    console.log("Hello ".concat(usernames[index], ", thank you for logging in again."));
}
// Ex:31 No Users
var counter = 0;
for (var index = 0; index < usernames.length; index++) {
    if (usernames[index] == '') {
        ++counter;
    }
}
if (counter == usernames.length - 1) {
    console.log("We need to find some users!");
}
for (var index = 0; index < usernames.length; index++) {
    usernames[index] = '';
}
counter = 0;
for (var index = 0; index < usernames.length; index++) {
    if (usernames[index] == '') {
        ++counter;
    }
}
console.log(counter);
if (counter == usernames.length) {
    console.log("We need to find some users!");
}
