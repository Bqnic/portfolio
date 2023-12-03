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
        <Link
          className="btn"
          to="navigation"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Get to know me
        </Link>
      </div>
      <div className="navigation">
        <button>Home</button>
        <button>Portfolio</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </>
  );
}
