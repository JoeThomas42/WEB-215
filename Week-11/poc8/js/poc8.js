'use strict';

/*
For every task requiring console output - wrap your console.table() or console.log() statement(s) within a console.group() that indicates the task number. For example:

console.group('Task 1');
console.table(computer);
console.groupEnd();

This will provide a label for each console output, making it much easier to read! Note that not every task requires you to log something to the console.
*/

/*
NOTES: 
- For tasks 1, 2, and 3, I want the HREF value you extract to be an exact match of what's hard-coded in the HTML
- Do not perform any 'work' inside a console statement. Console statements should use only a single variable as an argument.
*/


/*
Task 1: Iterate through the DOM and integrate event listeners
- Loop through the DOM, getting every hyperlink (use getElementsByTagName) and storing them in a variable named: links
- Iterate through the collection of links, adding a click event listener to each one
  - Hint: You'll need to convert the HTMLCollection to an array in order to use the necessary iteration method
- When a link is clicked, the following should happen:
  - The default behavior of the link should be disabled so that the link doesn't work
  - The console should display the text of the clicked link, followed by a colon and then the href of the clicked link. For example:
  Google: https://google.com/ or Some Page: some-local-page.html
*/
const links = document.getElementsByTagName('a');
const arrLinks = Array.from(links);

console.group('Task 1');

arrLinks.forEach (link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const displayLinks = `${link.textContent}: ${link.href}`;
    console.log(displayLinks);
  })
})

console.groupEnd();
  


/*
Task 2: Iterate through an array, performing a function on each member
- Iterate over your collection of links from the previous task. If a link's HREF starts with "http", then append the emoji arrow ↗️ to the link's text so that users know it links to an external site. (You can copy/paste the emoji from these instructions into your code.)
- Use a method that performs a task, but doesn't unnecessarily return anything
*/

arrLinks.forEach(link => {
  if (link.href.startsWith('http')) {     // my live server seems to add http to every link no matter what, but I think this is what you're asking for
    link.textContent += '↗️';            // I got it to work correctly with: "if (!link.href.endsWith('html'))"
  }
})



/*
Task 3: Iterate over an array to find all members meeting criteria
- Iterate over your collection of links from the previous task. If a link's HREF starts with "http", then add that anchor element to an array named: externalLinks.
- Use a method that returns an array rather than manually 'pushing' items into an array
- Log (not table) the externalLinks array to the console
*/
console.group('Task 3');

const externalLinks = arrLinks.filter(link => link.href.startsWith('http'));  // same situation as the previous task
console.log(externalLinks);

console.groupEnd();




/*
Task 4: Iterate over an array to find the first member meeting criteria
- Iterate over your collection of links from the previous task. Find the first anchor who's HREF DOES NOT start with "http"
- Use a method that returns a single item
- Log that anchor element to the console
*/
console.group('Task 4');

const firstInternalLink = arrLinks.find(link => !link.href.startsWith('http'));   // and again. used: "link.href.endsWith('html')" to get desired result
console.log(firstInternalLink);

console.groupEnd();




/*
Task 5: Run a block of code n times
- Create a loop that creates four P elements, each with the text: This is paragraph #n
  - n should be an incrementing number starting at 1
  - Each paragraph should be appended to the body and render in the viewport
*/
for (let n = 1; n <= 4; n++) {
  const paragraph = document.createElement('p');
  paragraph.textContent = `This is paragraph #${n}`;
  document.body.appendChild(paragraph);
}




/*
Task 6: Iterate over an array
- use the theRealVanHalen array provided below
- Display each array member in the console, one at a time
- Use the appropriate kind of 'for' loop
	- Hint: You shouldn't have to initialize or use a counter
*/
const theRealVanHalen = ['eddie', 'alex', 'david', 'michael'];

console.group('Task 6');

for (const member of theRealVanHalen) {
  console.log(member);
}

console.groupEnd();



/*
Task 7: Iterate over an object
- use the theFakeVanHalen object provided below
- Display each band member's name (not their instrument) in the console, one at a time
- Use the appropriate kind of 'for' loop
	- Hint: You shouldn't have to initialize or use a counter
*/

const theFakeVanHalen = {
  eddie: 'guitar',
  alex: 'drums',
  michael: 'bass',
  sammy: 'vocals',
}

console.group('Task 7');

for (const member in theFakeVanHalen) {
  console.log(member);
}

console.groupEnd();
