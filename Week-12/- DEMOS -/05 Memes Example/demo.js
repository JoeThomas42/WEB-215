'use strict';

const randomNumber = Math.floor(Math.random() * 100);

async function showMemes() {
  const endpoint = 'https://api.imgflip.com/get_memes';
  const memePromise = await fetch(endpoint);
  const serverResp = await memePromise.json();
  const allMemes = serverResp.data.memes;

  const randomMeme = allMemes[randomNumber];
  const imgSrc = randomMeme.url;
  const img = document.createElement('img');
  img.src = imgSrc;
  document.body.appendChild(img);

  // allMemes.forEach(member => {
  //   const imgSrc = member.url;
  //   const img = document.createElement('img')
  //   img.src = imgSrc;
  //   document.body.appendChild(img);
  // });
}

showMemes();
