//Covering: Functions in JavaScript
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));//supports hoisting


// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Sum:", add(5, 3));//does not support hoisting

// Arrow Function
const multiply = (x, y) => x * y;
console.log("Product:", multiply(4, 6));