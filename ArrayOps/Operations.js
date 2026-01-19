//this includes basic array operations like map, filter, reduce, etc.
//map: this returns a new array with the results of calling a provided function on every element in the calling array.
let arr = [1, 2, 3, 4, 5];
let mappedArr = arr.map(x => x * 2); // [2, 4, 6, 8, 10]

//filter: this creates a new array with all elements that pass the test implemented by the provided function.
let filteredArr = arr.filter(x => x % 2 === 0); // [2, 4]

//reduce: this executes a reducer function on each element of the array, resulting in a single output value.
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15

//forEach: this executes a provided function once for each array element.
arr.forEach(x => console.log(x)); // logs 1, 2, 3, 4, 5

//find: this returns the value of the first element in the array that satisfies the provided testing function.
let found = arr.find(x => x > 3); // 4

//some: this tests whether at least one element in the array passes the test implemented by the provided function.
let hasEven = arr.some(x => x % 2 === 0); // true   

//every: this tests whether all elements in the array pass the test implemented by the provided function.
let allPositive = arr.every(x => x > 0); // true

//includes: this determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let includesThree = arr.includes(3); // true

//indexOf: this returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = arr.indexOf(3); // 2