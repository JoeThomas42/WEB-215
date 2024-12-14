'use strict';

//---- Global Variables ----//
const STATE = {
  currentTerm: '',
  currentPage: 1,
  totalResults: 0,
  observer: null
};

const API = {
  key: '59922ab6',
  baseUrl: 'https://www.omdbapi.com/'
};

const ELEMENTS = {
  form: document.querySelector('form'),
  searchInput: document.querySelector('#s'),
  saveCheckbox: document.querySelector('#save'),
  resultsSection: document.querySelector('#results'),
  loadmoreSection: document.querySelector('#loadmore'),
  h1: document.querySelector('h1'),
  h2: document.createElement('h2')
};

//---- Initialization ----//
ELEMENTS.h1.insertAdjacentElement('afterend', ELEMENTS.h2);
attachEventListeners();
loadSavedSearch();

/**
 * Attaches event listeners to form and checkbox.
 * @returns {void}
 */
function attachEventListeners() {
  ELEMENTS.form?.addEventListener('submit', handleForm);
  ELEMENTS.saveCheckbox?.addEventListener('change', handleCheckbox);
}

/**
 * Loads saved search data from localStorage and performs initial search if saved.
 * @returns {void}
 */
function loadSavedSearch() {
  const savedData = JSON.parse(localStorage.getItem('searchData')) || {};
  const {term = '', shouldSave = false} = savedData;

  STATE.currentTerm = term;
  ELEMENTS.searchInput.value = term;
  ELEMENTS.saveCheckbox.checked = shouldSave;

  if (term && shouldSave) startNewSearch(term);
}

/**
 * Handles the form submission.
 * @param {Event} evt - The submit event
 * @returns {void}
 */
function handleForm(evt) {
  evt.preventDefault();
  const term = ELEMENTS.searchInput.value.trim();
  if (!term) return;
  
  STATE.currentTerm = term;
  startNewSearch(term);
}

/**
 * Handles checkbox state changes for saving search terms.
 * @returns {void}
 */
function handleCheckbox() {
  const shouldSave = ELEMENTS.saveCheckbox.checked;
  const action = shouldSave && STATE.currentTerm ? saveSearchTerm : clearSavedSearch;
  action(STATE.currentTerm, shouldSave);
}

/**
 * Fetches movie data from the OMDb API.
 * @param {string} term - Search term to query
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} Promise resolving to the API response
 */
async function fetchMovies(term, page) {
  const url = new URL(API.baseUrl);
  url.searchParams.set('apikey', API.key);
  url.searchParams.set('s', term);
  url.searchParams.set('page', page);
  
  const response = await fetch(url);
  return response.json();
}

/**
 * Initiates a new movie search with the given term.
 * @param {string} term - Search term to query
 * @returns {void}
 */
function startNewSearch(term) {
  clearResults();
  updateHeaderTerm(term, false);

  STATE.currentPage = 1;
  STATE.totalResults = 0;

  if (ELEMENTS.saveCheckbox.checked) saveSearchTerm(term, true);

  fetchMovies(term, STATE.currentPage)
    .then(data => handleMovieData(data, term))
    .catch(err => displayErrorMessage(err));
}

/**
 * Processes movie data received from the API.
 * @param {Object} data - Response data from the API
 * @param {string} term - Search term used for the query
 * @returns {void}
 */
function handleMovieData(data, term) {
  if (data.Response === 'False') {
    displayErrorMessage(data);
    return;
  }

  STATE.totalResults = STATE.totalResults || parseInt(data.totalResults, 10);
  renderMovies(data.Search);
  updateHeaderTerm(term, true, STATE.totalResults);
  setupIntObserve(term);
}

/**
 * Renders an array of movies to the results section.
 * @param {Object[]} movies - Array of movie data objects
 * @returns {void}
 */
function renderMovies(movies) {
  const movieElements = movies.map(createMovieElement);
  ELEMENTS.resultsSection.append(...movieElements);
}

/**
 * Creates an element structure for each movie.
 * @param {Object} movie - Movie data object from the API
 * @returns {HTMLElement} Section element containing movie information
 */
