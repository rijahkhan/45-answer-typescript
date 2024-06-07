function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
//call the function 3 difrent number with arguments 
makeSandwich("chicken", "cheese", "Mayo", "Egg", "Coleslaw");
makeSandwich("Bread", "EGG");
makeSandwich("Bread", "Butter", "chicken", "Lettus", "tomato");
