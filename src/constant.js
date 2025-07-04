// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';


import mysqlLogo from './assets/tech_logo/mysql.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's

import gmdalogo from './assets/company_logo/gmdalogo.jpg';

// Education Section Logo's
import collegelogo from './assets/education_logo/collegelogo.jpg';
import schoolLogo from './assets/education_logo/schoolLogo.jpeg';


// Project Section Logo's
import quiz from './assets/work_logo/quiz.png';
import authenticationcrud from './assets/work_logo/authenticationcrud.png';
import gmda from './assets/work_logo/gmda.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      // { name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      // { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: gmdalogo,
      role: "Frontend Intern",
      company: "Gurugram Metropolitan Devlopment Authority",
      date: "June 2024 - july 2025",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team and make interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Dom",
        "Bootstrap",
        "Tailwind CSS",
        "Material UI",
        "ReactJS",
        "Redux",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: collegelogo,
      school: "World College of Technology and Management, gurugram(Farukhnagar)",
      date: "June 2023 - May 2025",
      grade: "Awaiting Final Result",
      desc: "I have pursued my Master's degree (MCA) in Computer Applications from World College of Technology and Management (MDU University), Gurugram (Farukhnagar). I have recently completed my final semester examinations, and the results are expected soon. During my time at WCTM, I built a strong foundation in programming, software development, and computer science principles. I studied courses such as Object-Oriented Programming, Web Development, and Software Engineering. I also actively participated in various workshops and technical events, which enhanced my skills and knowledge. This journey has been crucial to my technical and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: collegelogo,
      school: "World College of Technology and Management, gurugram(Farukhnagar)",
      date: "June 2020 - June 2023",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Application (BCa.) from World College of Technology and Management, Gurugram. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at WCTM College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "M.S.K. Government Inter College Syunsi, Uttarakhand",
      date: "Apr 2018 - March 2019",
      grade: "55.4%",
      desc: "I completed my class 12 education from Government Inter College Syunsi, Uttarakhand , under the NCERT board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "NCERT(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: schoolLogo,
      school: "M.S.K. Government Inter College Syunsi, Uttarakhand",
      date: "Apr 2016 - March 2017",
      grade: "60.4%",
      desc: "I completed my class 10 education from Government Inter College Syunsi, Uttarakhand, under the NCERT board, where I studied Science with Computer.",
      degree: "NCERT(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GMDA ERP",
      description:
        "GMDA ERP is a centralized platform for the Gurugram Metropolitan Development Authority that streamlines employee management, document tracking, and coordination. It includes responsive forms, API integration, and CRUD functionality to improve efficiency.",
      image: gmda,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Redux", "Material UI", "Bootstrap"],
      github: "https://github.com/JituRawat143/GMDA_ERP_MAIN.git",
      webapp: "https://gmda-erp-main.vercel.app/",
    },
    {
      id: 1,
      title: " Employee Management with Authentication",
      description:
        "A frontend project built with React, featuring a simple login system using local credentials and localStorage-based authentication. After login, users can add, edit, view, and delete records through a responsive data table powered by Axios and JSON Server.",
      image: authenticationcrud,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JituRawat143/CrudwithAuthentication.git",
      webapp: "https://crudwith-authentication.vercel.app/",
    },
    {
      id: 2,
      title: "Education-Quiz-Web",
      description:"A simple and responsive quiz web app built with HTML, CSS, and JavaScript. It features a start screen, multiple-choice questions, score tracking, and options to retake or exit the quiz.",
      image: quiz,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JituRawat143/Education-Quiz-Web.git",
      webapp: "https://education-quiz-14oshdn8x-jiturawat143s-projects.vercel.app/",
    },
    {
      id: 3,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 4,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  