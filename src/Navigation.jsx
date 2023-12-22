import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link className="nav-btn" to="introduction" spy={true} smooth={true}>
        Home
      </Link>
      <Link
        className="nav-btn"
        to="about"
        spy={true}
        smooth={true}
        offset={-80}
      >
        About
      </Link>
      <Link
        className="nav-btn"
        to="projects"
        spy={true}
        smooth={true}
        offset={-80}
      >
        Projects
      </Link>
      <Link
        className="nav-btn"
        to="contact"
        spy={true}
        smooth={true}
        offset={-80}
      >
        Contact
      </Link>
    </div>
  );
}
