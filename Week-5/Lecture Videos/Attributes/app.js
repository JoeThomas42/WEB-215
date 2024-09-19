'use strict'

const l = console.log;

const meta = document.querySelector('meta');
const section = document.querySelector('section');
const a = document.querySelector('a');
const img = document.querySelector('img');
const body = document.querySelector('body');

// Element Properties - element.property - works for most not all - getter or setter
l(a.href);
l(a.target);
l(a.class); // DOESN'T WORK
  l(a.getAttribute('class')); // string
  l(a.classList); // collection
l(img.src);
l(img.alt);

img.src = 'https://picsum.photos/200/400';

l(section.dataset.demo);

a.href = 'http://google.com';
a.setAttribute('href', 'http://yahoo.com');
