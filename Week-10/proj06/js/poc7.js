'use strict'

/*
For every task - wrap your console.table() or console.log() statement(s) within a console.group() that indicates the task number. For example:

console.group('Task 1');
console.table(computer);
console.groupEnd();

This will provide a label for each console output, making it much easier to read!
*/





/* Task 1: Create an array
- Create an array named: dogs
    - populate the array with the names of four cartoon dogs of your choice

- log the array to the console using console.table()
*/
const dogs = [
  'Scooby Doo',
  'Clifford',
  'Snoopy',
  'Brian'
]

console.group('Task 1');
  console.table(dogs);
console.groupEnd();




/* Task 2: Access an array member
- Create a variable named: dog2
    - set the value of the dog2 variable to the 2nd member of the dogs array, using a bracketed index

- log the dog2 variable to the console using console.log()
*/
const dog2 = dogs[1];

console.group('Task 2');
  console.log(dog2);
console.groupEnd();




/* Task 3: Determine total number of array members
- Without creating any variables, use console.log() to display the total number of array members of the dogs array

*/
console.group('Task 3');
  console.log(dogs.length);
console.groupEnd();




/* Task 4: Reverse the order of array members
- Create a variable for an empty array named: dogsRev
    - Populate the dogsRev array with the contents of the dogs array in reverse order
    - ensure the original dogs array is unchanged (NOT reversed)

- log the dogs variable to the console using console.table() to show it has not been mutated (reversed)
- log the dogsRev variable to the console using console.table() to show it's the reverse of the original dogs array
*/
const dogsRev = [...dogs];
dogsRev.reverse();

console.group('Task 4');
  console.table(dogs);
  console.table(dogsRev);
console.groupEnd();




/* Task 5: Add an item to the start of an array
- Use a method to add the name of a cartoon cat to the beginning of the dogs array

- log the dogs variable to the console using console.table()
*/
dogs.unshift('Felix');

console.group('Task 5');
  console.table(dogs);
console.groupEnd();




/* Task 6: Add an item to the end of an array
- Add the name of a cartoon cat to the end of the dogs array
- DO NOT use a method
  - Assume you don't know how many array items there currently are

- log the dogs variable to the console using console.table()
*/
dogs[dogs.length] = 'Garfield';

console.group('Task 6');
  console.table(dogs);
console.groupEnd();




/* Task 7: Add an item to the middle of an array
- Before you begin, your dogs array should contain 6 members
- Add the name of a cartoon cat to the middle of the dogs array so that it is the 4th member and the array should now have 7 members
- HINT: You will need to add the cat to a copy of the original dogs array. Name your new array: dogsAndCats

- log the dogsAndCats array to the console using console.table()
*/
const dogsAndCats = [
  ...dogs.slice(0,3),
  'Scratchy',
  ...dogs.slice(3)
];

console.group('Task 7');
  console.table(dogsAndCats);
console.groupEnd();




/* Task 8: Remove the first array member
- Use a method to delete the 1st array member (a cat) from the dogsAndCats array

- log the dogsAndCats variable to the console using console.table()
*/
dogsAndCats.shift();

console.group('Task 8');
  console.table(dogsAndCats);
console.groupEnd();




/* Task 9: Remove the last array member
- Use a method to delete the last array member (a cat) from the dogsAndCats array
  - Assume you don't know how many array items there currently are

- log the dogsAndCats variable to the console using console.table()
*/
dogsAndCats.pop();

console.group('Task 9');
  console.table(dogsAndCats);
console.groupEnd();




/* Task 10: Remove an array member that's not 1st or last
- Remove the cat array member from the middle of the dogsAndCats array
- HINT: Use a mutable method and do not create any copies of the array

- log the dogsAndCats variable to the console using console.table()
- Note the array name is still dogsAndCats, but there are no cats in there any more!
*/
dogsAndCats.splice(2, 1);

console.group('Task 10');
  console.table(dogsAndCats);
console.groupEnd();




/* Task 11: Search for and delete an array member
- Use the provided kennelItems array below
- Search for the 'toys' array member and delete it based on its index (assume you don't know it's the 3rd member)
- HINT: Generate new array without "toys", named: kennelNoToys

- log the kennelNoToys variable to the console using console.table()
*/
let kennelItems = ['food', 'bedding', 'toys', 'medication'];

const toysIndex = kennelItems.findIndex(itm => itm === 'toys');
const kennelNoToys = [
  ...kennelItems.slice(0, toysIndex),
  ...kennelItems.slice(toysIndex + 1)
];

console.group('Task 11');
  console.table(kennelNoToys);
console.groupEnd();




/* Task 12: Create an array from an object
- Use the provided tool object below (note three tasks use the same object)
- Create an array that contains all the property names of the object (manufacturer, type, model, ...)
- Name the array: toolProps

- log the toolProps array to the console using console.table()
*/
const tool = {
  manufacturer: 'Harvey',
  type: 'Band saw',
  model: 'Ambassador C14',
  hp: 3,
  resaw: 14,
  castIronTable: true,
  quickRelease: true,
  brake: true,
  retail: 2499,
};

const toolProps = Object.keys(tool);

