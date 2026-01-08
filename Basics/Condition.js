// Covering: Conditional Statements in JavaScript
// if statement
let score = 85;
if (score >= 60) {
    console.log("You passed the exam!"); // Output: You passed the exam!
}
// Output: Grade: B
// if-else else-if statement
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

//ternary operator
let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Voting Eligibility:", eligibility); // Output: Voting Eligibility: Eligible to vote

// switch statement
let day = 3;    
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid Day";
}
console.log("Day Name:", dayName);

