import React from "react";
import facebookWebsite from './images/facebook-simulation-img.webp' 
import coffeeWebsite from './images/coffee-website-img.webp' 
import ECommerce from './images/e-commerce-img.webp' 
import picShots from './images/pic-shots-img.webp' 
import './projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project">
          <div className="project-info">
            <h3>Facebook Simulation</h3>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Resposive Design</span>
            </div>
            <p>
              Facebook Simulation project having few pages from Facebook App
              such as pages for sign-up, Login, home, watch, notifications,
              profile and messenger. It is have done using HTML, CSS, HTML5,
              CSS3 and Bootstrap. In addition to that it is responsive design
              for such different pages.
            </p>
            <div>
              <a
                title="GitHub"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AyahDweikat/FacebookSimulation"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                title="Demo"
                target="_blank"
                rel="noreferrer"
                href="https://ayahdweikat.github.io/FacebookSimulation/"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
          <div className="project-img">
            <img
              src={facebookWebsite}
              alt="Img for facebook Site"
            />
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h3>Coffee Website</h3>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Resposive Design</span>
              <span>JS</span>
              <span>Rest API</span>
              <span>JQuery</span>
            </div>
            <p>
              It's a coffeeshop website, done by using HTML, CSS, HTML5, CSS3,
              Bootstrap, JavaScript JQuery in some parts. It is a responsive
              Design for all pages.This website Getting some data from Fake API,
              and other data can be added from user by crud ways in JS and
              display in the menu page.
            </p>
            <div>
              <a
                title="GitHub"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AyahDweikat/coffee-website"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                title="Demo"
                target="_blank"
                rel="noreferrer"
                href="https://ayahdweikat.github.io/coffee-website/"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
          <div className="project-img">
            <img
              src={coffeeWebsite}
              alt="Img for a site"
            />
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h3>E-commerce</h3>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>Rest API</span>
              <span>React</span>
              <span>Routing</span>
              <span>JSX</span>
              <span>SASS</span>
            </div>
            <p>
              It's an E-commerce website, done by react and react-router. It can
              log in by username "ayah" and password "123". When login you will
              see a page category to choose from a category you want to buy.
              Chosen category will lead you to products page. By clicking on any
              product, this will display an information about the product.
            </p>
            <div>
              <a
                title="GitHub"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AyahDweikat/E-commerce"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                title="Demo"
                target="_blank"
                rel="noreferrer"
                href="https://ayahdweikat.github.io/E-commerce/"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
          <div className="project-img">
            <img src={ECommerce} alt="Img for a site" />
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h3>Pic Shots</h3>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>Rest API</span>
              <span>React</span>
              <span>Routing</span>
              <span>JSX</span>
              <span>SASS</span>
            </div>
            <p>
              It is an app used to search for images done by React and
              React-router having three pages:
              <mark>Home Page</mark> this page will have a search suggestion,
              with search about what you want, and when you click on it, it will
              display the results getting from API and hide the suggestions.
              <mark>Loved Page</mark> will display the Loved images you have,
              you can see it if you are login to page.
              <mark>Login Page</mark> you can log in by username "ayah" and
              password "123"
            </p>
            <div>
              <a
                title="GitHub"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AyahDweikat/pic-shots"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                title="Demo"
                target="_blank"
                rel="noreferrer"
                href="https://ayahdweikat.github.io/pic-shots/"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
          <div className="project-img">
            <img src={picShots} alt="Img for a site" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
