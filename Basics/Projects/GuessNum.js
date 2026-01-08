//game to guess a number between 1 and 10
const random = Math.floor(Math.random() * 10) + 1;
let guess = 5;
if(guess === random){
    console.log("Congratulations! You guessed the correct number:", random);
}else{
    console.log("Sorry, the correct number was:", random);
}
// The user has to guess the number 5 in this example