'use strict';

//---- Global Variables ----//
let currentTerm = '';
let currentPage = 1;
let totalResults = 0;
let observer = null;
const apiKey = '59922ab6';

const form = document.querySelector('form');
const searchInput = document.querySelector('#s');
const saveCheckbox = document.querySelector('#save');
const resultsSection = document.querySelector('#results');
const loadmoreSection = document.querySelector('#loadmore');
const h1 = document.querySelector('h1');
const h2 = document.createElement('h2');

//---- Initialization ----//
h1.insertAdjacentElement('afterend', h2);
attachEventListeners();
loadSavedSearch();

/**
 * Attaches event listeners to form and checkbox.
 * @returns {void}
 */
function attachEventListeners() {
  if (form) form.addEventListener('submit', handleForm);
  if (saveCheckbox) saveCheckbox.addEventListener('change', handleCheckbox);
}

/**
 * Loads saved search data from localStorage and performs initial search if saved.
 * @returns {void}
 */
function loadSavedSearch() {
  const savedData = JSON.parse(localStorage.getItem('searchData'));
  if (!savedData) return;

  currentTerm = savedData.term || '';
  const shouldSave = savedData.shouldSave || false;

  searchInput.value = currentTerm;
  saveCheckbox.checked = shouldSave;

  if (currentTerm && shouldSave) startNewSearch(currentTerm);
}

/**
 * Handles the form submission.
 * @param {Event} evt - The submit event
 * @returns {void}
 */
function handleForm(evt) {
  evt.preventDefault();
  const term = searchInput.value.trim();
  if (!term) return;
  currentTerm = term;
  startNewSearch(currentTerm);
}

/**
 * Handles changes to the "save my search" checkbox.
 * @returns {void}
 */
function handleCheckbox() {
  const shouldSave = saveCheckbox.checked;
  if (shouldSave && currentTerm) {
    saveSearchTerm(currentTerm, shouldSave);
  } else {
    clearSavedSearch();
  }
}

/**
 * Creates a span element with id="term" containing the search term.
 * @param {string} term - The search term
 * @returns {string} - HTML string with the wrapped term
 */
function wrapTermWithId(term) {
  return `<span id="term">${term}</span>`;
}

/**
 * Starts a new search by clearing old results and fetching movies.
 * @param {string} term - The search term
 * @returns {void}
 */
function startNewSearch(term) {
  clearResults();
  updateHeaderTerm(term, false);

  currentPage = 1;
  totalResults = 0;

  if (saveCheckbox.checked) saveSearchTerm(term, true);
  fetchMovies(term, currentPage)
    .then(data => {
      handleMovieData(data, term);
    })
    .catch(err => {
      displayErrorMessage(`Error fetching movies: ${err.message}`);
    });
}

/**
 * Fetches movies from OMDb API.
 * @param {string} term - Search term
 * @param {number} page - Page number
 * @returns {Promise<Object>} - Returns a Promise that resolves to the API response object
 */
