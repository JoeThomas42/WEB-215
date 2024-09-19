'use strict'

//Document Properties
document.body;
document.forms;
document.links;



// Document Methods
document.getElementsByTagName('div');
document.getElementsByTagName('body'); // returns a collection
document.getElementsByClassName('class1');
document.getElementsByClassName('class2');
document.getElementsByClassName('class1, class2'); // looks for element with BOTH classes
document.getElementsByClassName(''); // looks for element with EITHER classes
document.getElementById('search');
document.querySelectorAll('.class1 #search') // decendant css - search is insiode class1
document.querySelectorAll('.class1, #search') // looks for any of these
document.querySelector() //  only returns the first one found

// Scope
document.querySelector('#search').querySelectorAll('button'); // only buttons inside of search
document.querySelector('#search button'); // only buttons inside of search
