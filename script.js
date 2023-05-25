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
      name: "Most-Post Storie's <br/> Gain+Glory",
      description: 'Project 1 description',
      image: { mobile: './images/Snapshoot Portfolio (1).png', desktop: './images/desk-porto.png' },
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live1',
      sourceLink: 'https://example.com/source1',
    },

    {
      name: "Most-Post Storie's <br/> Gain+Glory",
      description: 'Project 2 description',
      image: { mobile: './images/Snapshoot Portfolio (1).png', desktop: './images/desk-porto.png' },
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live2',
      sourceLink: 'https://example.com/source2',
    },

    {
      name: "Most-Post Storie's <br/> Gain+Glory",
      description: 'Project 3 description',
      image: { mobile: './images/Snapshoot Portfolio (1).png', desktop: './images/desk-porto.png' },
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live2',
      sourceLink: 'https://example.com/source2',
    },

    {
      name: "Most-Post Storie's <br/> Gain+Glory",
      description: 'Project 4 description',
      image: { mobile: './images/Snapshoot Portfolio (1).png', desktop: './images/desk-porto.png' },
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live2',
      sourceLink: 'https://example.com/source2',
    },

    {
      name: "Most-Post Storie's <br/> Gain+Glory",
      description: 'Project 5 description',
      image: { mobile: './images/Snapshoot Portfolio (1).png', desktop: './images/desk-porto.png' },
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      liveLink: 'https://example.com/live2',
      sourceLink: 'https://example.com/source2',
    },

    {
      name: "Most-Post Storie's <br/> Gain+Glory",
      description: 'Project 6 description',
      image: { mobile: './images/Snapshoot Portfolio (1).png', desktop: './images/desk-porto.png' },
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
    imageElement.classList.add('card-img');
    projectElement.appendChild(imageElement);

    const contentElement = document.createElement('div');
    contentElement.classList.add('info');
    projectElement.appendChild(contentElement);

    const titleElement = document.createElement('h3');
    titleElement.classList.add('project-title');
    titleElement.innerHTML = project.name;
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
  // dynamic modal
  const displayPopup = (project) => {
    const dynamicSection = document.getElementById('dynamic-section');
    const list = '';
    project.technologies.map((technology) => `<li>${technology}</li>`);
    const sectioHTML = `
<section id='model-section' class='model-section'>
      <div class='model'>
        <div class='model-content'>
          <div class='model-header'>
            <button class='model-close' type='button'>X</button>
            <img
            class="mobile-img"
            src="${project.image.mobile}"
            alt="Model-image"
          />
          <img
            class="desktop-img"
            src="${project.image.desktop}"
            alt=""
          />
          </div>
          <div class='model-body'>
            <h2>${project.name}</h2>
            <div class='desktop-list'>
              <ul id='desktop-componets'>
              ${list}
              </ul>
            </div>
            <p>
              ${project.description}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it 1960s.
            </p>
            </div>
          <div class='model-footer desktop-flex'>
            <button class='btn-live' id='live-button'>
              See live
              <span
                ><i
                  class='fa-thin fa-arrow-up-left-from-circle fa-rotate-90'
                ></i
              ></span>
            </button>
            <button class='btn-source' id='source-button'>
              See source <span><i class='fa-brands fa-github'></i></span>
            </button>
            </div>
          
        </div>
      </div>
      <div id='overlay'></div>
    </section>
    `;
    dynamicSection.innerHTML = sectioHTML;

    const overlay = document.getElementById('overlay');
    const modelSection = document.querySelector('.model');
    const modelCloseButton = document.querySelector('.model-close');
    modelCloseButton.addEventListener('click', () => {
      modelSection.style.display = 'none';
      overlay.style.display = 'none';
    });
  };

    //  'See Project' button
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('view-btn');
    buttonElement.textContent = 'See Project';
    contentElement.appendChild(buttonElement);

    // Append for projects container
    projectsContainer.appendChild(projectElement);
    buttonElement.addEventListener('click', () => {
      displayPopup(project);

      const modelSection = document.querySelector('.model');
      const overlay = document.getElementById('overlay');
      modelSection.style.display = 'block';
      overlay.style.display = 'block';
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});