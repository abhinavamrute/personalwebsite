// Navigation Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Update Current Time
function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    timeElement.textContent = now.toUTCString();
}

setInterval(updateTime, 1000);
updateTime();

// Project Data
const projects = [
    {
        title: "Project 1",
        description: "A brief description of project 1",
        image: "https://source.unsplash.com/random/400x300?tech",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Project 2",
        description: "A brief description of project 2",
        image: "https://source.unsplash.com/random/400x300?coding",
        technologies: ["React", "Node.js"]
    },
    {
        title: "Project 3",
        description: "A brief description of project 3",
        image: "https://source.unsplash.com/random/400x300?computer",
        technologies: ["Python", "Django"]
    }
];

// Populate Projects
const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p
