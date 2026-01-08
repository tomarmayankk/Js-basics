//covering: Loops in JavaScript
// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
// while loop
let count = 1;
while (count <= 5) {
    console.log("While Loop Iteration:", count);
    count++;
}
// do-while loop
let doCount = 1;
do {
    console.log("Do-While Loop Iteration:", doCount);
    doCount++;
} while (doCount <= 5);

// for...of loop
const array = ['a', 'b', 'c', 'd', 'e'];
for (const element of array) {
    console.log("For...of Element:", element);
}

//for each loop
array.forEach((element, index) => {
    console.log(`ForEach Element at index ${index}:`, element);
});
