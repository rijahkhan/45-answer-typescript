let current_user = ["Usman", "Ali","Areeba","Zain","osama"]

let new_Users = ["Hamza", "Ayesha", "Ali", "Mahad","Muskan"]


//Loop through new user.ForEach

new_Users.forEach(new_one_user => {

    let our_condition = current_user.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())
   
if(our_condition){

    console.log(`Sorry ${new_one_user} is already taken!`)
}else{

    console.log(`This Username ${new_one_user} is availble`)
}
})
