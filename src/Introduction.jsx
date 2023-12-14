import { Link } from "react-scroll";

export default function Introduction() {
  return (
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
  );
}
