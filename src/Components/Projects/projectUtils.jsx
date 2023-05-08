import facebookWebsite from './images/facebook-simulation-img.webp' 
import coffeeWebsite from './images/coffee-website-img.webp' 
import ECommerce from './images/e-commerce-img.webp' 
import picShots from './images/pic-shots-img.webp' 

export const projectsData = [
  {
    title: "Facebook Simulation",
    techStack: ["HTML", "CSS", "Bootstrap", "Resposive Design"],
    description:
      "Facebook Simulation project having few pages from Facebook App such as pages for sign-up, Login, home, watch, notifications, profile and messenger. It is have done using HTML, CSS, HTML5, CSS3 and Bootstrap. In addition to that it is responsive design for such different pages.",
    gitHubURL: "https://github.com/AyahDweikat/FacebookSimulation",
    siteURL: "https://ayahdweikat.github.io/FacebookSimulation/",
    imgSRC: facebookWebsite,
  },
  {
    title: "Coffee Website",
    techStack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Resposive Design",
      "JS",
      "Rest API",
      "JQuery",
    ],
    description:
      "It's a coffeeshop website, done by using HTML, CSS, HTML5, CSS3, Bootstrap, JavaScript JQuery in some parts. It is a responsive Design for all pages.This website Getting some data from Fake API, and other data can be added from user by crud ways in JS and display in the menu page.",
    gitHubURL: "https://github.com/AyahDweikat/coffee-website",
    siteURL: "https://ayahdweikat.github.io/coffee-website/",
    imgSRC: coffeeWebsite,
  },
  {
    title: "E-commerce",
    techStack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Resposive Design",
      "JS",
      "Rest API",
      "JQuery",
      "React",
      "Routing",
      "JSX",
      "SASS",
    ],
    description:
      "It's an E-commerce website, done by react and react-router. It can log in by username 'ayah' and password '123'. When login you will see a page category to choose from a category you want to buy. Chosen category will lead you to products page. By clicking on any product, this will display an information about the product.",
    gitHubURL: "https://github.com/AyahDweikat/E-commerce",
    siteURL: "https://ayahdweikat.github.io/E-commerce/",
    imgSRC: ECommerce,
  },
  {
    title: "E-commerce",
    techStack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Resposive Design",
      "JS",
      "Rest API",
      "JQuery",
      "React",
      "Routing",
      "JSX",
      "SASS",
    ],
    description: `It is an app used to search for images done by React and React-router having three pages: <mark>Home Page</mark> this page will have a search suggestion, with search about what you want, and when you click on it, it will display the results getting from API and hide the suggestions. <mark>Loved Page</mark> will display the Loved images you have, you can see it if you are login to page. <mark>Login Page</mark> you can log in by username 'ayah' and password '123'`,
    gitHubURL: "https://github.com/AyahDweikat/pic-shots",
    siteURL: "https://ayahdweikat.github.io/pic-shots/",
    imgSRC: picShots,
  },
];
