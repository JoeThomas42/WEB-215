// Task 1
`use strict`;

// Task 2
const student = `Joseph Thomas`;
console.log(student); 

// Task 3
let quote = `PoC #1`;
console.log(quote);

quote = 'She said, "JavaScript is a \'cool\' language."';
console.log(quote);

quote = `She said, "JavaScript is a 'cool' language."`;
console.log(quote);

quote = `${student} said, "JavaScript is a 'cool' language."`;
console.log(quote);

// Task 4
let haiku = 'Chaos reigns within.\n' +
'Reflect, repent, and reboot.\n' +
'Order shall return.';
console.log(haiku);

// Task 5
let lyric = `There's a lady who's sure
all that glitters is gold
and she's buying the stairway to heaven.`;
console.log(lyric);

// Task 6
let totalDogs = 7;
let totalBalls = 20;
let ballsPerDog = Math.floor(totalBalls / totalDogs);
let leftoverBalls = totalBalls % totalDogs;

let dogSummary = `There are ${totalDogs} dogs and ${totalBalls} tennis balls.
Each dog will get ${ballsPerDog} tennis balls.
There will be ${leftoverBalls} left over.`;
console.log(dogSummary);

// Task 7
let tips = {
  serverA: 22124,
  serverB: 8241,
  serverC: 22500,
}
let servers = 3;

let tipsSum = tips.serverA + tips.serverB + tips.serverC;
let takeHome = Math.floor(tipsSum / servers);
let leftoverTips = tipsSum % servers;

let tipSummary = 
`There are a total of ${servers} servers.
The total tips sum to $${tipsSum / 100}.
Each server will take home $${takeHome / 100}.
$${leftoverTips / 100} will be contributed to the community fund.
`;
console.log(tipSummary);
