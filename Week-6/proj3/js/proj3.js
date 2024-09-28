'use strict';

addInlineStyles("html", "font: 17px Arial, Helvetica, sans-serif;");
addInlineStyles("body", "background-color: #f0f0f0; margin: 2rem;");

replaceText("title", "Joseph Thomas");
replaceText("h1", "Joseph Thomas' Project 3");

addClass("ol", "zebraList");
addClass("ul", "zebraList");
addClass("div", "columns");
addClass("div", "border");

replaceElements("h6", "h2");
replaceElements("h5", "h2");
replaceElements("ol", "ul");

newElementWithText("footer", "Project complete!", "body", "beforeend");
newElementWithText("p", "Here are some JavaScript methods and properties everyone should know.", "h1", "afterend");

/**
 * Adds inline styles to a specified element.
 *
 * @param {string} el - The selector for the element to style.
 * @param {string} declarations - A string of CSS declarations to apply.
 */
function addInlineStyles(el, declarations) {
	document.querySelector(el).style.cssText += declarations;
}

/**
 * Changes the text content of the specified element.
 * 
 * @param {string} el - The selector for the specified element to style.
 * @param {string} text - The text to change the selected element to.
 */
function replaceText(el, text) {
	document.querySelector(el).textContent = text;
}

/**
 * Adds classes to the specified element.
 * 
 * @param {string} el - The selector for the specified element to style.
 * @param {string} newClass - The class to add to the selected element.
 */
function addClass(el, newClass) {
	document.querySelector(el).classList.add(newClass);
}

/**
 * Replaces a specified element with another element while maintaining the original's classes and text content.
 *
 * @param {string} replaceMe - The CSS selector for the element to be replaced.
 * @param {string} myReplacement - The tag name for the new element.
 */
function replaceElements(replaceMe, myReplacement) {
	let oldElement = document.querySelector(replaceMe);
	oldElement.outerHTML = `<${myReplacement} class="${oldElement.className}">${oldElement.innerHTML}</${myReplacement}>`;
}

/**
 * Creates a new element with specified text and inserts it relative to a target element.
 *
 * @param {string} newElement - The tag name for the new element to be created.
 * @param {string} text - The text content to be added to the new element.
 * @param {string} targetElement - The CSS selector for the target element relative to which the new element will be inserted.
 * @param {string} position - The position relative to the target element where the new element should be inserted.
 */
function newElementWithText(newElement, text, targetElement, position) {
	let element = document.createElement(newElement);
	element.textContent = text;
	document.querySelector(targetElement).insertAdjacentElement(position, element);
}
