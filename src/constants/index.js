import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    
    {
      id:"resume",
      
      link:"https://drive.google.com/file/d/1huzCDmrj-rrI-slI0hPp8V5yTJvGvWwq/view?usp=sharing"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: " Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C/C++",
      icon: redux,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: figma,
    },
    {
      name: "Bootstrap",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySql",
      icon: mongodb,
    },
    {
      name: "FireBase",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "B.Tech in Computer Science and Engineering",
      company_name: "CMR COLLEGE OF ENGINEERING & TECHNOLOGY",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2020 - June 2024",
      points: [
        "CGPA: 8.95/10",
      ],
    },
    {
      title: "Intermediate",
      company_name: "Sri Chaitanya Junior College",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2018 - April 2020",
      points: [
        "Percentage : 93.3%",
      ],
    },
    {
      title: "Secondary School (S.S.C)",
      company_name: "St.Little Theresa's High School",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2012- April 2018",
      points: [
        "GPA: 9.3",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Exam Seating Arrangement Using Java",
      description:
        "This Website provides Students to view their examination seat.This helps the examination branch to manage all the faculties and alot the classes accordingly.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "Jsp",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Rishab003/Examination-Seating-Arrangement",
    },
    {
      name: "Weather Application",
      description:
        "Developed a weather website using RapidAPI, which displays current weather conditions, temperature, wind speed, and humidity for user-specified locations.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://r03-weather-app.netlify.app/",
    },
    {
      name: "Chat Application",
      description:
        "The app allows users to send real-time messages to each other and create group conversations. It also includes features such as user authentication, message notifications, and the ability to send multimedia files",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };