'use strict';

const links = document.querySelectorAll('a');
const form = document.querySelector('form');

links.forEach(function(link){
  link.addEventListener('click', stopIt);
});

form.addEventListener('submit', stopIt);

function stopIt(e){
  e.preventDefault();
}

document.body.addEventListener('click', bodyGame);

function bodyGame(e){
  console.log(this, e.target, e.target.outerText);
  if(e.target === this){
    document.querySelector('h1').textContent = 'YOU WIN!';
  } else {
    document.querySelector('h1').textContent = 'NOT THE BODY!';
  }
}

/*
target - thing you actually clicked on
currentTarget = this ... MOST OF THE TIME
this - refers to element that is bound to the event, in this case the body
propagation
bubbling
*/
