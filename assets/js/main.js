const email = document.querySelector('[data-email]');
email.addEventListener('click', () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email.textContent);
  }
});

document.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  let positionScroll = window.pageYOffset;
  if (positionScroll > 100) {
    header.classList.add('scroll__header');
  } else {
    header.classList.remove('scroll__header');
  }
});

if (screen.width < 768) {
  const menuOpen = document.querySelector('.menu__open');
  const menuClose = document.querySelector('.menu__close');
  const menuList = document.querySelector('.menu__list');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  menuOpen.addEventListener('click', () => {
    menuList.classList.add('mobile');
    main.style.display = 'none';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'flex';
  });

  function closeMenu() {
    menuList.classList.remove('mobile');
    main.style.display = 'block';
    menuOpen.style.display = 'initial';
    menuClose.style.display = 'none';
  }
}
