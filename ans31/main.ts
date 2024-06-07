let UserNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"]

UserNames = []
if(UserNames.length === 0){
    console.log("your array in Empty We need to find some users!")
}else{
    //using ForEach Loop on Array
    UserNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
        console.log(`Hello ${oneUser},wouls you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for loggingin again.`);
    }
    })
}

