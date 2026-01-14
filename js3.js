const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (str) => {
    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }

    rl.close();
});
