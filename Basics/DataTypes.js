// Covering: Data Types in JavaScript
// Primitive Data Types: those data types that store single values,eg: Number, String, Boolean, Null, Undefined, Symbol, BigInt

// String
let greeting = "Hello, World!";
console.log("String:", greeting); // Output: String: Hello, World!

// Number
let num = 42;
console.log("Number:", num); // Output: Number: 42
// Boolean
let isJavaScriptFun = true;
console.log("Boolean:", isJavaScriptFun); // Output: Boolean: true

// Null
let emptyValue = null;
console.log("Null:", emptyValue); // Output: Null: null

//Non-primitive Data Types: those data types that can store multiple values or complex entities,eg: Object, Array, Function

// Object
let person = {
    name: "Alice",
    age: 30
};
console.log("Object:", person); // Output: Object: { name: 'Alice', age: 30 }
// Array
let colors = ["Red", "Green", "Blue"];
console.log("Array:", colors); // Output: Array: [ 'Red', 'Green', 'Blue' ]
// Function
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log("Function Result:", sum); // Output: Function Result: 15