import React, { useState } from "react";
import './header.css';

function Header() {
    let [flag, setFlag] = useState(false)
    function myFunction() {
        setFlag(!flag)
    }
  return (
    <header>
      <div className="logo"
    //   role="text" 
      aria-label="Logo">
        <span>Ayah Dweikat</span>
      </div>
      <nav>
        <div className="icon" 
        // onClick={setFlag(!flag)}
        onClick = {myFunction}
        >
          <span id="icon"
          className={flag? "activeBtn":""}
          >☰</span>
        </div>
        <ul 
        className={flag? "nav-list responsive":"nav-list"}
        id="nav-list">
          <li className="_home active">
            <a className="nav-item" href="#home">
              Home
            </a>
          </li>
          <li className="_about">
            <a className="nav-item" href="#about">
              About
            </a>
          </li>
          <li className="_projects">
            <a className="nav-item" href="#projects">
              Projects
            </a>
          </li>
          <li className="_contact">
            <a className="nav-item" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a
              className="nav-item"
              target="_blank"
              href="/assets/attachments/AyahDweikatCV.pdf"
            >
              My Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
