'use strict';

// copying variables like this works
let pet1 = 'cat';
let pet2 = pet1;
console.log(pet1, pet2);

pet2 = 'llama';
console.log(pet1, pet2);

// doling it with an object goes crazy
// copying by reference
// don't do this
let pet3 = {
  pet: 'cat',
}

let pet4 = pet3;  // basically an alias, NOT a separate value
console.log(pet3, pet4);

// CHANGES THE ORIGINAL TOO
pet4.pet = 'dog';
console.log(pet3, pet4);

// to actually make a copy, use SPREAD SYNTAX: {...originalObjectName}
// only does a shallow copy, problems with nested objects, nested becomes reference
let pet5 = {
  pet: 'bird',
}

let pet6 = {...pet5};
console.log(pet5, pet6);

pet6.pet = 'snake';
console.log(pet5, pet6);


const auto1 = {
  mfg: 'Honda',
  models: {
    top: 'Civic',
    bottom: 'Prelude',
  },
}
console.log(auto1);

const auto2 = {...auto1};
auto2.mfg = 'Ford';
console.log(auto1, auto2);

auto2.models.top = 'F-series'; // CHANGED ORIGINAL
console.log(auto1, auto2);

