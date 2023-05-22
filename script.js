const initApp = () => {
  const hamburger = document.querySelector(".hamburger");
  const topLinks = document.querySelector(".top-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    topLinks.classList.toggle("active");
    console.log('sdsd');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
