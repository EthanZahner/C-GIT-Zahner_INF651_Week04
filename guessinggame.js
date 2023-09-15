//guessing game
//generate a random number between 1 and 10
let num = Math.floor(Math.random() * 10) + 1;
console.log(num);
let guess = 0;
//prompt for input
guess = parseInt(prompt("Guess a number between 1 and 10"));
console.log(guess);
//while loop to see if guess is correct
while (guess !== num) {
    //incorrect message and new prompt
    guess = parseInt(prompt("Wrong try again, guess a number between 1 and 10"));
} 
//correct message
console.log("You got the number correct!");