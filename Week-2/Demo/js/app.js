'use strict';

// Separation of logic and presentation

// User configurable variables
let cost = 21.32;
let paid = 30;

// let costInCents = cost * 100; // Makes vars clear
// let paidInCents = paid * 100;
// let change = paidInCents - costInCents;

// console.log(costInCents, paidInCents, change);

// using a function (DON'T USE THIS YET)
// Monetary conversions
let costInCents = dollarsToCents(cost); //logic
let paidInCents = dollarsToCents(paid); //logic

// Calculate change
let change = paidInCents - costInCents; //logic

// let changeInDollars = `$${(change / 100).toFixed(2)}`; //Presentation
//Function
// Format presentation
let changeInDollars = centsToDollars(change);
let paidDisplay = `$${paid.toFixed(2)}`;

// Construct summary
let summary = `
Your cost is $${cost}.
You've paid $${paidDisplay}.
Your change is ${changeInDollars}.
`;

// Render
console.log(summary);

// Functions
function dollarsToCents(amount) {
  return amount * 100;
}

function centsToDollars(amount) {
  return `$${(amount / 100).toFixed(2)}`;
}
 