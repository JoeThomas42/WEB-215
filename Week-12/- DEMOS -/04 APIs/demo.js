'use strict';

// look for "NO" under CORS policy

// fetch() - returns a promise
// json() - converts data into js object

// get data from site
// convert data into js object
// use network to make sure verify what data you're getting (object/array)
// access the data as js object

const category = 'programming';
const amount = 'ten';
const endpoint = `https://official-joke-api.appspot.com/jokes/${category}/${amount}`;

async function displayJoke() {
  const serverResponse = await fetch(endpoint);           
  const jokeArray = await serverResponse.json();          
  jokeArray.forEach(joke => {
    console.log(joke.setup);
    console.log(joke.punchline);
    console.log('-----------------------------------------------------------');
  });                   
}

function handleError(err) {
  console.log('There was a problem');
  console.log(err);
}

displayJoke().catch(handleError);
