import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div style={{ display: `flex` }}>
        <div style={{ marginRight: `16px` }}>
          <a
            className="hover_effect social-icons"
            href="https://www.linkedin.com/in/robberttuerlings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaLinkedin size={30} />{" "}
          </a>
        </div>
        <div>
          <a
            className="hover_effect social-icons"
            href="https://github.com/sgnilreutr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithub size={30} />{" "}
          </a>
        </div>
      </div>
      © {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
