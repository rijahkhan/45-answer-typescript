function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
        
}

function make_great(magician: string[]){
   return magician.map(name => `The Great ${name}`);
}


let magician_names = ["Subhan", "Arham","Rahim"]

let Great_magicians = make_great(magician_names);

//console.log(Great_magicians)

show_magicians(Great_magicians)