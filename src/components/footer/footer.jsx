import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import * as global from "../../constants/globalConstants"

const Footer = () => {
  return (
    <footer>
      <div style={{ display: `flex` }}>
        <div style={{ marginRight: `16px` }}>
          <a
            className="hover_effect social-icons"
            href={global.LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />{" "}
          </a>
        </div>
        <div>
          <a
            className="hover_effect social-icons"
            href={global.GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />{" "}
          </a>
        </div>
      </div>
      © {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
