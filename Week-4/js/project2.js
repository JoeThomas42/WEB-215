'use strict'

/**
 * Receives the bill, tip, and number of people to calculate how much everyone owes and display the results
 * 
 * @param  {number} bill - the bill in dollars.cents
 * @param  {number} tipPercent - the tip to be applied in percentage
 * @param  {number} numPeople - the number of people who will be splitting the tip
 */

function totalPerPerson(bill, tipPercent = 20, numPeople = 1) {
  const billInCents = dollarsToCents(bill);
  const billInDollars = centsToDollars(billInCents);

  const tipDecimal = tipPercentToDecimal(tipPercent);
  const tipCents = calculateTip(billInCents, tipDecimal);
  const tipDollars = centsToDollars(tipCents);

  const totalCostCents = calculateTotal(billInCents, tipCents);
  const totalCostDollars = centsToDollars(totalCostCents);

  const evenShareCents = splitBill(totalCostCents, numPeople);
  const evenShareDollars = centsToDollars(evenShareCents);

  const remainderCents = remainder(totalCostCents, numPeople);
  const remainderDollars = centsToDollars(remainderCents);

  const oddOneOutCents = oddOneOut(evenShareCents, remainderCents);
  const oddOneOutDollars = centsToDollars(oddOneOutCents);

  let output = `A ${tipPercent}% tip on $${billInDollars} is $${tipDollars}.\n` +
  `The total bill plus tip is $${totalCostDollars}.\n` +
  `Split between ${numPeople} people, it's $${evenShareDollars} each.\n` +
  `But with $${remainderDollars} that can’t be split, one person owes $${oddOneOutDollars}.`;

  console.log(output);
}

/**
 * Converts dollars into cents
 * 
 * @param {number} dollars - amount in dollars.cents
 * 
 * @returns {number} amount in cents
 */

function dollarsToCents(dollars) {
  return Math.round(dollars * 100);
}

/**
 * Converts cents into dollars
 * 
 * @param {number} cents - amount in cents
 * 
 * r@returns {number} amount in dollars
 */

function centsToDollars(cents) {
  return (cents / 100).toFixed(2);
}

/**
 * Converts tip percentage into a decimal
 * 
 * @param {number} tipPercent - tip amount in percentage
 * 
 * @returns {number} tip amount as a decimal
 */

function tipPercentToDecimal(tipPercent) {
  return tipPercent / 100;
}

/**
 * Calculates the tip amount in cents
 * 
 * @param {number} billInCents - the total bill in cents
 * @param {number} tipDecimal - the tip expressed as a decimal
 * 
 * @returns {number} - the tip amount in cents
 */

function calculateTip(billInCents, tipDecimal) {
  return Math.round(billInCents * tipDecimal);
}

/**
 * Calculates the total bill with tip included
 * 
 * @param {number} billInCents - the bill amount in cents
 * @param {number} tipCents - the tip amount in cents
 * 
 * @returns {number} - the total cost of the bill and tip in cents
 */

function calculateTotal(billInCents, tipCents) {
  return billInCents + tipCents;
}

/**
 * Splits the bill
 * 
 * @param {number} totalCostCents - the total of bill and tip in cents
 * @param {number} numPeople - the amount of people to split with
 * 
 * @returns {number} - the amount each person needs to pay not including any remainder
 */

function splitBill(totalCostCents, numPeople) {
  return Math.floor(totalCostCents / numPeople);
}

/**
 * Calculates any remainder from a total that didn't split evenly
 * 
 * @param {number} totalCostCents - the total of bill and tip in cents
 * @param {number} numPeople - the amount of people to split with
 * 
 * @returns {number} - the remainder from the split 
 */

function remainder(totalCostCents, numPeople) {
  return totalCostCents % numPeople;
}

/**
 * Calculates what the odd one out has to pay to make up for the remainder
 * 
 * @param {number} evenShareCents - the split amount without the remainder in cents
 * @param {number} remainderCents - the amount of the remainder in cents
 * 
 * @returns {number} -the total amount the odd one out has to pay
 */

function oddOneOut(evenShareCents, remainderCents) {
  return evenShareCents + remainderCents;
}

totalPerPerson(62.75, 15.5, 4);
totalPerPerson(62.77, 17, 4);
totalPerPerson(19, undefined, 7);
totalPerPerson(46.29, 22.5, undefined);
totalPerPerson(100, undefined);
