//makin a function 

function make_shirt (size: string = "Large", printmessage: string = "I Love Typescript"){
console.log(`creating a ${size} shirt with the ${printmessage} prints on shirt`)
}
//calling a function with by default
make_shirt();

//calling a function now with a medium size and default a message 

make_shirt("Medium")
make_shirt("Small")
make_shirt("xxL")

//calling a function now with small size with diffrent print message

make_shirt("small", "I Love Typescript")
make_shirt("large", "I Love j.v")