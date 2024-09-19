'use strict'

const log = console.log;

let h1 = document.querySelector('h1');

// PROPERTIES
log(h1.textContent); // getter
// h1.textContent = 'new text'; // setter
// log(h1.textContent);

log(h1.innerText); // ignores hidden content
log(h1.outerText);
// h1.innerText = 'new inner text'; // same as textContent
// h1.outerText = 'new outer text'; // deletes containing HTML tags

// METHODS
h1.insertAdjacentText('beforeBegin', 'beforeBegin ');
h1.insertAdjacentText('afterBegin', 'afterBegin ');
h1.insertAdjacentText('beforeEnd', ' beforeEnd');
h1.insertAdjacentText('afterEnd', ' afterEnd');
