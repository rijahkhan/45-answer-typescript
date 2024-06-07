var guestList = ["Arham", "Rahim", "Subhan", "Mahnoor"];
var dontCome = guestList[0];
console.log(dontCome, "nahi aa sakta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ",would you like to dinner wth me?")); });
