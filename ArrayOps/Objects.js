//Covering: Objects in javaScript
// Creating an object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
// Accessing object properties
console.log(person.name); // John
console.log(person["age"]); // 30

//destructuring assignment
const { name, age, city } = person;
console.log(name); // John  
console.log(age); // 30
console.log(city); // New York

//object destructing in function parameters
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet(person); // Hello, my name is John and I am 30 years old.

//nested destructuring
const employee = {
    id: 1,
    personalInfo: {             
        name: "Jane",
        age: 25
    }
};

// Adding new properties
person.country = "USA";
person["job"] = "Developer";

// Modifying existing properties
person.age = 31;
person["city"] = "San Francisco";

// Deleting properties
delete person.job;
delete person["country"];

// Looping through object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Object methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2    

// Object.keys() - returns an array of a given object's property names
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]


// Object.values() - returns an array of a given object's property values
const values = Object.values(person);
console.log(values); // ["John", 31, "San Francisco"]

// Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs
const entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 31], ["city", "San Francisco"]]

// Object.assign() - used to copy the values of all enumerable own properties from one or more source objects to a target object
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }