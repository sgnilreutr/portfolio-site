import SocialLink from 'components/elements/socialLink'
import * as global from 'constants/globalConstants'
import {
  FaGithub,
  FaLinkedin,
  FaRegCalendarCheck,
  FaTwitter,
} from 'react-icons/fa'

const ICON_SIZE = 20

export const GithubSocial = () => (
  <SocialLink
    href={global.GITHUB_LINK}
    icon={<FaGithub size={ICON_SIZE} aria-hidden="true" focusable="false" />}
    label={global.SR_GITHUB}
  />
)

export const LinkedInSocial = () => (
  <SocialLink
    href={global.LINKEDIN_LINK}
    icon={<FaLinkedin size={ICON_SIZE} aria-hidden="true" focusable="false" />}
    label={global.SR_LINKEDIN}
  />
)

export const TwitterSocial = () => (
  <SocialLink
    href={global.TWITTER_LINK}
    icon={<FaTwitter size={ICON_SIZE} aria-hidden="true" focusable="false" />}
    label={global.SR_TWITTER}
  />
)

export const CalendlySocial = () => (
  <SocialLink
    href={global.CALENDLY_LINK}
    icon={
      <FaRegCalendarCheck
        size={ICON_SIZE}
        aria-hidden="true"
        focusable="false"
      />
    }
    label={global.SR_CALENDLY}
  />
)
