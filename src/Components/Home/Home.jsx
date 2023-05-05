import React from "react";
import './home.css'
import own_img from './images/AyahDweikatImg.webp'
function Home() {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="header-info">
          <p className="top-title">Hello, I'm</p>
          <h1 className="title">Ayah Dweikat</h1>
          <p className="desc">
            &amp; I am a <span>Frontend Developer </span>
          </p>
          <a className="contact-btn" href="#projects">
            My Projects
          </a>
        </div>
        <div className="own-img">
          <img
            src={own_img}
            alt="Ayah Dweikat"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
