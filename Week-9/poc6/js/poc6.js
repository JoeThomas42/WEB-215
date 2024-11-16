'use strict'

/*
For every task - wrap your console.table() or console.log() statement(s) within a console.group() that indicates the task number. For example:

console.group('Task 1');
console.table(computer);
console.groupEnd();

This will provide a label for each console output, making it much easier to read!
*/

/* Task 1: Create an object
- Create a variable named: ram
    - set the value to: 16
- Create an object named: computer
- Include the following properties and values. Be sure to include a dangling comma after the final value:
  operating system = Windows 11
  ram = the value of the ram variable created earlier; use shorthand
  cpu = i7
  video-card = NVIDIA

- log the object to the console using console.table()
*/
const ram = 16;
const computer = {
 'operating system': 'Windows 11',
 ram,
 cpu: 'i7',
 'video-card': 'NVIDIA',
}

console.group('Task 1');
console.table(computer);
console.groupEnd();


/* Task 2: Nest Objects
- Copy/paste the computer object from Task 1, renaming it from computer to computerWithStorage
- add a nested object named: storage
- add the following properties to the nested storage object. Be sure to include a dangling comma after the final value:
  ssd = 1TB
  hdd = 4TB

- log the object to the console using console.table()
*/
const computerWithStorage = {
  'operating system': 'Windows 11',
  ram,
  cpu: 'i7',
  'video-card': 'NVIDIA',
  storage: {
    ssd: '1TB',
    hdd: '4TB',
  }
 }

console.group('Task 2');
console.table(computerWithStorage);
console.groupEnd();


/* Task 3: Add a Property
- Add the following property/value to the computerWithStorage object (without recreating the entire object!)
  usb = 4.0

- log the computerWithStorage object to the console using console.table()
*/
computerWithStorage.usb = '4.0';

console.group('Task 3');
console.table(computerWithStorage);
console.groupEnd();


/* Task 4: Add a Property to a Nested Object
- Add the following property/value to the storage object, which is nested within the computerWithStorage object (without recreating the entire object!)
  eSata = 4GB

- log the computerWithStorage object to the console using console.table()
*/
computerWithStorage.storage.eSata = '4GB';

console.group('Task 4');
console.table(computerWithStorage);
console.groupEnd();


/* Task 5: Edit an Object
- Edit the value of ram in the computerWithStorage object to 32

- log the computerWithStorage object to the console using console.table()
*/
computerWithStorage.ram = 32;

console.group('Task 5');
console.table(computerWithStorage);
console.groupEnd();


/* Task 6: Access Properties and Values
- Log the following statement to the console, replacing the bracketed text with what it indicates. This references the computerWithStorage object.

The computer has [value of the ram property]GB of RAM and a [value of the ssd property] SSD drive.
*/
console.group('Task 6');
console.log(`The computer has ${computerWithStorage.ram}GB of RAM and a ${computerWithStorage.storage.ssd} SSD drive.`);
console.groupEnd();


/* Task 7: View a Single Value Interactively
- Display a prompt that asks the question: View details of ram or cpu?
- Store the user's response in a variable, then use that variable to...
- ... console log the value of the requested property
  ... if an invalid response is typed (neither ram nor cpu), the console will simply output 'undefined'
*/
const viewData = prompt('View details of ram or cpu?');

console.group('Task 7');
if (viewData === 'ram') {
  console.log(`Computer ram: ${computerWithStorage.ram}GB`);
} else if (viewData === 'cpu') {
  console.log(`Computer cpu: ${computerWithStorage.cpu}`);
} else {
  console.log('undefined');
}
console.groupEnd();


/* Task 8: Delete a property
- Delete the video-card property from the computerWithStorage object

- log the computerWithStorage object to the console using console.table()
*/
delete computerWithStorage["video-card"];

console.group('Task 8');
console.table(computerWithStorage);
console.groupEnd();


/* Task 9: Create and Use a Method with the 'this' Keyword
- Copy/paste the computerWithStorage object from Task 2, renaming it from computerWithStorage to variableRam

-  Edit the variableRam object and create a method named: doubleRam
  - the method should double the current ram value
  - use the 'this' keyword rather than directly referencing the property

- Call the method and then log the variableRam object to the console using console.table()
- Duplicate the last two statements to call the method and log the object again.
- Duplicate the last two statements to call the method and log the object a 3rd and final time.
*/
const variableRam = {
  'operating system': 'Windows 11',
  ram,
  cpu: 'i7',
  'video-card': 'NVIDIA',
  storage: {
    ssd: '1TB',
    hdd: '4TB',
  },
  doubleRam(){
    this.ram *= 2;
  },
 }

 console.group('Task 9');
variableRam.doubleRam();
console.table(variableRam);
variableRam.doubleRam();
console.table(variableRam);
variableRam.doubleRam();
console.table(variableRam);
 console.groupEnd();


/* Task 10: Perform a Shallow Copy by Reference
- Copy the computerWithStorage object by reference, storing it in a variable named: computerCopy
- Update the value of the CPU property within the computerCopy object to: i9
- Update the value of the storage.ssd property within the computerCopy object to: 4GB

- Log the computerCopy object to the console and then log the computerWithStorage object to the console. Use console.table() for both.
- Take mental note of if the nested object was copied and if the original computerWithStorage object was modified
*/
const computerCopy = computerWithStorage;
computerCopy.cpu = 'i9';
computerCopy.storage.ssd = '4GB';

console.group('Task 10');
console.table(computerCopy);
console.table(computerWithStorage);
console.groupEnd();


/* Task 11: Perform a True Shallow Copy (not by reference)
- Copy the computerWithStorage object to a new object named: computerDuplicate
  - You may either use spread or Object.assign()
- Update the value of the CPU property within the computerDuplicate object to: i10
- Update the value of the storage.ssd property within the computerDuplicate object to: 6GB

- Log the computerDuplicate object to the console and then log the computerWithStorage object to the console. Use console.table() for both.
- Take mental note of if the nested object was copied and if the original computerWithStorage object was modified
*/
const computerDuplicate = {...computerWithStorage};
computerDuplicate.cpu = 'i10';
computerDuplicate.storage.ssd = '6GB';

console.group('Task 11');
console.table(computerDuplicate);
console.table(computerWithStorage);
console.groupEnd();


/* Task 12: Perform a Deep Copy using Lodash
- Link to the Lodash library via a CDN in your HTML file
- Use Lodash to copy the computerWithStorage object to a new object named: lodashComputer
- Update the value of the CPU property within the lodashComputer object to: i11
- Update the value of the storage.ssd property within the lodashComputer object to: 8GB

- Log the lodashComputer object to the console and then log the computerWithStorage object to the console. Use console.table() for both.
- Take mental note of if the nested object was copied and if the original computerWithStorage object was modified
*/
const lodashComputer = _.cloneDeep(computerWithStorage);
lodashComputer.cpu = 'i11';
lodashComputer.storage.ssd = '8GB';

console.group('Task 12');
console.table(lodashComputer);
console.table(computerWithStorage);
console.groupEnd();


/* Task 13: Merge Objects

- Merge the following two objects into a single object named: favs
- Log the favs object to the console using console.table()
*/

const favoriteFoods = {
  fruit: 'lime',
  seafood: 'crab',
  meal: 'pizza',
}

const favoriteAnimals = {
  felidae: 'jaguar',
  canidae: 'fox',
  ursidae: 'polar bear',
}

const favs = {
  ...favoriteFoods,
  ...favoriteAnimals,
}

console.group('Task 13');
console.table(favs);
console.groupEnd();
