'use strict';

const merch = {
  tShirts: 100,
  posters: 50,
}

const music = {
  cds: 28,
  vinyl: 3,
  cassettes: 78,
}

const inventory = {  // order not guaranteed
  ...merch,
  ...music
};
console.log(inventory);
