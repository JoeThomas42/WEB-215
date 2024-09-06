'use strict';

// user definable variables
let species = `Teak`;
let width = 26;
let length = 96;
let thickness = 1.25;
let price = 42.75;
let paid = 1000;

// monetary conversions
let priceInCents = price * 100;
let paidInCents = paid * 100;

// calculations
let boardFeet = Math.round((length * width * thickness) / 144);
let total = priceInCents * boardFeet;
let change = paidInCents - total;

// presentation formatting
let displayPrice = `$${price.toFixed(2)}`
let displayTotal = `$${(total / 100).toFixed(2)}`;
let displayPaid = `$${paid.toFixed(2)}`
let displayChange = `$${(change / 100).toFixed(2)}`;

// output construction
let summary = `
${species} with dimensions:
  width = ${width}"
  length = ${length}"
  thickness = ${thickness}"
  Total board feet: ${boardFeet}bf
Cost per board foot: ${displayPrice}
Total: ${displayTotal}
-----
Amount paid: ${displayPaid}
Change due: ${displayChange}
`

// output render
console.log(summary);
