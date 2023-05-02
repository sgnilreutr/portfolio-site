import classNames from 'lib/classNames'
import { useRouter } from 'next/router'
import DummyHomeButton from './dummyHomeButton'
import HomeButton from './homeButton'
import ModeSwitch from './modeSwitch'

const Header = () => {
  const { asPath } = useRouter()

  const isHome = asPath === '/'

  return (
    <div
      className={classNames(
        'flex flex-row items-center justify-between sticky top-0 left-0 z-50 pt-2 pb-1 mb-6 px-4 py-4 mx-2 my-0 md:px-10 md:mx-12',
        'bg-zinc-100/80 dark:bg-zinc-900/30 backdrop-blur-sm'
      )}
    >
      {!isHome ? <HomeButton /> : <DummyHomeButton />}
      <ModeSwitch />
    </div>
  )
}
export default Header
