'use strict';

// DocBlock is a standardized format of how to document your functions

/**
 * Hide an email from spambots
 * 
 * @param {string} user - left part of email address
 * @param {string} domain - right part of email address
 * @param {boolean} isAdmin - is this person a site administrator?
 * 
 * @returns {string} complete anchor tag
 */

function findAge(user, domain, isAdmin) {
  let address = `${user}@${domain}`;
  const EMAILLINK = document.createElement(`a`);
  EMAILLINK.setAttribute(`href`, `mailto:${address}`);
  EMAILLINK.innerHTML = `Send email to ${address}`;
  if(isAdmin){
    let adminMsg = ` (admin) `;
    EMAILLINK.innerHTML += adminMsg;
  }

  console.log(EMAILLINK);
  return EMAILLINK;
}

findAge(`Joe`, `gmail.com`, true);
