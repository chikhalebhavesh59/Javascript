const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (n1) => {
    rl.question("Enter second number: ", (n2) => {
        rl.question("Enter operation (+ - * /): ", (op) => {

            let num1 = Number(n1);
            let num2 = Number(n2);
            let result;

            switch (op) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
                default:
                    console.log("Invalid operation");
                    rl.close();
                    return;
            }

            console.log("Result =", result);
            rl.close();
        });
    });
});
