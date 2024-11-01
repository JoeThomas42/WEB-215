'use strict';

// Create Observer
const trigger = document.getElementById('trigger');
const ob = new IntersectionObserver(showModal);
ob.observe(trigger);

// Define outer modal wrapper and close it
const outer = document.getElementById('outer');
document.querySelector('input[type="button"]').addEventListener('click', () => {
  outer.style.display = 'none';
  agree.checked = false;
});

/**
 * Callback function for IntersectionObserver that displays the `#outer` element
 * when the observed element enters the viewport.
 *
 * @param {IntersectionObserverEntry[]} entries - An array of IntersectionObserverEntry objects.
 */
function showModal(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      outer.style.display = 'block';
    }
  });
}

// Agree checkbox and button
const agree = document.getElementById('agree');
agree.addEventListener('change', () => {
  const agreeBtn = document.querySelector('input[type="submit"]')
  if(agree.checked){
    agreeBtn.disabled = false;
  } else{
    agreeBtn.disabled = true;
  }
})

// Form submit listener
document.querySelector('form').addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();
  if(agree.checked){
    outer.style.display = 'none';
    document.getElementById('premium').removeAttribute('id');
    ob.unobserve(trigger);
  }
}
