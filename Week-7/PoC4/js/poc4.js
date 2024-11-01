'use strict';

// Heading text setup
const heading = document.querySelector('h1');
const form = document.querySelector('form');
const slider = document.getElementById('text-size');
const sizeText = document.getElementById('size-text');

// Initialize the page
initPage();

/**
 * Initializes the page by setting the size text content and applying initial styles based on the slider's current value.
 */
function initPage(){
  sizeText.textContent = `${slider.value}px`;
  sizeText.style.cssText = `display: inline=block; transform: translateX(${slider.value}px);`;
}

// Heading text
form.addEventListener('submit', function(e){
  e.preventDefault();
  const newHeading = document.getElementById('new-heading').value;
  heading.textContent = newHeading;
})

// Text size
slider.addEventListener('input', handleSlider);

/**
 * Handles the slider input by updating the heading's font size and repositioning the size text label.
 */
function handleSlider(){
  const fontSize = `${slider.value}px`;
  heading.style.fontSize = fontSize;
  sizeText.textContent = fontSize;
  sizeText.style.cssText = `display: inline-block; transform: translateX(${calculateLabelPos(slider.value)}px)`;
}

/**
 * Calculates the new position for the size text label based on the slider's value.
 * 
 * Adapted from https://css-tricks.com/value-bubbles-for-range-inputs/
 */
function calculateLabelPos() {
  const val = slider.value;
  const newVal = Number(((val - slider.min) * 100) / (slider.max - slider.min));
  sizeText.textContent = `${val}px`;
  sizeText.style.left = `${val}%`;
  sizeText.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  return newVal;
}

// Door game setup
const outerBox = document.getElementById('modalOuterBox');
const closeBtn = document.getElementById('close');
const doors = document.querySelectorAll('button');

// Game
doors.forEach(function(el){
  el.addEventListener('click', buttonGame);
})

/**
 * Handles the game logic when a door button is clicked.
 */
function buttonGame(){
  const door = parseInt(this.dataset.door);
  const prize = Math.floor(Math.random() * 3 + 1);

  if (door === prize) {
    showResult(door, prize, 'You Won!');
  } else {
    showResult(door, prize, 'You Lost :-(');
  }
}

// Show modal
/**
 * Displays the game result in a modal dialog.
 * 
 * @param {number} buttonClicked - The door number that the user clicked.
 * @param {number} randomNum - The randomly selected prize door number.
 * @param {string} msg - The message to display (e.g., 'You Won!' or 'You Lost :-(').
 */
function showResult(buttonClicked, randomNum, msg) {
  const content = `<h1>${msg}</h1><p>You clicked ${buttonClicked}. The winning number was ${randomNum}.`;
  const innerModal = document.getElementById('modalContent');
  const oldData = document.querySelector('[data-desc="content"]');
  oldData ? oldData.remove() : null;

  const div = document.createElement('div');
  div.setAttribute('data-desc', 'content');
  div.innerHTML = content;
  innerModal.appendChild(div);
  outerBox.style.display = 'block';
}

// Close modal
closeBtn.addEventListener('click', () => {outerBox.style.display = 'none'});
outerBox.addEventListener('click', function(e){
  if(e.target.matches('#modalOuterBox')){
    modalOuterBox.style.display = 'none';
  }
})
