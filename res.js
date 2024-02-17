


//skills

const programmingSkills = [
  { name: 'Python', progress: 75 },
  { name: 'Java', progress: 60 },
  { name: 'JavaScript', progress: 80 },
  { name: 'HTML/CSS', progress: 90 }
];

const toolsSkills = [
  { name: 'GitHub', progress: 85 },
  { name: 'Wordpress', progress: 80 },
  { name: 'Android Studio', progress: 60 },
  { name: 'Figma', progress: 80 }
];

function createSkillElement(skill) {
  return `
      <div class="skill">
          <div class="skill-name">${skill.name}</div>
          <div class="progress-bar">
              <div class="progress-bar-inner" style="width: ${skill.progress}%;"></div>
          </div>
      </div>
  `;
}

function populateSkillsContainer(containerId, skills) {
  const container = document.getElementById(containerId);
  skills.forEach(skill => {
      const skillElement = createSkillElement(skill);
      container.innerHTML += skillElement;
  });
}

// Populate programmingSkills and toolsSkills containers
populateSkillsContainer('programmingSkills', programmingSkills);
populateSkillsContainer('toolsSkills', toolsSkills);




//projects

const projects = [
  {
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?',
      imageUrl: 'logo.jpg',
      githubLink: 'https://github.com/Chan-08'
  },
  {
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?',
      imageUrl: 'logo.jpg',
      githubLink: 'https://github.com/Chan-08'
  },
  {
      name: 'Project 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?',
      imageUrl: 'logo.jpg',
      githubLink: 'https://github.com/Chan-08'
  },
  {
      name: 'Project 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?',
      imageUrl: 'logo.jpg',
      githubLink: 'https://github.com/Chan-08'
  }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
  const projectCard = `
      <div class="card">
          <img src="${project.imageUrl}" alt="Logo"/>
          <div class="card-content">
              <h2>${project.name}</h2>
              <p>${project.description}</p>
              <a href="${project.githubLink}" class="button" target="_blank">
                  View source code
              </a>
          </div>
      </div>
  `;
  projectsContainer.innerHTML += projectCard;
});











 