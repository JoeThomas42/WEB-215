'use strict'
/**********************
 *********************
NOTE: In my comments, I've referred to functions with their parenthesis. Example: someFunction()
That does not mean you should always use the parenthesis in your code. Sometime you would use someFunction (when referencing it) while other times you'd use someFunction() (when running it).
**********************
*********************/


// Global variables
/*
  Store the #style-picker element in a variable for use across multiple functions. The variable should be named: picker
*/
const picker = document.querySelector('#style-picker');

// SHOW PICKER MENU
/*
  - Bind a click listener to the #theme element, calling showPickerMenu() when clicked
  - Run showPickerMenu() after 5 seconds of page load
  - Create the showPickerMenu() function with a single statement - to show the picker menu via CSS display property
*/
document.querySelector('#theme').addEventListener('click', showPickerMenu);
setTimeout(showPickerMenu, 5000);

/**
 * Changes the display of the style-picker to block.
 */
function showPickerMenu() {
  document.querySelector('#style-picker').style.display = 'block';
}

// LISTEN FOR BUTTON CLICKS
/*
  - Store all buttons in a variable
  - Loop through the buttons, binding a click listener to each
    The click listener should call handleOptions(), passing it the clicked button element
*/
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', e => handleOptions(e)));

// HANDLE OPTIONS
/**
 * Handles the theme selection based on button clicks.
 * Switches through the selected button IDs to apply a different theme.
 * @param {Event} el - The click event of the button element.
 */
function handleOptions(el) {
  /*
  - Switch with 4 cases plus a default
      For each case, call loadStyles, passing it the stylesheet name (minus the file extension), the button element itself, and a text string for page display. HINT: You can tell which button was clicked by it's ID.
  - If no theme button is clicked (I like the current theme), close the picker via CSS display property
  */
  switch (el.target.id) {
    case 'def':
      loadStyles('theme-default', el, 'Default');
      break;
    case 'gray':
      loadStyles('theme-grayscale', el, 'Grayscale');
      break;
    case 'hc':
      loadStyles('theme-high-contrast', el, 'High Contrast');
      break;
    case 'clown':
      loadStyles('theme-clown', el, 'Clown');
      break;
  
    default:
      document.querySelector('#style-picker').style.display = 'none';
      break;
  }
}

// LOAD STYLES
/**
 * Applies the selected style theme, enables all buttons, and disables the selected button.
 * @param {string} sheet - The name of the theme stylesheet to apply.
 * @param {Event} btn - The button element associated with the selected theme.
 * @param {string} str - The display name of the theme for the page.
 */
function loadStyles(sheet, btn, str) {
  /*
  - Loop through the buttons, setting each one to enabled. 
      - HINT: The buttons are already stored in a global variable from earlier for easy access.
      - HINT: To enable a button, set its disable property to false
      - HINT: If you use an arrow function for the callback, this can be a single line of code.
  - Set the HREF of the appropriate link tag to the passed theme
  - Change the #theme text to that of the passed theme
  - Set the clicked button (passed to function) to disabled
  - Hide the picker box via CSS display property
  */
  buttons.forEach(button => button.disabled = false);
  document.querySelector('link[data-style="theme"]').setAttribute('href', `css/${sheet}.css`);
  document.querySelector('#theme').textContent = str;
  document.getElementById(btn.target.id).disabled = true;
  document.querySelector('#style-picker').style.display = 'none';
}

// COLOR MORPH SETUP
/*
  When morph box is clicked, call morph(), passing along the clicked button itself
    -HINT: Use an arrow function for the callback and you can do this is a single line of code
*/
document.querySelector('#morph').addEventListener('click', e => morph(e.target));

/*
  Plan ahead! Create a variable to store the interval ID. Name the variable: morphID
*/
let morphID;

// COLOR MORPH FUNCTION
/**
 * Toggles the color morph effect based on the checked state of the morphBox element.
 * Starts the morphing interval if checked, otherwise stops it and resets the color.
 * @param {HTMLElement} morphBox - The element controlling the color morph.
 */
function morph(morphBox) {
  /* 
  - If the box is checked:
      - call randomizeDegrees every 5 seconds, storing the interval in the morphId variable
      - console log "turning ON morph ID 123" with the actual ID#
      - exit the function
  - Stop randomizeDegrees from running
  - Console log "turning OFF morph ID 123" with the actual ID#
  - Call changeColor, passing it 0 so that the color is reset
  */
  if (morphBox.checked) {
    randomizeDegrees();
    morphID = setInterval(randomizeDegrees, 5000);
    console.log(`Turing ON morph ID ${morphID}`);
    return;
  }
  clearInterval(morphID);
  console.log(`Turning OFF morph ID ${morphID}`);
  changeColor(0);
}

/**
 * Generate a random number between 0-360 (inclusive) and pass that number to changeColor()
 *  Note that any range will work, but it defaults to 0 - 360
 *  Why 0 and 360? Because that defines the full degree range of a circle, or the color wheel
 *  The generated number is passed to changeColor
 * @param {number} min minimum random number to generate, inclusive
 * @param {number} max maximum random number to generate, inclusive
 */
function randomizeDegrees(min = 0, max = 360) {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  changeColor(num);
}

/**
 * Apply CSS hue filter to HTML tag
 *  Uses the random number passed from randomizeDegrees to rotate that many degrees on the color wheel from the old/current color to a new color
 *  Uses CSS filter to change the color and CSS transition to 'animate' the color change
 * @param {num} degree value passed from randomizeDegrees
 */
function changeColor(degree) {
  document.querySelector('html').style.cssText = `filter: hue-rotate(${degree}deg); transition: all 5s;`;
}
