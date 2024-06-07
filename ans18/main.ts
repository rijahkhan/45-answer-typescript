//making aArray of countries and print its Orignal Order
let countriesToVisit: string[] = ["london","Canada","Plastiene","China"];

console.log("orignalorder:",countriesToVisit);

//print the array in Alphabetical order without modifiying the actul array list
console.log("Alphabetical Order:",[...countriesToVisit].sort());

//show that the array is still in its orignal order 
console.log("still in orignal Order:",countriesToVisit);

//print the array in reversed order 
console.log("Reverse Order:", [...countriesToVisit].reverse());

//show that the array is still in its order 
console.log("still in orignal Order:",countriesToVisit);

//we hane changed orignal array order now 
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

//back to porignal order 
console.log("Back to Orignal Order:", countriesToVisit.reverse());


console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//we have changed again reversed array 
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());

