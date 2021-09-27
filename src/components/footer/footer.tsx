import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import * as global from "../../constants/globalConstants"
import * as S from "./footerStyles"

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.SocialIcons>
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
      </S.SocialIcons>
      <div>
        <small>
          Build with <a href="https://www.gatsbyjs.com/">Gatsby</a>. Hosted on{" "}
          <a href="https://vercel.com/">Vercel</a>. View the{" "}
          <a href="https://github.com/sgnilreutr/portfolio-site">Source Code</a>
          .{" "}
        </small>
        <small>© {new Date().getFullYear()}</small>
      </div>
    </S.FooterWrapper>
  )
}

export default Footer
