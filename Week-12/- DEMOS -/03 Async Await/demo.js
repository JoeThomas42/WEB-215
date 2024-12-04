'use strict';

function doChores(chore) {
  return new Promise((resolve, reject) => {    // takes callback function that takes resolve method and reject method
    if (chore !== 'nap') resolve(`${chore} is complete`);
    reject(`${chore} is not a chore`);
  });
}

choreStatus(['Dishes', 'Laundry', 'nap', 'Dusting']);

function choreStatus(chores) {
  chores.map(async item => {
    try {
      const chore = await doChores(item);
      console.log(chore);
    } catch(errorData) {          // catches rejects
      console.log(errorData);
    }
  });
}
