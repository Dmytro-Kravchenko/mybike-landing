'use strict';

const contactForm = document.querySelector('.contact-form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function handleSubmit(event) {
  event.preventDefault();

  contactForm.reset();
}

contactForm.addEventListener('submit', handleSubmit);
