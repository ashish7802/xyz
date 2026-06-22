import UnicornScene from "unicornstudio-react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <UnicornScene
        projectId="kLM3mnmLXnAU5DHNMhUN"
        width="100%"
        height="900px"
        scale={1}
        dpi={1.5}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.3/dist/unicornStudio.umd.js"
      />
      <div className="content">
        <div className="buttn">
          <a href="#">Contact</a>
          <a href="#">Who i'm</a>
        </div>
      </div>
    </div>
    
  );
}