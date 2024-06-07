//  creating a guestList Array 
var guestList = ["Arham", "Rahim", "Subhan", "Mahnoor",];
//making variable for those who cant come
var dontCome = guestList[0];
//printing the name of who cant come
console.log(dontCome, "Nahi aa skty hain");
//add or remove Values from guest List Array
guestList.splice(0, 1, "Rijah");
//mesage print for bigger Table
console.log("good news ! we have Found a bigger table for Dinner,");
//adding a new guest at starting Index of array
guestList.unshift("Mehwish");
//adding a new value at ending index of array
guestList.push("Zain");
//get a middle index of our list array 
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest to middle index of array 
guestList.splice(middleIndex, 0, ("Osama"));
//print message of update List
console.log("updated List of our guest");
//sending a invition message to our gets one by one with their names 
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner for me")); });
