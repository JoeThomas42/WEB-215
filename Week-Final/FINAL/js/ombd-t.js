'use strict';

//---- Organized Global Variables ----//
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
  const { term = '', shouldSave = false } = savedData;

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
 * Wraps a search term in a span element with id="term".
 * @param {string} term - The search term to wrap
 * @returns {string} HTML string containing the wrapped term
 */
function wrapTermWithId(term) {
  return `<span id="term">${term}</span>`;
}

/**
 * Fetches movie data from the OMDb API.
 * @param {string} term - Search term to query
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} Promise resolving to the API response
 * @throws {Error} When the fetch request fails
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

  if (ELEMENTS.saveCheckbox.checked) {
    saveSearchTerm(term, true);
  }

  fetchMovies(term, STATE.currentPage)
    .then(data => handleMovieData(data, term))
    .catch(err => displayErrorMessage(`Error fetching movies: ${err.message}`));
}

/**
 * Processes movie data received from the API.
 * @param {Object} data - Response data from the API
 * @param {string} term - Search term used for the query
 * @returns {void}
 */
function handleMovieData(data, term) {
  if (data.Response === 'False') {
    displayErrorMessage(
      data.Error === 'Invalid API key!' 
        ? 'Invalid API Key. Please check your configuration.'
        : `No results found for "${wrapTermWithId(term)}".`
    );
    return;
  }

  const movies = data.Search;
  if (!movies?.length) {
    displayErrorMessage(`No results found for "${wrapTermWithId(term)}".`);
    return;
  }

  STATE.totalResults = STATE.totalResults || parseInt(data.totalResults, 10);
  renderMovies(movies);
  updateHeaderTerm(term, true, STATE.totalResults);
  setupIntObserve(term);
}

/**
 * Creates a DOM element structure for each movie.
 * @param {Object} movie - Movie data object from the API
 * @param {string} movie.Title - Title of the movie
 * @param {string} movie.Year - Release year of the movie
 * @param {string} movie.Poster - URL of the movie poster
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
 * Renders an array of movies to the results section.
 * @param {Object[]} movies - Array of movie data objects
 * @returns {void}
 */
function renderMovies(movies) {
  const movieElements = movies.map(createMovieElement);
  ELEMENTS.resultsSection.append(...movieElements);
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

  observer.unobserve(ELEMENTS.loadmoreSection);
  STATE.currentPage++;

  fetchMovies(term, STATE.currentPage)
    .then(data => {
      if (data.Response === 'False') {
        displayErrorMessage(`No more results or error: ${data.Error}`);
        return;
      }
      renderMovies(data.Search);
      setupIntObserve(term);
    })
    .catch(err => displayErrorMessage(`Error fetching more movies: ${err.message}`));
}

/**
 * Sets up intersection observer for lazy loading.
 * @param {string} term - Current search term
 * @returns {void}
 */
function setupIntObserve(term) {
  const loadedMoviesCount = ELEMENTS.resultsSection.querySelectorAll('section').length;
  
  if (loadedMoviesCount >= STATE.totalResults) {
    if (!ELEMENTS.loadmoreSection.dataset.originalContent) {
      ELEMENTS.loadmoreSection.dataset.originalContent = ELEMENTS.loadmoreSection.innerHTML;
    }
    ELEMENTS.loadmoreSection.textContent = "No more results.";
    ELEMENTS.loadmoreSection.style.display = 'flex';
    
    if (STATE.observer) {
      STATE.observer.disconnect();
      STATE.observer = null;
    }
    return;
  }

  if (ELEMENTS.loadmoreSection.dataset.originalContent) {
    ELEMENTS.loadmoreSection.innerHTML = ELEMENTS.loadmoreSection.dataset.originalContent;
  }
  ELEMENTS.loadmoreSection.style.display = 'flex';

  if (!STATE.observer) {
    STATE.observer = new IntersectionObserver(
      entries => handleIntersection(entries, STATE.observer, term)
    );
  }

  STATE.observer.observe(ELEMENTS.loadmoreSection);
}

/**
 * Updates the header with search term and result count.
 * @param {string} term - Search term
 * @param {boolean} hasResults - Whether there are results to display
 * @param {number} [total] - Total number of results (optional)
 * @returns {void}
 */
function updateHeaderTerm(term, hasResults, total) {
  ELEMENTS.h2.innerHTML = hasResults 
    ? `${total ? `${total} ` : ''}results for ${wrapTermWithId(term)}`
    : '';
}

/**
 * Displays an error message and clears results.
 * @param {string} msg - Error message to display
 * @returns {void}
 */
function displayErrorMessage(msg) {
  ELEMENTS.h2.innerHTML = msg;
  clearResults();
}

/**
 * Clears all search results and resets the observer.
 * @returns {void}
 */
function clearResults() {
  ELEMENTS.resultsSection.innerHTML = '';

  if (ELEMENTS.loadmoreSection.dataset.originalContent) {
    ELEMENTS.loadmoreSection.innerHTML = ELEMENTS.loadmoreSection.dataset.originalContent;
  }
  
  if (STATE.observer) {
    STATE.observer.disconnect();
    STATE.observer = null;
  }

  ELEMENTS.loadmoreSection.style.display = 'none';
}

/**
 * Saves search term and save state to localStorage.
 * @param {string} term - Search term to save
 * @param {boolean} shouldSave - Whether to save the term
 * @returns {void}
 */
function saveSearchTerm(term, shouldSave) {
  localStorage.setItem('searchData', JSON.stringify({ term, shouldSave }));
}

/**
 * Clears saved search data from localStorage.
 * @returns {void}
 */
function clearSavedSearch() {
  localStorage.removeItem('searchData');
}
