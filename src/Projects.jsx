import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState(0);
  return (
    <>
      <div className="projects">
        <div className="section">Projects</div>
        <p>
          I started making projects involving programming in my
          <a> junior year </a>
          of high school.
        </p>
        <p>
          Programming was a way of using my creativity to create something, I
          created small text adventure games that I would share with my friends.
        </p>
        <p>
          In my first year of university I started working on some bigger
          <a> projects</a>, such as:
        </p>
      </div>
      <div className="project-slider"></div>
    </>
  );
}
