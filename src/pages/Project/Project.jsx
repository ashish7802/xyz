import "./Project.css";

import autodocAI from "../../assets/images/autodoc_ai_card_1782130403769.png";
import commitAI from "../../assets/images/commitai_card_1782130420856.png";
import anonConnect from "../../assets/images/anonconnect_card.png";
import devLaunchpad from "../../assets/images/dev_launchpad_card.png";
import devUniverse from "../../assets/images/dev_universe_card.png";
import airTrafficControl from "../../assets/images/air_traffic_control_simulator_card.png";

const projects = [
  {
    title: "autodoc‑ai",
    img: autodocAI,
    desc: "AI‑powered documentation generator.",
    skills: ["React", "Node.js", "Python"]
  },
  {
    title: "Commitai",
    img: commitAI,
    desc: "AI‑powered Git commit message generator.",
    skills: ["Next.js", "FastAPI", "MongoDB"]
  },
  {
    title: "AnonConnect",
    img: anonConnect,
    desc: "Anonymous social networking platform.",
    skills: ["React", "Express", "MongoDB"]
  },
  {
    title: "dev‑launchpad",
    img: devLaunchpad,
    desc: "Open‑source developer starter toolkit.",
    skills: ["CLI", "Templates", "LLM"]
  },
  {
    title: "dev‑universe",
    img: devUniverse,
    desc: "Immersive 3D web experience for dev portfolios.",
    skills: ["Three.js", "React‑Three‑Fiber", "GSAP"]
  },
  {
    title: "air‑traffic‑control‑simulator",
    img: airTrafficControl,
    desc: "Realistic air traffic control simulation.",
    skills: ["Unity", "C#"]
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href="#" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

              <a href="#" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}