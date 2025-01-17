export default function About() {
  const myAge = Math.floor((new Date() - new Date("2003-12-26").getTime()) / 3.15576e+10);

  return (
    <div className="aboutWrapper">
      <div className="section">About</div>
      <div className="about">
        <div className="paras">
          <p>
            I am a <a>{myAge}</a> year old CS student from <a>Croatia</a>.
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
            Always looking forward to learning and developing new skills, here
            is a showcase of my current <a>skills</a>:
          </p>
        </div>
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
            <img src="../icons8-typescript.svg" alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div>
            <img src="../icons8-c.svg" alt="C++" />
            <p>C++</p>
          </div>
          <div>
            <img src="../icons8-java.svg" alt="JAVA" />
            <p>Java</p>
          </div>
          <div>
            <img src="../icons8-react.svg" alt="React" />
            <p>React</p>
          </div>
          <div>
            <img src="../icons8-python.svg" alt="Python" />
            <p>Python</p>
          </div>
          <div>
            <img src="../icons8-git.svg" alt="GIT" />
            <p>Git</p>
          </div>
          <div>
            <img src="../icons8-vite.svg" alt="Vite" />
            <p>Vite</p>
          </div>
        </div>
      </div>
    </div>
  );
}
