import { Link } from "react-scroll";

export default function Navigation() {
  return (
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
  );
}
