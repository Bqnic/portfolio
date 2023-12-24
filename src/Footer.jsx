import { Link } from "react-scroll";
export default function Footer() {
  return (
    <div className="footer">
      <Link className="btn" to="introduction" spy={true} smooth={true}>
        Go back to top
      </Link>
      <a href="https://github.com/Bqnic" target="_blank">
        Made by Stjepan Bonić (Bqnic) | <img src="icons8-github.svg" alt="" />
      </a>
    </div>
  );
}