async function fetchMovies(term, page) {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(term)}&page=${page}`;
  return await fetch(url).then(res => res.json());
}

/**
 * Handles the received movie data from the API, rendering it or showing error messages.
 * @param {Object} data - The JSON data returned by the fetchMovies function
 * @param {string} term - The search term used
 * @returns {void}
 */
function handleMovieData(data, term) {
  if (data.Response === 'False') {
    if (data.Error === 'Invalid API key!') {
      displayErrorMessage('Invalid API Key. Please check your configuration.');
    } else {
      displayErrorMessage(`No results found for "${wrapTermWithId(term)}".`);
    }
    return;
  }

  const movies = data.Search;
  const total = parseInt(data.totalResults, 10);
  if (!movies || movies.length === 0) {
    displayErrorMessage(`No results found for "${wrapTermWithId(term)}".`);
    return;
  }

  totalResults = totalResults || total;
  renderMovies(movies);
  updateHeaderTerm(term, true, totalResults);
  setupIntObserve(term);
}

/**
 * Renders the given array of movies into the #results section.
 * @param {Object[]} movies - Array of movie objects from OMDb
 * @returns {void}
 */
function renderMovies(movies) {
  movies.forEach(movie => {
    const section = document.createElement('section');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h3.textContent = movie.Title;
    p.textContent = `Year released: ${movie.Year.slice(0, 4)}`;

    if (movie.Poster && movie.Poster !== 'N/A') {
      img.src = movie.Poster;
      img.alt = `Poster for ${movie.Title}`;
    } else {
      img.src = 'https://placehold.co/150x200?text=No Poster';
      img.alt = `No poster available for ${movie.Title}`;
    }

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(img);

    section.appendChild(div);
    resultsSection.appendChild(section);
  });
}

/**
 * Sets up the Intersection Observer to load more movies if there are more results to fetch.
 * @param {string} term - Current search term
 * @returns {void}
 */
function setupIntObserve(term) {
  const loadedMoviesCount = resultsSection.querySelectorAll('section').length;
  if (loadedMoviesCount >= totalResults) {
    if (!loadmoreSection.dataset.originalContent) {
      loadmoreSection.dataset.originalContent = loadmoreSection.innerHTML;
    }

    loadmoreSection.textContent = "No more results.";
    loadmoreSection.style.display = 'flex';

    if (observer) {
      observer.disconnect();
      observer = null;
    }
  
    return;
  }

  // Restore original content if it exists
  if (loadmoreSection.dataset.originalContent) {
    loadmoreSection.innerHTML = loadmoreSection.dataset.originalContent;
  }
  loadmoreSection.style.display = 'flex';

  if (!observer) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(loadmoreSection); 
          currentPage++;

          fetchMovies(term, currentPage)
            .then(data => {
              if (data.Response === 'False') {
                displayErrorMessage(`No more results or error: ${data.Error}`);
                return;
              }

              renderMovies(data.Search);
              setupIntObserve(term);
            })
            .catch(err => {
              displayErrorMessage(`Error fetching more movies: ${err.message}`);
            });
        }
      });
    });
  }

  observer.observe(loadmoreSection);
}

/**
 * Updates the header. h1 always says "OMDb Search".
 * @param {string} term - The search term
 * @param {boolean} hasResults - Whether we have valid results
 * @param {number} [total] - Total number of results (optional)
 * @returns {void}
 */
function updateHeaderTerm(term, hasResults, total) {
  if (hasResults && total) {
    h2.innerHTML = `${total} results for ${wrapTermWithId(term)}`;
  } else if (hasResults) {
    h2.innerHTML = `results for ${wrapTermWithId(term)}`;
  } else {
    h2.textContent = '';
  }
}

/**
 * Displays an error message while keeping h1 static and clearing results.
 * @param {string} msg - The error message to display
 * @returns {void}
 */
function displayErrorMessage(msg) {
  h2.innerHTML = msg;
  clearResults();
}

/**
 * Clears the results section and stops any current observer.
 * @returns {void}
 */
function clearResults() {
  resultsSection.innerHTML = '';

  if (loadmoreSection.dataset.originalContent) loadmoreSection.innerHTML = loadmoreSection.dataset.originalContent;
  if (observer) {
    observer.disconnect();
    observer = null;
  }

  loadmoreSection.style.display = 'none';
}

/**
 * Saves the current search term and the "save" state to localStorage.
 * @param {string} term - The search term
 * @param {boolean} shouldSave - Whether or not to persist the term
 * @returns {void}
 */
function saveSearchTerm(term, shouldSave) {
  const data = {
    term: term,
    shouldSave: shouldSave
  };
  
  localStorage.setItem('searchData', JSON.stringify(data));
}

/**
 * Clears the saved search term from localStorage.
 * @returns {void}
 */
function clearSavedSearch() {
  localStorage.removeItem('searchData');
}
