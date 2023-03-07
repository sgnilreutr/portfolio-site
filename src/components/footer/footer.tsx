import Stack from 'components/elements/stack'
import StyledLink from 'components/elements/styledLink'
import {
  GithubSocial,
  LinkedInSocial,
  TwitterSocial,
} from 'components/socials/socials'

const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap justify-between px-2 py-8 mx-2 my-0 md:px-10 md:mx-12 md:py-8 lg:py-12">
      <Stack spacing="large">
        <GithubSocial />
        <LinkedInSocial />
        <TwitterSocial />
      </Stack>
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
