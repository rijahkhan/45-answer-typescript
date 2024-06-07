function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Subhan", "Arham", "Rahim"];
var Great_magicians = make_great(magician_names);
//console.log(Great_magicians)
show_magicians(Great_magicians);
