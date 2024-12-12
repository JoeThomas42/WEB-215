'use strict';

//---- Global Variables ----//
const form = document.querySelector('form');
const forget = document.querySelector('[type=button]');
const nameField = form.querySelector('#name');
const languageMenu = form.querySelector('#language');
const majorRadioButtons = form.querySelectorAll('[type=radio]');
const arrMajorRadioButtons = Array.from(majorRadioButtons);
const h1 = document.querySelector('h1');
const h1Text = 'Web Storage Demo';

//---- Global Listeners ----//
if (form) {
  form.addEventListener('submit', handleForm);
}

if (forget) {
  forget.addEventListener('click', forgetMe);
}

//---- Initialization ----//
loadPage();

//---- Functions ----//
function loadPage() {
  const retrievedData = JSON.parse(localStorage.getItem('data'));  // converts back to object for use
  if(!retrievedData) return;
  h1.textContent = `${h1Text} for ${retrievedData.userName}`;
  nameField.value = retrievedData.userName;

  const arrLangMenuOptions = Array.from(languageMenu.options);
  const chosenOption = arrLangMenuOptions.find(option => option.text === retrievedData.lang);

  const storedRadioVal = retrievedData.isWebMajor;
  const selectedRadio = arrMajorRadioButtons.find(radio => radio.value === storedRadioVal);

  selectedRadio.checked = true;  
  languageMenu.selectedIndex = chosenOption.index;
}

function handleForm(evt) {
  evt.preventDefault();
  const nameVal = nameField.value;
  const langVal = languageMenu.value;
  const webMajor = arrMajorRadioButtons.find(radio => radio.checked);
  const webMajorVal = webMajor.value;

  const responses = {
    userName: nameVal,
    lang: langVal,
    isWebMajor: webMajorVal,    // set boolean variables in the affirmative (ISwebMajor)
  }

  localStorage.setItem('data', JSON.stringify(responses));   // Turns the object into a string for storage
  updatePage();
}

function updatePage() {
  loadPage();
  userFeedback(500, 'Information Saved');
}

function forgetMe() {
  localStorage.removeItem('userName');
  h1.textContent = h1Text;
  nameField.value = '';
  languageMenu.selectedIndex = 0;
  arrMajorRadioButtons.forEach(radio => radio.checked = false);

  userFeedback(500, 'Data Removed');
}

function pauseMe(ms = 0) { 
  return new Promise(function(res) {      // promise callback takes resolve and reject but we only need resolve
    setTimeout(res, ms);
  })       
}

async function userFeedback(ms, message) {
  const div = document.createElement('div');
  div.id = 'popup';
  const p = document.createElement('p');
  p.textContent = message;
  div.appendChild(p);
  document.body.insertAdjacentElement('afterbegin', div);
  const popup = document.getElementById('popup');

  await pauseMe(ms);
  popup.classList.add('fadeout');
  await pauseMe(ms);
  popup.remove();
}

/*
LangMenu,selectedIndex = 0, 1, 2, 3, 4... for the selected OPTION
LangMenu.options = a collection (not array) of all options
*/
