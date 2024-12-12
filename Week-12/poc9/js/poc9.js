'use strict';

// Global variables available to, but unchangeable by, all functions
const baseURL = `http://www.omdbapi.com/?apikey=`;
const key = `59922ab6`;
const term = `space`;
const endpoint = `${baseURL}${key}&s=${term}`;

/*
INSTRUCTIONS
Under each comment, code what is necessary to make it happen.
Leave the comments in place.
*/

/* make the function asynchronous */
/**
 * Fetches movie data from OMDB API and renders it to the page
 * 
 * @async
 * @function getMovies
 * @returns {Promise<void>}
 * @throws {Error} If the API request fails
 */
async function getMovies() {
  // send endpoint to server and wait for the response to download
  const moviePromise = await fetch(endpoint);

  // convert response into JS object, waiting for it to complete
  const serverData = await moviePromise.json();

  // If the server's response is not 'ok', call the renderError() function, passing the response object, and exit the getMovies() function
  if (serverData.Response !== 'True') {
    renderError(serverData);
    return;
  }

  // Get the total results from the server data and store it in a constant named: total
  const total = serverData.totalResults;

  /*
  Create an H1 element, give it the following text:
  100 Results for TERM
    - substitute the total variable for the number
    - substitute the term variable for the TERM
  */
  const h1 = document.createElement('h1');
  h1.textContent = `${total} results for ${term}`;

  // Insert the H1 on the page before the hardcoded div#results
  document.getElementById('results').insertAdjacentElement('beforebegin', h1);

  /*
  Iterate over the response object's Search array, and for each movie, do the following:
    - store the title in a variable named: title
    - store the year in a variable named: year
    - store the URL to the poster in a variable named: poster
      - If there is no poster URL, then store the following in the poster variable:
      'https://placehold.co/150x200?text=No Poster'
    - Create a new section element and append it to the div#results
    - Create a new H2 element, give it the text of the movie title, and append it to the section
    - Create a new P element, give it the text of the movie year, and append it to the section
    - Create a new IMG element, give it the source of the movie poster, and append it to the section
  */
  serverData.Search.forEach(movie => {
    const title = movie.Title;
    const year = movie.Year;
    const poster = movie.Poster === 'N/A' ? 'https://placehold.co/150x200?text=No Poster' : movie.Poster;
  
    const section = document.createElement('section');
    document.getElementById('results').appendChild(section);
  
    const h2 = document.createElement('h2');
    h2.textContent = title;
    section.appendChild(h2);
  
    const p = document.createElement('p');
    p.textContent = year;
    section.appendChild(p);
  
    const img = document.createElement('img');
    img.src = poster;
    img.alt = `Poster for ${title}.`;
    section.appendChild(img);
  });
}

// define the passed parameter
/**
 * Renders an error message to the page
 * 
 * @function renderError
 * @param {Object} serverData - Error response from the server
 * @param {string} serverData.Error - Error message from the API
 * @returns {void}
 */
function renderError(serverData) {
  /* Create an H1 element with the text:
     Error: theError
    - replace theError with the actual error from the server response (which was passed to this function)
    - Insert the H1 on the page just after the opening BODY tag
  */
  const h1 = document.createElement('h1');
  h1.textContent = `Error: ${serverData.Error}`;
  document.body.insertAdjacentElement('afterbegin', h1);
}

// Do nothing here! This calls the getMovies() function on page load.
getMovies();
