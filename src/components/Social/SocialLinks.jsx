import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/Yaquiliz05"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jaqueline-goicochea-marin-a11aa4374/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:yaquelinliz05@gmail.com"
        className="social-link"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}


export { SocialLinks }
