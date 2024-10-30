'use strict';

window.addEventListener('click', () => {console.log('You clicked the WINDOW')})

document.body.addEventListener('click', e => {
  e.stopPropagation();
  console.log('You clicked the BODY')
})

const btns = document.querySelectorAll('button');
btns.forEach(handleBtnClick);

function handleBtnClick(el){
  el.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('You clicked a button.')
  })
}
