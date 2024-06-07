var userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
//using forEACH Loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",wouls you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for loggingin again."));
    }
});
