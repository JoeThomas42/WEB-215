'use strict'

const l = console.log;

const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');

// create element
let li = document.createElement('li'); // <li></li>
li.textContent = 'JS';
ul.appendChild(li);
// ul.insertAdjacentElement('afterBegin', li);

let h3 = document.createElement('h3');
h3.textContent = 'Before ul';
ul.insertAdjacentElement('beforeBegin', h3);

let h2 = document.createElement('h2');
h2.textContent = 'After h1';
h1.insertAdjacentElement('afterEnd', h2);

// ul.remove();
let p = document.createElement('p').textContent = 'new paragraph';
ul.replaceWith(p);

h3.innerHTML = '<p>Changed to Paragraph</p>'; // can be bad - put a p inside an h3
h3.outerHTML = '<p>Changed to Paragraph</p>'; // replaces h3 tag with p
