'use strict';

// array of objects (JSON data)
const bands = [
  {
    name: 'John',
    bands: ['Beatles', 'Plastic Ono Band']
  },
  {
    name: 'Paul',
    bands: ['Beatles', 'Wings']
  },
  {
    name: 'George',
    bands: ['Beatles', 'Traveling Wilburys']
  },
  {
    name: 'Ringo',
    bands: ['Beatles', 'Rory Storm and the Hurricanes']
  }
];

function deletePerson(nameToDelete, originalArray) {
  // find index of array item and loop over each item until we get a match. Returns true or false with each item.
  const deleteIndex = originalArray.findIndex(item => item.name.toLowerCase() === nameToDelete.toLowerCase()); // using all the shorthand possible

  //make new array without that item
  const newBands = [
    ...originalArray.slice(0, deleteIndex),
    ...originalArray.slice(deleteIndex + 1)
  ];

  //return that array
  return newBands
}

const delete1 = deletePerson('george', bands);
console.log(delete1);
