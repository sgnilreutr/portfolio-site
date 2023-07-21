import ContentWrapper from 'components/elements/contentWrapper'
import Stack from 'components/elements/stack'
import StyledLink from 'components/elements/styledLink'
import {
  GithubSocial,
  LinkedInSocial,
  TwitterSocial,
} from 'components/socials/socials'

const Footer = () => {
  return (
    <footer>
      <ContentWrapper>
        <div className="flex flex-row flex-wrap justify-between px-8 py-8 my-0 md:py-8 lg:py-12 gap-3">
          <Stack spacing="large">
            <GithubSocial />
            <LinkedInSocial />
            <TwitterSocial />
          </Stack>
          <div>
            <span className="text-sm">
              build with{' '}
              <StyledLink href="https://nextjs.org/">NextJs</StyledLink>. hosted
              on <StyledLink href="https://vercel.com/">Vercel</StyledLink>.
              view the{' '}
              <StyledLink href="https://github.com/sgnilreutr/portfolio-site">
                source code
              </StyledLink>
              .{' '}
            </span>
            <span className="text-sm">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer
