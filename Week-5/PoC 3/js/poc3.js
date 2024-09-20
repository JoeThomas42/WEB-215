/*
Task 1
ensure your code adheres to strict syntax
*/

'use strict'

/*
Task 2
Use a PROPERTY to get all the links on the page. 
Store them in a variable named: allLinks
log the variable to the console
*/

let allLinks = document.links;
console.log(allLinks);

/*
Task 3
Use a METHOD to get the H1.
Store it in a variable named: pageHeading.
Use the variable and a PROPERTY to change the text to: PoC 3
*/

let pageHeading = document.querySelector('h1');
pageHeading.textContent = 'PoC 3';

/*
Task 4
Use a METHOD to insert text adjacent to the heading text so that your first/last name is appended to the end. The final should read:
PoC 3: First Last
Feel free to use the variable created in the previous task.
*/

pageHeading.insertAdjacentText('beforeEnd', ': Joe Thomas');

/*
Task 5
Use a METHOD to create a new H2 element, stored in a variable named: h2
Add the following text to the new h2 element: DOM Exploration
Add the new h2 to the page immediately after the h1. Be sure to generate valid HTML.
Feel free to use the heading variable created earlier.
*/

let h2 = document.createElement('h2');
h2.textContent = 'DOM Exploration';
pageHeading.insertAdjacentElement('afterEnd', h2);

/*
Task 6
Use a PROPERTY to get the list of all classes applied to the H1.
Feel free to use the heading variable created earlier.
Store this list in a variable named: headingClasses
log the variable to the console
*/

let headingClasses = pageHeading.classList;
console.log(headingClasses);

/*
Task 7
Use a method to remove the 'upper' class from the H1.
Use a method to add the 'title' class to the H1.
Feel free to use the heading variable created earlier.
*/

headingClasses.remove('upper');
headingClasses.add('title');

/*
Task 8
Use a PROPERTY to add the following CSS declarations (without a class) to the last paragraph within the header:
font-style: italic;
border: 1px solid #333;
border-radius: 1rem;
padding: .5rem;
*/

document.querySelector('header p:last-of-type').style.cssText = 'font-style: italic; border: 1px solid #333; border-radius: 1rem; padding: .5rem;';

/*
Task 9
Use a PROPERTY to get the HREF value of the first link on the page.
Store it in a variable named: link1
Log the variable to the console.
*/

let link1 = document.querySelector('a').href;
console.log(link1);

/*
Task 10
You will do the same thing two different ways
1] Use a METHOD to get the second link on the page, then use a METHOD to get its HREF value.
   This should be a very long CSS selector!
   Store it in a variable named: link2a
   Log the variable to the console.
2] Use a different METHOD to get the second link on the page, then use a METHOD (the same as above) to get its HREF value.
   This should not use a CSS selector
   Store it in a variable named: link2b
   Log the variable to the console.
*/

let link2a = document.querySelector('body div section ul li:nth-of-type(2) a').getAttribute('href');
console.log(link2a);

let link2b = document.getElementsByTagName('a')[1].getAttribute('href');
console.log(link2b);

/*
Task 11
Use a METHOD to add target="_blank" to the first link on the page.
Be sure to test the link!
Use a variable from the previous task. <------------- NOT SURE HOW TO DO THIS <--------------
*/

document.querySelector('a').setAttribute('target', '_blank');

/*
Task 12
Use a PROPERTY to get the value of the data-listCategory attribute of the first UL on the page.
Store it in a variable named: listCat
Log the variable to the console.
*/

let listCat = document.querySelector('ul').dataset.listcategory;
console.log(listCat);

/*
Task 13
Without creating any new elements, change the content of the SECTION with an ID of 'properties' to the following HTML:
<p>This <abbr title="Hypertext Markup Language">HTML</abbr> content has been changed.</p>
*/

document.querySelector('section#properties').innerHTML = '<p>This <abbr title="Hypertext Markup Language">HTML</abbr> content has been changed.</p>';

/*
Task 14
Remove the footer from the page
*/

document.querySelector('footer').remove();

/*
Task 15
Select the only H6 on the page and store it in a variable named: h6
Get the h6 text and store it in a variable named: h6Text
Use a METHOD to create a new H3 element, stored in a variable named: newH3
Set the text of newH3 to be the same as the text of the h6, currently stored in the h6Text variable
Use a METHOD to replace the h6 element with the new h3 element.
*/

let h6 = document.querySelector('h6');
let h6Text = h6.textContent;
let newH3 = document.createElement('h3');
newH3.textContent = h6Text;
h6.replaceWith(newH3);
