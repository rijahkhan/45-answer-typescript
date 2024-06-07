var UserNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
UserNames = [];
if (UserNames.length === 0) {
    console.log("your array in Empty We need to find some users!");
}
else {
    //using ForEach Loop on Array
    UserNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",wouls you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for loggingin again."));
        }
    });
}
