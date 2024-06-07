function makeSandwich(...items:string[]){
    console.log("Making a sandwich with the following items:\n");
items.forEach(singleItem => console.log(singleItem));
console.log("\nNow Enjoy Sandwich"); 
}

//call the function 3 difrent number with arguments 

makeSandwich("chicken", "cheese","Mayo","Egg", "Coleslaw");

makeSandwich("Bread", "EGG");

makeSandwich("Bread", "Butter", "chicken","Lettus", "tomato");
