import "./Skills.css";

import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact,
FaGitAlt,
FaGithub,
FaFigma,
FaNodeJs,
FaJava
} from "react-icons/fa";

import {
SiUnity,
SiTailwindcss,
SiFirebase,
SiMongodb,
SiExpress,
SiMysql,
SiPhp
} from "react-icons/si";

function Skills(){

return(

<div className="skills">
<div className="skills-slider">
<div className="skills-track">

<FaHtml5/>
<FaCss3Alt/>
<FaJs/>
<FaReact/>

<FaJava/>
<SiMysql/>
<SiPhp/>

<FaNodeJs/>
<SiExpress/>
<SiMongodb/>

<FaGitAlt/>
<FaGithub/>
<FaFigma/>

<SiUnity/>
<SiTailwindcss/>
<SiFirebase/>

</div>

</div>

</div>

)

}

export default Skills;