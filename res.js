
 const projects = [
    { name: "Resume", description: "Using HTML and CSS", link:"https://github.com/Chan-08/resume" },
    { name: "Spotify", description: "Cloned version of Spotify", link: "https://github.com/Chan-08/spotify-clone" },
    { name: "E-Commerce", description: "Model of an e-commerce webpage", link: "https://github.com/Chan-08/E-commerce-webpage" },
    { name: "E-Learning", description: "E-Learning webpage", link: "https://github.com/Chan-08/E-learning-webpage" }
];

const cardsContainer = document.querySelector(".cards-container");
projects.forEach((project) => {
const card = document.createElement("div");
card.classList.add("card");
card.innerHTML = `
<ul>
     <a href="${project.link}">
                <h2>${project.name}</h2>
            </a>
            <p>${project.description}</p>
        </ul>
`;
cardsContainer.appendChild(card);
});

const programmingSkills = ["Java", "Python", "C++", "JavaScript"];

const skillsList = document.querySelector(".skills-list");
programmingSkills.forEach((skill) => {
const skillElement = document.createElement("h3");
skillElement.textContent = skill;
skillsList.appendChild(skillElement);
});

function Form() {
    var name = document.forms["reg"]["name"].value;
    var email = document.forms["reg"]["email"].value;
    var num = document.forms["reg"]["num"].value;

    // Check if name is empty
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Check if email is empty and in a valid format
    if (email == "") {
        alert("Email must be filled out");
        return false;
    } 

    // Check if mobile number is empty and contains only digits
    if (num == "") {
        alert("Mobile number must be filled out");
        return false;
    } 

    // If all checks pass, the form is valid
    return true;
}

