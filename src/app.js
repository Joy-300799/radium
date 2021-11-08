const obj = require('./logger')
const newObj = require('./util/helper')
const anotherObj = require('../validator/formatter')
//const obj1 = require(underscore)
const obj2 = require('lodash')

obj.log('Joy Bhattacharya')
obj.welcome('')
console.log('The url for the wikipedia site is '+obj.url)

console.log('============================================================')

console.log("The current date is "+newObj.printDate)
console.log("The current month is "+newObj.printMonth)
console.log("The batch info is "+newObj.getBatchInfo)
*
console.log('============================================================')

anotherObj.trim('     Joy     ')
anotherObj.toLowerCase('JOY_BhattachARya')
anotherObj.toUpperCase('Joy_BhattachARya')

console.log('============================================================')
// 4. Using the package ‘lodash’ solve below probolems

// Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function

// Using the tail function, return the last n-1 elements of an array containing the first 10 odd numbers

// Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values

// Use the function fromPairs to create a object contating key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

let outputChunk= obj2.chunk(['jan','feb','mar','apr','may','jun','jul','aug','sept','oct','nov','dec'],3);
let outputTail= obj2.tail([1,3,5,7,9,11,13,15,17,19]);
let outputUnion= obj2.union([1], [1,2], [1,2,3], [1,2,3,4],[8,9,10,11],[6,7,9,9],[5,6,7,8,9,10,11,12,13]);
let outputFromPairs= obj2.fromPairs([["name","joy"],["location","odisha"],["likes","coding"],["number","123456"]])

console.log(outputChunk)
console.log("********")
console.log(outputTail)
console.log("********")
console.log(outputUnion)
console.log("********")
console.log(outputFromPairs)

