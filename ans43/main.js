function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Subhan", "Arham", "Rahim"];
//let Great_magicians = make_great(magician_names);
//show_magicians(Great_magicians)
var copy_magician_names = magician_names.slice();
//modify the copy arrar to include "The Great"  with their name 
var copy_great_magicians = make_great(copy_magician_names);
console.log("orignal Array\n");
//orignal
show_magicians(magician_names);
//copy_great_magicians
show_magicians(copy_great_magicians);
