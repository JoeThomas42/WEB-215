'use strict';

window.addEventListener('click', () => {console.log('You clicked the WINDOW')})

document.body.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log(this);
});

document.body.addEventListener('click', e => {  // 'this' scope changes with arrow function
  e.stopPropagation();
  console.log(this);
});

document.body.addEventListener('click', e => {  // currentTarget is best practice for consistency
  e.stopPropagation();
  console.log(e.currentTarget);
});

const btns = document.querySelectorAll('button');
btns.forEach(handleBtnClick);

function handleBtnClick(el){
  el.addEventListener('click', e => {  // using arrow function returns undefined with 'this'
    e.stopPropagation();
    console.log(e.currentTarget);
  });
}

