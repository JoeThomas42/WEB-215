'use strict';

const btns = document.querySelectorAll('button');
const links = document.querySelectorAll('a');
const form = document.querySelector('form');

btns.forEach(attachClicker); //element, index, nodelist
links.forEach(attachClicker);

form.addEventListener('submit', function(e){
  e.preventDefault();
  document.querySelector('h1').textContent = document.getElementById('name').value;
})

function attachClicker(el){
  el.addEventListener('click', function(e){ //event
    e.preventDefault();
    // console.log(e)
    // console.log(e.type)
    // el.textContent = 'I have been clicked';
  })
}