function createMovieElement(movie) {
  const section = document.createElement('section');
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const img = document.createElement('img');

  h3.textContent = movie.Title;
  p.textContent = `Year released: ${movie.Year.slice(0, 4)}`;

  const hasPoster = movie.Poster && movie.Poster !== 'N/A';
  img.src = hasPoster ? movie.Poster : 'https://placehold.co/150x200?text=No Poster';
  img.alt = `${hasPoster ? 'Poster' : 'No poster available'} for ${movie.Title}`;

  div.append(h3, p, img);
  section.appendChild(div);
  return section;
}

/**
 * Sets up intersection observer for lazy loading.
 * @param {string} term - Current search term
 * @returns {void}
 */
function setupIntObserve(term) {
  const movieSections = ELEMENTS.resultsSection.querySelectorAll('section');
  const movieCount = movieSections.length;
  ELEMENTS.loadmoreSection.style.display = 'flex';
  
  if (movieCount >= STATE.totalResults) {
    ELEMENTS.loadmoreSection.textContent = "End of results.";
    
    if (STATE.observer) {
      STATE.observer.disconnect();
      STATE.observer = null;
    }
    
    return;
  }

  if (!STATE.observer) {
    STATE.observer = new IntersectionObserver(
      entries => handleIntersection(entries, STATE.observer, term),
      {threshold: 0, rootMargin: '50px'}
    );
  }

  const lastMovie = movieSections[movieSections.length - 1];
  if (lastMovie) STATE.observer.observe(lastMovie);
}

/**
 * Handles intersection observer entries for lazy loading.
 * @param {IntersectionObserverEntry[]} entries - Array of intersection entries
 * @param {IntersectionObserver} observer - The intersection observer instance
 * @param {string} term - Current search term
 * @returns {void}
 */
function handleIntersection(entries, observer, term) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  observer.unobserve(entry.target);
  STATE.currentPage++;

  fetchMovies(term, STATE.currentPage)
    .then(data => {
      if (data.Response === 'False') {
        displayErrorMessage(data);
        return;
      }
      renderMovies(data.Search);
      setupIntObserve(term);
    })
    .catch(err => displayErrorMessage(err));
}

/**
 * Updates the header with search term and result count.
 * @param {string} term - Search term
 * @param {boolean} hasResults - Whether there are results to display
 * @param {number} [total] - Total number of results
 * @returns {void}
 */
function updateHeaderTerm(term, hasResults, total) {
  ELEMENTS.h2.innerHTML = hasResults 
    ? `${total ? `${total} ` : ''}results for <span id="term">${term}</span>`
    : '';
}

/**
 * Displays an error message based on type and clears results. 
 * @param {string|Error|Object} errOrData - The error or data object
 * @returns {void}
 */
function displayErrorMessage(errOrData) {
  let msg;

  switch (true) {
    case (typeof errOrData === 'string'):
      msg = errOrData;
      break;
    case (errOrData instanceof Error):
      msg = `Error fetching movies: ${errOrData.message}`;
      break;
    case (typeof errOrData === 'object' && errOrData.Response === 'False'):
      msg = (errOrData.Error === 'Invalid API key!')
        ? 'Invalid API Key. Check your configuration.'
        : `No results found for <span id="term">${STATE.currentTerm}</span>.`;
      break;
    default:
      msg = 'An unknown error occurred.';
  }

  ELEMENTS.h2.innerHTML = msg;
  clearResults();
}

/**
 * Saves search term and save state to localStorage.
 * @param {string} term - Search term to save
 * @param {boolean} shouldSave - Whether to save the term
 * @returns {void}
*/
function saveSearchTerm(term, shouldSave) {
  localStorage.setItem('searchData', JSON.stringify({term, shouldSave}));
}

/**
 * Clears all search results and resets the observer.
 * @returns {void}
 */
function clearResults() {
  ELEMENTS.resultsSection.innerHTML = '';
  ELEMENTS.loadmoreSection.textContent = "Loading More...";
  ELEMENTS.loadmoreSection.style.display = 'none';
  
  if (STATE.observer) {
    STATE.observer.disconnect();
    STATE.observer = null;
  }
}

/**
 * Clears saved search data from localStorage.
 * @returns {void}
 */
function clearSavedSearch() {
  localStorage.removeItem('searchData');
}
