'use strict';

/*
Task 1: Convert the following into an if block. When finished, change the value of num to test different scenarios, then set it back to 10.

A variable named 'num' has a value of 10.
If num is less than 10, console log "Too small"
Otherwise, if num is exactly 10, console log "perfect"
Otherwise, just console log "Too big"
*/

/*
Task 2: Convert the following into an if block. When finished, change the value of num2 to test different scenarios, then set it back to 20.

A variable named 'num2' has a value of 20
If num2 is less than 20 and evenly divisible by 2, console log "a small even number"
If num2 is 20 or greater and evenly divisble by 2, console log "a large even number"
Otherwise, console log "an odd number"
*/

/*
Task 3: Convert the following into an if block using coercion

If there is no SECTION tag on the page, console log "there is no section tag"
*/

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

/*
Task 5: Convert the following if-else block to a switch
*/

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
