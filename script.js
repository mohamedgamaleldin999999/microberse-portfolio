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

  const projects = [
    {
      name: 'Project 1',
      description: 'Project 1 description',
      image: 'path/to/image1.jpg',
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live1',
      sourceLink: 'https://example.com/source1',
    },
  
    {
      name: 'Project 2',
      description: 'Project 2 description',
      image: 'path/to/image2.jpg',
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live2',
      sourceLink: 'https://example.com/source2',
    },
  
    {
      name: 'Project 3',
      description: 'Project 2 description',
      image: 'path/to/image2.jpg',
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live2',
      sourceLink: 'https://example.com/source2',
    },
  
    {
      name: 'Project 4',
      description: 'Project 2 description',
      image: 'path/to/image2.jpg',
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live2',
      sourceLink: 'https://example.com/source2',
    },
  
    {
      name: 'Project 5',
      description: 'Project 2 description',
      image: 'path/to/image2.jpg',
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live2',
      sourceLink: 'https://example.com/source2',
    },
  
    {
      name: 'Project 6',
      description: 'Project 2 description',
      image: 'path/to/image2.jpg',
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live2',
      sourceLink: 'https://example.com/source2',
    },
  ];
  
  const projectsContainer = document.querySelector('.cards');
  
  projects.forEach((project) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('card');
  
    const imageElement = document.createElement('div');
    imageElement.classList.add('card-imgn');
    projectElement.appendChild(imageElement);
  
    const contentElement = document.createElement('div');
    contentElement.classList.add('info');
    projectElement.appendChild(contentElement);
  
    const titleElement = document.createElement('h3');
    titleElement.classList.add('project-title');
    titleElement.innerHTML = "Most-Post Storie's <br/> Gain+Glory";
    contentElement.appendChild(titleElement);
  
    const langListElement = document.createElement('ul');
    langListElement.classList.add('languages');
    contentElement.appendChild(langListElement);
  
    project.technologies.forEach((technology) => {
      const langItemElement = document.createElement('li');
      langItemElement.classList.add('language');
      langItemElement.textContent = technology;
      langListElement.appendChild(langItemElement);
    });
  
    //  "See Project" button
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('view-btn');
    buttonElement.textContent = 'See Project';
    contentElement.appendChild(buttonElement);
  
    // Append for projects container
    projectsContainer.appendChild(projectElement);
  });

  // model

  const modelSection = document.querySelector('.model');
  const modelCloseButton = document.querySelector('.model-close');
  const overlay = document.getElementById('overlay');
  const projectButtons = document.querySelectorAll('.view-btn');

  function showPopup() {
    modelSection.style.display = 'block';
    overlay.style.display = 'block';
  }

  function hidePopup() {
    modelSection.style.display = 'none';
    overlay.style.display = 'none';
  }

  // document.querySelector(".btn-live").addEventListener("click", showPopup);
  modelCloseButton.addEventListener('click', hidePopup);

  projectButtons.forEach((button) => {
    button.addEventListener('click', showPopup);
  });

  // dynamic modal
const dynamicSection = document.getElementById('dynamic-section');

const sectioHTML = `
<section id="model-section" class="model-section">
      <div class="model">
        <div class="model-content">
          <div class="model-header">
            <button class="model-close" type="button">X</button>
            <img src="./images/Snapshoot Portfolio (1).png" alt="Model-image" />
          </div>
          <div class="model-body">
            <h2>Keeping track of hundreds of components</h2>
            <div class="mobile-list">
              <ul id="mobile-components"></ul>
            </div>
            <div class="desktop-list">
              <ul id="desktop-componets"></ul>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it 1960s.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it 1960s.
            </p>
            </div>
          <div class="model-footer desktop-flex">
            <button class="btn-live" id="live-button">
              See live
              <span
                ><i
                  class="fa-thin fa-arrow-up-left-from-circle fa-rotate-90"
                ></i
              ></span>
            </button>
            <button class="btn-source" id="source-button">
              See source <span><i class="fa-brands fa-github"></i></span>
            </button>
            </div>
          
        </div>
      </div>
      <div id="overlay"></div>
    </section>
    `;
dynamicSection.innerHTML = sectioHTML;

};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});






