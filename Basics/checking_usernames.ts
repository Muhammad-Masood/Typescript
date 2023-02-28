// Ex:32 Checking Usernames
let current_users = ["abc123","def223","ghi345","jkl556","mno654","john"];
let new_users = ["volkan12","joe456","abc123","mark343","jkl556","JOHN"];

for (let index = 0; index < new_users.length; index++) {
    let u = new_users[index]; let used = false;
    for (let index2 = 0; index2 < current_users.length; index2++) {
        if(u == current_users[index2]){
            console.log("The person will need to enter a new username.");
            used = true;
        }
    }
    if(!used){
    console.log("The username is available.");
    }
}