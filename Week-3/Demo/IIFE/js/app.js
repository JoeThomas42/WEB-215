'use strict';

// probably won't use this

(function(){
  let name = `Joe`;
  console.log(`Hello ${name}`);
})();

(function(name, job){
  console.log(`Hello ${name} the ${job}`);
})(`Joe`, 'Bartender');
