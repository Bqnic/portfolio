import { useState } from "react";
import { projectArray } from "./assets/projects-helper";

export default function Projects() {
  const [projects, setProjects] = useState(0);
  const projectDivs = [];
  const numOfProjects = 5;

  for (let i = 1; i <= numOfProjects; i++) {
    projectDivs.push(<div className={projects >= i ? "active" : null}></div>);
  }

  return (
    <>
      <div className="section">Projects</div>
      <div className="projects">
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
        <div className="project-slider">{projectArray[projects]}</div>
        <div className="slider_btns">
          <div className="btns">
            <button
              onClick={() =>
                setProjects(projects == 0 ? numOfProjects : projects - 1)
              }
            >
              <img src="icons8-arrow-left-50.png" alt="-&lt;" />
            </button>
          </div>
          <div
            className="slider"
            style={{ gridTemplateColumns: `repeat(${numOfProjects}, 1fr` }}
          >
            {projectDivs}
          </div>
          <div className="btns">
            <button
              onClick={() =>
                setProjects(projects == numOfProjects ? 0 : projects + 1)
              }
            >
              <img src="icons8-arrow-right-50.png" alt="-&gt;" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
