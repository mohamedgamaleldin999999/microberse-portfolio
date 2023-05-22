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
  let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.card .view').forEach(view =>{
  view.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = view.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
