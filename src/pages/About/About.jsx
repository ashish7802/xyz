import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            I'm a passionate Full Stack Developer & AI Builder based in Lucknow, India.
            I specialize in bridging robust web applications with cutting‑edge AI automation.
            With expertise in React, Node.js, Python, and modern AI APIs, I build scalable
            solutions that solve real‑world problems.
          </p>
          <p>
            My philosophy is simple: write clean code, automate the boring stuff, and always
            keep learning. With great technical power comes the responsibility to build
            meaningful products.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;