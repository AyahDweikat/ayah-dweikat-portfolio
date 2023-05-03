import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import './about.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-sections container">
        <article className="about-me">
          <h2>about me</h2>
          <p>
            Hello, my name is Ayah Dweikat, As a frontend developer, I am
            dedicated to creating responsive and visually appealing websites
            that are both functional and user-friendly. With a keen eye for
            design and a passion for coding, I strive to develop clean and
            efficient code that delivers an optimal user experience.
          </p>
          <p>
            My expertise in HTML, CSS, JavaScript and React allows me to build
            modern and dynamic web applications. I am also committed to staying
            up-to-date with the latest technologies and trends in frontend
            development. You can find my portfolio, as well as links to my
            <a
              className="anchors-in-paragraph"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AyahDweikat"
            >
              GitHub
            </a>
            and
            <a
              className="anchors-in-paragraph"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ayah-dweikat-1291801bb/"
            >
              LinkedIn
            </a>
            profiles, where you can view my projects and connect with me,
            respectively.
          </p>
        </article>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>
              {/* <i className="fa-brands fa-html5" /> */}
              <FontAwesomeIcon icon={faCode} />
              <span>HTML / HTML5</span>
            </li>
            <li>
              {/* <i className="fa-brands fa-css3" /> */}
              <span>CSS / CSS3</span>
            </li>
            <li>
              {/* <i className="fa-brands fa-bootstrap" /> */}
              <span>Bootstrap</span>
            </li>
            <li>
              {/* <i className="fa-brands fa-sass" /> */}
              <span>SASS</span>
            </li>
            <li>
              {/* <i className="fa-brands fa-js" /> */}
              <span>Javascript</span>
            </li>
            <li>
              {/* <i className="fa-brands fa-react" /> */}
              <span>React JS</span>
            </li>
            <li>
              <span>Material UI</span>
            </li>
            <li>
              {/* <i className="fa-brands fa-git" /> */}
              <span>git</span>
            </li>
            <li>
              {/* <i className="fa-brands fa-github" /> */}
              <span>GitHub</span>
            </li>
            <li>
              <span>Responsive Design</span>
            </li>
            <li>
              <i className="fa-solid fa-database" />
              <span>SQL Basics</span>
            </li>
            <li>
              <i className="fa-brands fa-node-js" />
              <span>Node JS Basics</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;
