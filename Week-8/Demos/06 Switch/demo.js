'use strict';

const fName = 'Joe';

if (fName === '') {
  console.log('No name');
} else if (fName === 'Joe') {
  console.log('Joe is the name');
} else if (fName === 'Kelly') {
  console.log('Kelly is the name');
} else {
  console.log('Not a good name');
}

// Switch statements only check for equality
// converted to switch:

switch (fName) {
  case '':
    console.log('No name');
    break;
  case 'Joe':
    console.log('Joe is the name');
    break;
  case 'Kelly':
    console.log('Kelly is the name');
    break;
  default:
    console.log('Not a good name');
    break;
}

//
// app to change font size
//

window.addEventListener('keydown', handleKeys);

function handleKeys(e) {
  const p = document.querySelector('p');
  let fs = parseInt(p.style.fontSize);

  // if fs not set, sets to 16
  if (!fs || e.key === 'Home') {
    fs = 16;
  }

  // exits function if anything other than an arrow or alt key is pressed
  if (!e.key.includes('Arrow') || !e.altKey) return;
  
  switch (e.key) {
    case 'ArrowUp':
      fs++;
      break;
    case 'ArrowRight':
      fs++;
      break;
    case 'ArrowDown':
      fs--;
      break;
    case 'ArrowLeft':
      fs--;
      break;
    default:
      console.log('Invalid Key');
  }

  // sets style to font size, needs px
  p.style.fontSize = `${fs}px`;

  console.log(fs);
}
