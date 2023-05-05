import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <aside className="contact-list">
        <ul>
          <li>
            <a
              title="E-mail"
              target="_blank"
              rel="noreferrer"
              href="mailto:dweikatayah99@gmail.com"
            >
              <i className="fa-regular fa-envelope" />
            </a>
          </li>
          <li>
            <a
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ayah-dweikat-1291801bb/"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              title="GitHub"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AyahDweikat"
            >
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a
              title="Facebook"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/ayahdweikat99/"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              title="Mobile"
              target="_blank"
              rel="noreferrer"
              href="tel:+970569420732"
            >
              <i className="fa-solid fa-phone" />
            </a>
          </li>
        </ul>
      </aside>
      <p className="copy-right">
        © Copyright 2023. Design and Built by Ayah Dweikat
      </p>
    </footer>
  );
}

export default Footer;
