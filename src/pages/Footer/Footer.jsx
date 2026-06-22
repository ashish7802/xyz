import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Ashish Yadav</p>

        <div className="social-icons">

          <a href="https://github.com/ashish7802" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          <a href="#"><FaLinkedin/></a>
          <a href="#"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;