console.group('Task 12');
  console.table(toolProps);
console.groupEnd();




/* Task 13: Create an array from an object
- Use the provided tool object above (note three tasks use the same object)
- Create an array that contains all the property values of the object (Harvey, Band saw, Ambassador C14, ...)
- Name the array: toolVals

- log the toolVals array to the console using console.table()
*/
const toolVals = Object.values(tool);

console.group('Task 13');
  console.table(toolVals);
console.groupEnd();




/* Task 14: Create an array from an object
- Use the provided tool object above (note three tasks use the same object)
- Create an array that contains all the property-value pairs of the object (manufacturer: 'Harvey', type: 'Band saw', model: 'Ambassador C14', ...)
- Name the array: toolEntries

- log the toolEntries array to the console using console.table()
*/
const toolEntries = Object.entries(tool);

console.group('Task 14');
  console.table(toolEntries);
console.groupEnd();




/* Task 15: Convert an array to a string
- Use the provided array below
- Convert the array to a string
- Use a comma as the delimiter and be sure there is a space to the right of each comma for readability
- Store the string a variable named: woodshop

- log the woodshop array to the console using console.table()
*/
const shopEquipment = ['table saw', 'band saw', 'miter saw', 'planer', 'jointer', 'router table'];

const woodshop = shopEquipment.join(', ');

console.group('Task 15');
  console.table(woodshop);
console.groupEnd();




/* Task 16: Convert a string to an array
- Use the provided string below
- Convert the string to an array
- Store the array a variable named: species
- Trim the array members to remove the excess whitespace
  - Hint: use the map() method within an anonymous function
- Store the trimmed members in an array named: speciesTrimmed

- log the species array to the console using console.table()
- log the speciesTrimmed array to the console using console.table()
*/
let wood = 'ambrosia maple, walnut, curly cherry, hickory';

const species = wood.split(',');
const speciesTrimmed = species.map(itm => itm.trim());

console.group('Task 16');
  console.table(species);
  console.table(speciesTrimmed);
console.groupEnd();




/* Task 17: Determine if an item is in an array
- Use the mapleVariants array provided below
- Determine if the following item is in the array: wormy maple

- log true (if it exists) or false (if it does't exist) to the console using console.log()
*/
let mapleVariants = ['ambrosia maple', 'wormy maple', 'birdseye maple'];

const findThis = 'wormy maple';
const result = mapleVariants.some(arrayMember => arrayMember.toLowerCase().includes(findThis.toLowerCase()));

console.group('Task 17');
  console.log(result);
console.groupEnd();




/* Task 18: Extract a portion of an array based on criteria
- Use the figuredWoods array provided below
- Find all types of curly woods and store them in a new array named: curls

- log the curls array to the console using console.table()
*/
const figuredWoods = ['wormy maple', 'curly maple', 'birdseye maple', 'ambrosia maple', 'curly cherry', 'curly walnut', 'wormy walnut'];

/**
 * A function to determine if a given array member includes the specified word.
 * 
 * @param {string} - word 
 * @returns {function(string): boolean} -  returns `true` if the array member includes the specified word (case-insensitive), otherwise `false`
 */
function findWord(word) {
  return arrayMember => arrayMember.toLowerCase().includes(word.toLowerCase());
}

const curls = figuredWoods.filter(findWord('curly'));

console.group('Task 18');
  console.table(curls);
console.groupEnd();




/* Task 19: Find the first occurrence of a word within an array
- Use the woodVariants array provided below
- Find the first occurrence of: curly
- Store the result in a variable named: curly

- log the curly variable to the console using console.log()
*/
let woodVariants = ['ambrosia maple', 'curly maple', 'wormy maple', 'curly cherry', 'curly walnut'];

const firstCurly = woodVariants.find(findWord('curly'));

console.group('Task 19');
  console.log(firstCurly);
console.groupEnd();




/* Task 20: Search for and delete array items
- Use the woodVariants array provided above
- Find and remove all items that include the word: maple
- Store the results in an array named: noMaple
  - HINT: Search for 'maple', and if the item DOES NOT include 'maple', return it as part of the new array

- log the noMaple array to the console using console.table()
*/

const noMaple = woodVariants.filter(item => !item.toLowerCase().includes('maple'.toLowerCase()));

console.group('Task 20');
  console.table(noMaple);
console.groupEnd();




/* Task 21: Sort numbers
- Use the sales array provided below
- Sort the numbers, ascending, and store in a new array named: salesAsc
  - Hint: use Lodash!

- log the salesAsc array to the console using console.table()
*/
let sales = [200, 187, 264, 32, 9, 473, 326];

const salesAsc = _.sortBy(sales);

console.group('Task 21');
  console.table(salesAsc);
console.groupEnd();




/* Task 22: Sort text
- Use the salesTeam array provided below
- Sort the names, descending, and store in a new array named: teamDesc
  - Hint: use Lodash!

- log the teamDesc array to the console using console.table()
*/
let salesTeam = ['Mal', 'Bill', 'Melissa', 'Steve', 'Mary'];

const teamDesc = _.orderBy(salesTeam, null, 'desc');

console.group('Task 22');
  console.table(teamDesc);
console.groupEnd();
