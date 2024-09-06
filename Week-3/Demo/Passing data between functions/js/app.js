'use strict'

function formatCurrency(totalCents) {
  let dollars = (totalCents / 100).toFixed(2);
  dollars = `$${dollars}`;
  return dollars;
}

function makeChange(totalBill = 100.00, totalPaid = 0) {
  totalBill *= 100;
  totalPaid *= 100;
  let changeInCents = totalPaid - totalBill;
  return formatCurrency(changeInCents);
}

console.log(makeChange(115.50, 150.00))
console.log(makeChange(undefined, 150.00))
