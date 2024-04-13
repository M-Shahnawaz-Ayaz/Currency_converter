import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function welcome() {
    let animation = chalkAnimation.rainbow("\n\tWELCOME TO MY CURRENCY CONVERSION\t\n");
    await new Promise((res => {
        setTimeout(res, 2000);
    }));
    animation.stop();
}
welcome();
let conversion = {
    "PKR": {
        "PKR": 1.0000,
        "EUR": 0.003,
        "USD": 0.004,
        "GBP": 0.003,
        "INR": 0.3,
        "SAR": 0.013
    },
    "EUR": {
        "PKR": 299.989,
        "EUR": 1.0000,
        "USD": 1.08,
        "GBP": 0.858,
        "INR": 89.973,
        "SAR": 4.049
    },
    "USD": {
        "PKR": 277.73,
        "EUR": 0.926,
        "USD": 1.0000,
        "GBP": 0.794,
        "INR": 83.297,
        "SAR": 3.749
    },
    "GBP": {
        "PKR": 349.575,
        "EUR": 1.165,
        "USD": 1.259,
        "GBP": 1.0000,
        "INR": 104.845,
        "SAR": 4.719
    },
    "INR": {
        "PKR": 3.334,
        "EUR": 0.011,
        "USD": 0.012,
        "GBP": 0.01,
        "INR": 1.0000,
        "SAR": 0.045
    },
    "SAR": {
        "PKR": 74.085,
        "EUR": 0.247,
        "USD": 0.267,
        "GBP": 0.212,
        "INR": 22.22,
        "SAR": 1.0000
    }
};
await welcome();
do {
    const come = await inquirer.prompt([{
            type: "list",
            name: "rep",
            prefix: "",
            message: chalk.green("\n > Enter yes to Come conversion World ?\n"),
            choices: ['yes', 'No']
        }]);
    if (come.rep === "No") {
        process.exit();
    }
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            prefix: "",
            message: chalk.green.bold("\n\t\t\t > Select the currency conversion From : "),
            choices: ["PKR", "EUR", "USD", "GBP", "INR", "SAR"]
        },
        {
            type: "list",
            name: "to",
            prefix: "",
            message: chalk.green.bold(" \n\t\t\t > Select the currency conversion TO : "),
            choices: ["PKR", "EUR", "USD", "GBP", "INR", "SAR"]
        },
        {
            type: "number",
            name: "amount",
            prefix: "",
            message: chalk.blue.bold("\n > Enter the Amount = ")
        }
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = conversion[from][to] * amount;
        console.log(chalk.red.bold(`\n\t\t\tThe conversion = ${amount} Amount From ${from}----> To ${to} `));
        console.log(chalk.green("\n\t\t======================================================`Amount`========================================"));
        console.log(`\n\t\t\t The Convert Amount is = ${result} `);
    }
    else {
        console.log(chalk.red("Invalid selection and amount"));
    }
} while (true);
