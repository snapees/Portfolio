import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  travelit,
  threejs,
  fullstack,
  java,
  natours,
  responsive,
  dynamic,
  intutive,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "HTML & CSS",
    company_name: "From Udemy",
    icon: html,
    iconBg: "#383E56",
    date: "May 2022 - June 2022",
    points: [
      "Started off by learning the basics of HTML and CSS in the 1st month and progressively advanced to more complex concepts later.",
      "Also learned ot make responsive webpages",
      "Dedicated a month on learning the basics of html & css. Created projects such as FOOD ORDER WEBSITE using html and css.",
    ],
  },
  {
    title: "JavaScript",
    company_name: "From Udemy",
    icon: javascript,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Learned JavaScript and other related frameworks like React.js.",
      "Dedicated a month on learning the basics of javascript. Created projects such as DICE GAME.",
      "Created a few projects using html , css and bootstrap such as a CV Webpage are present in my github profile.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "From Upgrad",
    icon: fullstack,
    iconBg: "#E6DEDD",
    date: "July 2022 - Feb 2023",
    points: [
      "Also learned ot make responsive webpages by using frameworks like bootstrap and tailwind.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },

  {
    title: "Java & DSA ",
    company_name: "Udemy",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - April 2023",
    points: ["Learned basics of java and oops concept.", "Learned Dsa"],
  },
  {
    title: "Database Technologies Such MongoDB",
    company_name: "Udemy",
    icon: mongodb,
    iconBg: "#383E56",
    date: "April 2023 - May 2023",
    points: [
      "Achieved understanding of database management systems.",
      "Learned advanced database management skills in database schema design, complex queries, and efficient data handling.",
      "Also created a Natours application with MongoDB and hosted it using mongoDB atlas, showcasing adaptability and practical application of diverse database paradigms.",
    ],
  },
  {
    title: "React and three.js",
    company_name: "From JsMastery and Youtube",
    icon: reactjs,
    iconBg: "#383E56",
    date: "April 2023 - May 2023",
    points: [
      "Started learning ReactJs which is a frontend library based on Javascript for building responsive websites.",
      "Later started learning framer-moiton and threejs for using 3D object in websites and providing motion to different components and using the same built this portfolio website.",
    ],
  },
];

const testimonials = [
  {
    title: "Responsive",
    testimonial:
      "I specialize in creating responsive websites using Bootstrap, media queries, Tailwind, and other cutting-edge technologies. With a focus on user-centric design, I ensure a seamless experience across diverse devices.",
    image: responsive,
  },
  {
    title: "Dynamic",
    testimonial:
      "I excel at crafting dynamic websites using JavaScript, Node.js, and other backend technologies. With a focus on seamless user experiences and real-time functionalities, I bring a dynamic edge to web development.",
    image: dynamic,
  },
  {
    title: "Intutive",
    testimonial:
      "I have a strong preference for easy to use designs that prioritize user experience,I ensure that every design is user-friendly and seamlessly guides users through an engaging and intuitive journey.",
    image: intutive,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/snapees/CAR_RENTAL",
  },
  {
    name: "Travel World",
    description:
      "Web application that enables users to search about the travelling to world, and can contact the owner to get information about the tour.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travelit,
    source_code_link: "https://github.com/snapees/Travel-World",
  },
  {
    name: "Natours",
    description:
      "A comprehensive travel booking platform that allows users to book tour, and give reviews and ratings, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/snapees/natours",
  },
];

export { services, technologies, experiences, testimonials, projects };
