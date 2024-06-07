var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making aArray of countries and print its Orignal Order
var countriesToVisit = ["london", "Canada", "Plastiene", "China"];
console.log("orignalorder:", countriesToVisit);
//print the array in Alphabetical order without modifiying the actul array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//show that the array is still in its orignal order 
console.log("still in orignal Order:", countriesToVisit);
//print the array in reversed order 
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
//show that the array is still in its order 
console.log("still in orignal Order:", countriesToVisit);
//we hane changed orignal array order now 
console.log("Orignal Array Reversed:", countriesToVisit.reverse());
//back to porignal order 
console.log("Back to Orignal Order:", countriesToVisit.reverse());
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
//we have changed again reversed array 
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());
