function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
        
}

function make_great(magician: string[]){
   return magician.map(name => `The Great ${name}`);
}

let magician_names = ["Subhan", "Arham","Rahim"]

//let Great_magicians = make_great(magician_names);
//show_magicians(Great_magicians)

let copy_magician_names = magician_names.slice();
//modify the copy arrar to include "The Great"  with their name 

let copy_great_magicians = make_great(copy_magician_names);

console.log("orignal Array\n")

//orignal
show_magicians(magician_names);

//copy_great_magicians
show_magicians(copy_great_magicians)