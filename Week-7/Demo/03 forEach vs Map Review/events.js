'use strict';

const btns = Array.from(document.querySelectorAll('button'));
const links = Array.from(document.querySelectorAll('a'));

btns.map(attachClicker); //element, index, nodelist
links.map(attachClicker);

function attachClicker(el, idx){
  el.addEventListener('click', function(){
    el.textContent = 'I have been clicked';
    console.log(`You clicked ${el.textContent} at position ${idx}.`);
  })
}
