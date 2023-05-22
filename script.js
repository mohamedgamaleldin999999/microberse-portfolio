const initApp = () => {
  const hamburger = document.querySelector('.hamburger');
  const topLinks = document.querySelector('.top-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topLinks.classList.toggle('active');
  });

  document.querySelectorAll('.top-link').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    topLinks.classList.remove('active');
  }));

  const viewButton = document.querySelector('.view');

  const popup = document.querySelector('.popup');

  viewButton.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  const closeButton = document.querySelector('.close-popup');

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
