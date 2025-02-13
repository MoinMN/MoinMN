// menu bar
const btn = document.getElementById('m-btn');
const navList = document.getElementById('asideBar');
btn.addEventListener("click", () => {
  btn.querySelector('i').classList.toggle('fa-bars');
  btn.querySelector('i').classList.toggle('fa-xmark');
  if (btn.querySelector('i').className == 'fa-solid fa-xmark') {
    navList.style.right = '0%';
  }
  if (btn.querySelector('i').className == 'fa-solid fa-bars') {
    navList.style.right = '-280px';
  }
});

// aside bar
function hide() {
  navList.style.right = '-500px';
  btn.querySelector('i').classList.toggle('fa-xmark');
  btn.querySelector('i').classList.toggle('fa-bars');
}

// typing animation
const typed = new Typed(".typing", {
  strings: ['', 'MERN STACK Developer ', 'Next.Js Developer', 'Freelance', ''],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// projects list
const projects = [
  {
    header: "Blogotypo - A Blogging Web App",
    body: "Blogotypo is a feature-rich, secure, and user-friendly blogging platform built with Next.js. It allows users to create, publish, and manage blogs, with advanced features like search, filtering, sharing, and verified user authentication.",
    tech: ["Next.Js", "MongoDB", "Next-Auth", "Cloudinary", "Framer Motion", "Nodemailer", "Bootstrap", "Tailwindcss", "Vercel"],
    github: "https://github.com/MoinMN/blogotypo",
    website: "https://blogotypo.vercel.app",
  },
  {
    header: "College Placement Management System",
    body: "The College Placement Management System is a web application designed to streamline the placement process in educational institutions. This system provides distinct roles for students, TPO (Training and Placement Officer) admin, and management admin, ensuring a smooth and efficient workflow.",
    tech: ["Mern Stack", "React.Js", "MongoDB", "Node.Js", "Express", "jsonwebtoken", "axios", "Bootstrap", "Tailwindcss", "Render"],
    github: "https://github.com/MoinMN/college-placement-management-system",
    website: "https://cpms-app.onrender.com",
  },
  {
    header: "Mumbai Local QR-Codes for UTS App",
    body: "UTS QR-Code of Mumbai Local Railways Station.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MoinMN/MumbaiLocal-QR",
    website: "https://moinmn.github.io/MumbaiLocal-QR",
  },
  {
    header: "Email Sender",
    body: "Email Sender Application using Java and Java APIs like JavaMail. The GUI is made by Java Swing.",
    tech: ["Java", "Java Swing"],
    github: "https://github.com/MoinMN/Email-Sender",
    website: null,
  },
  {
    header: "Online News Website",
    body: "An online news website which we will be creating using HTML, CSS and JavaScript library called React, and we will be fetching the news data through an API.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "API", "React Js"],
    github: "https://github.com/MoinMN/rcoe22-sem3-group5",
    website: null,
  },
  {
    header: "Simple Calculator",
    body: "Simple Calculator using HTML, CSS & JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MoinMN/calculator",
    website: "https://moinmn.github.io/calculator/",
  },
];

const projectContainer = document.getElementById('project_container');
projects.forEach(project => {
  // Create a new div element
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  // Add content to the div
  projectDiv.innerHTML = `
    <h3>${project.header}</h3>
      <p>${project.body}</p>
      <div class="lang">
        ${project.tech.map(t => `<span>${t}</span>`).join("")}
      </div>
      <a rel="noopener" target="_blank" href="${project.github}">
        <input type="button" value="Github">
      </a>
      </a>
      ${project.website ? `<a rel="noopener" target="_blank" href="${project.website}">
            <input type="button" value="Website">
          </a>` : ""}
    `;
  // append on projectContainer
  projectContainer.appendChild(projectDiv);
});

// skills list
const skills = [
  {
    name: "React.Js",
    id: "react",
    abbr: "Advanced",
    icon: "fa-brands fa-react",
  },
  {
    name: "Next.Js",
    id: "next",
    abbr: "Advanced",
    icon: "fa-brands fa-node-js",
  },
  {
    name: "JavaScript",
    id: "js",
    abbr: "Advanced",
    icon: "fa-brands fa-square-js",
  },
  {
    name: "Node.Js",
    id: "node",
    abbr: "Advanced",
    icon: "fa-brands fa-node",
  },
  {
    name: "Java",
    id: "java",
    abbr: "Advanced",
    icon: "fa-brands fa-java",
  },
  {
    name: "MongoDB",
    id: "mongo",
    abbr: "Advanced",
    icon: "fa-solid fa-database",
  },
  {
    name: "SQL, PostgreSQL",
    id: "sql",
    abbr: "Advanced",
    icon: "fa-solid fa-database",
  },
];

const skillContainer = document.getElementById('skill_container');
skills.forEach(skill => {
  const skillDiv = document.createElement('div');
  skillDiv.classList.add("skills")

  skillDiv.innerHTML = `
    <abbr title=${skill.abbr} id=${skill.abbr}>
      <i class="${skill.icon}"></i>
      <span>${skill.name}</span>
    </abbr>
  `;

  skillContainer.appendChild(skillDiv);
});

const showResponseMessage = (message) => {
  const responseContainer = document.getElementById('response_message');
  const responseSpan = document.createElement("span");
  responseSpan.innerText = message;
  responseContainer.appendChild(responseSpan);
}

// scrolling down logic
const handleScroll = (section) => document.getElementById(section).scrollIntoView({ behavior: "smooth" });