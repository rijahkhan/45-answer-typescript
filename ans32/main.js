var current_user = ["Usman", "Ali", "Areeba", "Zain", "osama"];
var new_Users = ["Hamza", "Ayesha", "Ali", "Mahad", "Muskan"];
//Loop through new user.ForEach
new_Users.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is availble"));
    }
});
