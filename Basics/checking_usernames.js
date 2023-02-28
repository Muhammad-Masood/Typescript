// Ex:32 Checking Usernames
var current_users = ["abc123", "def223", "ghi345", "jkl556", "mno654", "john"];
var new_users = ["volkan12", "joe456", "abc123", "mark343", "jkl556", "JOHN"];
for (var index = 0; index < new_users.length; index++) {
    var u = new_users[index];
    var used = false;
    for (var index2 = 0; index2 < current_users.length; index2++) {
        if (u == current_users[index2]) {
            console.log("The person will need to enter a new username.");
            used = true;
        }
    }
    if (!used) {
        console.log("The username is available.");
    }
}
