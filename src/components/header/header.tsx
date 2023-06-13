import classNames from 'lib/classNames'
import { useRouter } from 'next/router'
import DummyHomeButton from './dummyHomeButton'
import HomeButton from './homeButton'
import { ModeSwitch } from 'day-n-nite'
import ContentWrapper from 'components/elements/contentWrapper'

const Header = () => {
  const { asPath } = useRouter()

  const isHome = asPath === '/'

  return (
    <div
      className={classNames(
        'sticky top-0 left-0 z-50',
        'bg-zinc-100/80 dark:bg-zinc-900/30 backdrop-blur-sm'
      )}
    >
      <ContentWrapper>
        <div className="flex flex-row items-center justify-between pt-2 pb-1 mb-6 py-4">
          {!isHome ? <HomeButton /> : <DummyHomeButton />}
          <ModeSwitch />
        </div>
      </ContentWrapper>
    </div>
  )
}
export default Header
