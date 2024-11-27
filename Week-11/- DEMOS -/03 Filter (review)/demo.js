'use strict';

// forEach does not return anything
// map returns an array, can sanitize json data

const data = [
  {
    name: {
      first: 'John',
      last: 'Lennon'
    },
    dob: 'October 9, 1940',
    dod: 'December 8, 1980'
  },
  {
    name: {
      first: 'Paul',
      last: 'McCartney'
    },
    dob: 'June 18, 1942'
  },
  {
    name: {
      first: 'George',
      last: 'Harrison'
    },
    dob: 'February 25, 1943',
    dod: 'November 29, 2001'
  },
  {
    name: {
      first: 'Ringo',
      last: 'Starr'
    },
    dob: 'July 7, 1940'
  }
];

// map takes callback function, which gets item, index, node list
const renderPeople = data.map(function(beatle){
  const dob = new Date(beatle.dob).getTime();  // date constructor, gets ms since dob
  const dod = new Date(beatle.dod).getTime();  // date constructor, gets ms since dod
  const now = Date.now();  // not feeding a string, just using Date to get now

  if (dod) {
    const age = Math.floor((dod - dob) / 31536000000);  // ms in a year, converts ms into years, rounded
    return {           // returns new array
      deceased: true,
      age,             // shortcut for age = age
      name: `${beatle.name.first} ${beatle.name.last}`
    }
  }

  const age = Math.floor((now - dob) / 31536000000);
  return {
    deceased: false,
    age,
    name: `${beatle.name.first} ${beatle.name.last}`
  }
});

console.log(renderPeople);

const ul = document.createElement('ul');
document.body.appendChild(ul);

renderPeople.forEach(renderContent);

function renderContent(itm){
  const li = document.createElement('li');
  li.textContent = `${itm.name}: age ${itm.age}`;
  if (itm.deceased) {
    li.textContent += ' (deceased)';
  }
  ul.appendChild(li);
}


// --------------------------------------- FILTER ------------------------------------------------


const livingBeatles = renderPeople.filter(beatle => !beatle.deceased);

console.table(livingBeatles);
