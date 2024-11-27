'use strict';

// getting by tag returns html collection that needs to be converted to array to use forEach
const btns = document.getElementsByTagName('button');
const arrBtns = Array.from(btns);

// query selector all returns node list which gets forEach
const btns2 = document.querySelectorAll('button');
btns2.forEach(itm => itm.addEventListener('click', handleClick));   // gets element, key, node list - only need element

function handleClick(e) {  // gets event for free
  console.log(e.target.textContent);
}
