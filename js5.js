const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter username: ", (username) => {
    rl.question("Enter password: ", (password) => {
 
        if (username === "admin" && password === "1234") {
            console.log("Login Successful");
        } else {
            console.log("Invalid Username or Password");
        }

        rl.close();
    });
});
