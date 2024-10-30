'use strict';

const btns = document.querySelectorAll('button');
const links = document.querySelectorAll('a');

btns.forEach(attachClicker); //element, index, nodelist
links.forEach(attachClicker);

function attachClicker(el, idx){
  el.addEventListener('click', function(){
    el.textContent = 'I have been clicked';
    console.log(`You clicked ${el.textContent} at position ${idx}.`);
  })
}
