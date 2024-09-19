'use strict'

const l = console.log;

let span = document.querySelector('span');

// PROPERTIES
l(span.classList);

span.classList.add('upper', 'highlight');
l(span.classList);

span.classList.remove('highlight');
l(span.classList);

l(span.classList.contains('upper'));

span.classList.toggle('upper');
span.classList.toggle('highlight');

span.addEventListener('click', function() {
  this.classList.toggle('highlight');
});

// STYLE ATTRIBUTES
l(span.style);
l(span.style.cssText);
l(span.style.cssText = 'color: red; font-size: 2rem');
