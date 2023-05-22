const initApp = () => {
  const hamburger = document.querySelector(".hamburger");
  const topLinks = document.querySelector(".top-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    topLinks.classList.toggle("active");
    console.log('sdsd');
  });
    document.querySelectorAll('.top-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    topLinks.classList.remove('active');
  }))
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
