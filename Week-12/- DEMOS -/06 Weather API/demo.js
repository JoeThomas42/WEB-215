'use strict';

let baseUrl = `https://api.weatherbit.io/v2.0/current`;
const apiKey = `7f7daa1ee1464b82a33f638681b09061`;
const units = `I`;
const zip = `28721`;
const ctry = `US`;

const endpoint = `${baseUrl}?key=${apiKey}&units=${units}&postal_code=${zip}&country=${ctry}`;

const iconUrl = `https://cdn.weatherbit.io/static/img/icons/`;

async function getWeather() {
  const weatherPromise = await fetch(endpoint);
  const serverResponse = await weatherPromise.json();

  if(weatherPromise.status === 403) {
    const errorMsg = serverResponse.error;
    const p = document.createElement('p');
    p.textContent = errorMsg;
    document.body.appendChild(p);
    return;
  } 

  const city = serverResponse.data[0].city_name;
  const clouds = serverResponse.data[0].clouds;
  const temp = serverResponse.data[0].temp;

  let iconCode = serverResponse.data[0].weather.icon;
  iconCode += `.png`;

  const p = document.createElement('p');
  p.textContent = `City: ${city}, ${clouds}% clouds, ${temp}°F`;
  document.body.appendChild(p);

  const img = document.createElement('img');
  img.src = `${iconUrl}${iconCode}`;
  document.body.appendChild(img);
}

function handleError() {
  console.log('There was an error');
}

getWeather().catch(handleError);
