import inquirer from "inquirer";

const currency: any = {
  USD: 1, //BASE CURRENCY Rate Dated 13-April-2024 @4:03pm
  EUR: 0.94,
  GBP: 0.80,
  IND: 83.61,
  PKR: 277.95,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "IND", "PKR"],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "IND", "PKR"],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // base currency usd
let convertedAamount = baseAmount * toAmount;

console.log(convertedAamount);
