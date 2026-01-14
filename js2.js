const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    rl.question("Guess a number between 1 and 10: ", (guess) => {
        guess = Number(guess);

        if (guess > randomNumber) {
            console.log("Too high! Try again.");
            guessNumber();
        } else if (guess < randomNumber) {
            console.log("Too low! Try again.");
            guessNumber();
        } else {
            console.log("Correct! You guessed the number.");
            rl.close();
        }
    });
}

guessNumber();
