import StyledLink from 'components/elements/styledLink'
import { GithubSocial, LinkedInSocial } from 'components/socials/socials'

const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap justify-between px-10 py-4 mx-12 my-0 md:py-8 lg:py-12">
      <div className="flex flex-row flex-wrap">
        <div className="mr-4">
          <GithubSocial />
        </div>
        <div>
          <LinkedInSocial />
        </div>
      </div>
      <div>
        <span className="text-sm">
          Build with <StyledLink href="https://nextjs.org/">NextJs</StyledLink>.
          Hosted on <StyledLink href="https://vercel.com/">Vercel</StyledLink>.
          View the{' '}
          <StyledLink href="https://github.com/sgnilreutr/portfolio-site">
            Source Code
          </StyledLink>
          .{' '}
        </span>
        <span className="text-sm">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer
