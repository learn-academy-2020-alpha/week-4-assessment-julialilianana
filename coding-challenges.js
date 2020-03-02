// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."



// write a function that shuffles the values of an array
const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

//  write a function that removes the first value and uses the shuffle function to shuffle the remaining values.
const shiftShuffle = (array) => {
    for(let i = 0; i <= array.length; i++) {
        if (array.length == 0) {
         return "The array is empty"
        } else { 
            array.shift()  
            shuffle(array)
            console.log(array);
        } 
    }  
}

var array1 = [1,2,3,4,5,6]
var array2 = []
var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

console.log(shiftShuffle(array1));
console.log(shiftShuffle(array2));
console.log(shiftShuffle(collections));


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.


const sumCubed = (array) => {
   let newArray = array.map(value => value**3)
   return newArray.reduce((a,b) => a + b, 0)
}

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

console.log(sumCubed(cubeAndSum1));
console.log(sumCubed(cubeAndSum2));


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

const minAndMax = (array) => {
    let newArray =[]
    // sort the array from least to greatest
    array.sort((a, b) => a - b)
    // push the first index of the sorted array to new array
    newArray.push(array[0])
    // push the last index of the sorted array to the new array
    newArray.push(array[array.length-1])
    return newArray
}

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

console.log(minAndMax(nums1));
console.log(minAndMax(nums2));


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

const someCaps = (string) => {
    let newArray = string.split("")
    for (let i = 0; i < newArray.length; i++)
        if (i % 2 === 1){
            newString = string.charAt(i).toUpperCase()
        } 
  return newString
}

            
var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

console.log(someCaps(testString1));
console.log(someCaps(testString2));


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.





var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
