'use strict'

/*
How to select SINGLE elements
*/

let theP = document.getElementById('p2');
let thePQS = document.querySelector('#p2');


/*
How to select GROUPS of elements
*/

let allPs = document.getElementsByTagName('p'); // HTML collection
let allPsQSA = document.querySelectorAll('p'); // Node list
let allPsQSA2  = document.querySelectorAll('p:nth-of-type(2)'); // Node list
let allImp = document.getElementsByClassName('important');

allPsQSA.forEach(function(item, index, entireNodeList){
  console.log(item, index, entireNodeList)
});

allPsQSA2.forEach(function(item, index, entireNodeList){
  console.log(item, index, entireNodeList)
});

let allEls = document.links
console.log(allEls)
