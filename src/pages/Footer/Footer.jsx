import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Amine Hamzaoui</p>

        <div className="social-icons">

          <a href="#"><FaGithub/></a>
          <a href="#"><FaLinkedin/></a>
          <a href="#"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;