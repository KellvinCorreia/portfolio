const email = document.querySelector('[data-email]');
email.addEventListener('click', () => {
  if (navigator.clipboard) {
  navigator.clipboard.writeText(email.textContent)
  }
})