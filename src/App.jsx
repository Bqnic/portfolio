//import { useState } from 'react'
import { Link } from "react-scroll";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="introduction">
        <div>
          <p>Hello!</p>
          <p>
            I'm <a>Stjepan Bonić.</a>
          </p>
        </div>
        <div>
          <p>An aspiring full stack developer.</p>
        </div>
        <Link className="btn" to="navigation" spy={true} smooth={true}>
          Get to know me
        </Link>
      </div>

      <div className="navigation">
        <Link className="nav-btn" to="introduction" spy={true} smooth={true}>
          Home
        </Link>
        <Link className="nav-btn" to="about" spy={true} smooth={true}>
          About
        </Link>
        <Link className="nav-btn" to="/" spy={true} smooth={true}>
          Projects
        </Link>
        <Link className="nav-btn" to="/" spy={true} smooth={true}>
          Contact
        </Link>
      </div>

      <div className="about">
        <div className="section">ABOUT</div>
        <p>
          I am a <a>20</a> year old CS student from <a>Croatia</a>.
        </p>
        <p>
          Currently a second year in university <a>FER</a> (Fakultet
          Elektrotehnike i Računarstva).
        </p>
        <p>
          At the moment, the biggest interest I have is in a field of
          <a> full stack web development</a>, but it's not my only interest.
        </p>
        <p>
          Always looking forward to learning and developing new skills, here is
          a showcase of my current <a>skills</a>:
        </p>
        <div className="skills">
          <div>
            <img src="../icons8-html.svg" alt="HTML" />
            <p>HTML</p>
          </div>
          <div>
            <img src="../icons8-css.svg" alt="CSS" />
            <p>CSS</p>
          </div>
          <div>
            <img src="../icons8-javascript.svg" alt="C++" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="../icons8-c.svg" alt="C++" />
            <p>C++</p>
          </div>
          <div>
            <img src="../icons8-java.svg" alt="JAVA" />
            <p>Java</p>
          </div>
        </div>
      </div>
    </>
  );
}
