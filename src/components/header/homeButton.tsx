import InternalLink from 'components/elements/internalLink'
import { NAME } from 'lib/globalConstants'

const HomeButton = () => {
  return (
    <InternalLink href="/" className="-ml-2 font-bold">
      <span>{NAME}</span>
    </InternalLink>
  )
}

export default HomeButton
