import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>aminehamzaoui1925@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+213 XX XX XX XX</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Algeria</span>
          </div>

        </div>

        {/* RIGHT FORM */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );

}

export default Contact;