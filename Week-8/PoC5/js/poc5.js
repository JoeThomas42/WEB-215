'use strict';

/*
Task 1: Convert the following into an if block. When finished, change the value of num to test different scenarios, then set it back to 10.

A variable named 'num' has a value of 10.
If num is less than 10, console log "Too small"
Otherwise, if num is exactly 10, console log "perfect"
Otherwise, just console log "Too big"
*/
let num = 10;
if (num < 10) {
  console.log('Too small');
} else if (num === 10) {
  console.log('perfect');
} else {
  console.log('Too big');
}

/*
Task 2: Convert the following into an if block. When finished, change the value of num2 to test different scenarios, then set it back to 20.

A variable named 'num2' has a value of 20
If num2 is less than 20 and evenly divisible by 2, console log "a small even number"
If num2 is 20 or greater and evenly divisible by 2, console log "a large even number"
Otherwise, console log "an odd number"
*/
let num2 = 20;
if (num2 < 20 && num2 % 2 === 0) {
  console.log('a small even number');
} else if (num2 >= 20 && num2 % 2 === 0) {
  console.log('a large even number');
} else {
  console.log('an odd number');
}

/*
Task 3: Convert the following into an if block using coercion

If there is no SECTION tag on the page, console log "there is no section tag"
*/
if(!document.querySelector('section')) {
  console.log('there is no section tag');
}

/*
Task 4: Convert the following to a ternary operator. 
  Statement 1: variable declaration of pet
  Statement 2: Ternary if
  Statement 3: console log of petName

    let pet = 'dog';

    let petName;
    if (pet === 'dog') {
      petName = 'Brian';
    } else {
      petName = 'not a dog';
    }

    console.log(petName);
*/
let pet = 'dog';
let petName = pet === 'dog' ? 'Brian' : 'not a dog';
console.log(petName);

/*
Task 5: Convert the following if-else block to a switch

let food = 'apples';
let msg;
if(food === 'pizza') {
  msg = 'You like pizza';
} else if(food === 'cake') {
  msg = 'You like cake';
} else if(food === 'apples') {
  msg = 'You like apples';
} else {
  msg = `You don't like anything`;
}
console.log(msg);
*/
let food = 'apples';
let msg;
switch(food) {
  case 'pizza':
    msg = `You like pizza`;
    break;
  case 'cake':
    msg = `You like cake`;
    break;
  case 'apples':
    msg = `You like apples`;
    break;
  default:
    msg = `You don't like anything`;
    break;
}
console.log(msg)

/*
Task 6: Typing challenge. Here's what the user experience should be:

1] Click Start (a 5 second timer starts)
2] Type your name in the text field
3] Click Done! to stop the timer
  3a] If you clicked Done! before the timer went off, display "NAME IS A WINNER" as a bold paragraph under the form. 'NAME' should be replaced with whatever was typed into the form.
  3b] If the timer went off before you finished, display "TOO SLOW" as a bold paragraph under the form
  3c] Be sure that only one paragraph displays under the form - even if you play multiple times.
4] Test it rigorously and ensure it is a pleasant user experience. Think "usability"!
5] You will need to need multiple functions to solve this. Be sure each function includes an appropriate DocBlock

The HTML form is already coded for you. Don't edit the HTML. You will need to use concepts from previous weeks to solve this.
*/
const startButton = document.querySelector('input[value="Start"]');
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const doneButton = document.querySelector('input[type="submit"]');
let timer = null;

doneButton.disabled = true;
startButton.addEventListener('click', startTimer);
form.addEventListener('submit', handleSubmit);
document.addEventListener('keydown', handleEnterKey);

/**
 * Starts a 5-second timer. 
 * Disables the start button while active.
 * Moves the cursor to the input field.
 * If the user does not submit in time, displays "TOO SLOW" message and disables done button.
 * Clears any existing messages.
 */
function startTimer() {
  form.nextElementSibling.remove();
  nameInput.value = '';
  startButton.disabled = true;
  doneButton.disabled = false;
  nameInput.focus();

  timer = setTimeout(() => {
    displayMessage('TOO SLOW');
    doneButton.disabled = true;
    startButton.disabled = false;
  }, 5000);
}

/**
 * Handles the form submission when the user clicks done.
 * If submitted within the timer, displays the winner message.
 * 
 * @param {e} event - The form submission event
 */
function handleSubmit(e) {
  e.preventDefault();
  const name = nameInput.value;

  if (name === '') {
    return;
  }

  displayMessage(`${name} is a winner!`);
  clearTimeout(timer);
  doneButton.disabled = true;
  startButton.disabled = false;
}

/**
 * Displays a message under the form.
 * 
 * @param {string} text - The message text to display
 */
function displayMessage(text) {
  const message = document.createElement('p');
  message.innerHTML = `<b>${text}</b>`;

  form.insertAdjacentElement('afterend', message);
}

/**
 * Allows the Enter key to activate the Start button when a game has ended.
 */
function handleEnterKey(e) {
  if (e.key === 'Enter' && !startButton.disabled) {
    e.preventDefault();
    startButton.click();
  }
}
