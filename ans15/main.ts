let guestList = ["Arham", "Rahim", "Subhan","Mahnoor"];

let dontCome = guestList[0];

console.log(dontCome, "nahi aa sakta");

guestList.splice(0,1,"Amir");

guestList.forEach(guest => console.log(`Salam ${guest},would you like to dinner wth me?`));    
