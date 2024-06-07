let userNames =["Mahad","Ali","Zeeshan","Admin","Usman" ];

//using forEACH Loop on array

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
    console.log(`Hello ${oneUser},wouls you like to see a status report?`)
}else{
    console.log(`Hello ${oneUser}, thank you for loggingin again.`);
}
})