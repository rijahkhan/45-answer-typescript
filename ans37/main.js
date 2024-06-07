//makin a function 
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "Large"; }
    if (printmessage === void 0) { printmessage = "I Love Typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printmessage, " prints on shirt"));
}
//calling a function with by default
make_shirt();
//calling a function now with a medium size and default a message 
make_shirt("Medium");
make_shirt("Small");
make_shirt("xxL");
//calling a function now with small size with diffrent print message
make_shirt("small", "I Love Typescript");
make_shirt("large", "I Love j.v");
