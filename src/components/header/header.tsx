'use client'

import { ModeSwitch } from 'day-n-nite'
import { usePathname } from 'next/navigation'

import ContentWrapper from 'components/elements/contentWrapper'
import classNames from 'lib/classNames'

import DummyHomeButton from './dummyHomeButton'
import HomeButton from './homeButton'

const Header = () => {
  const pathname = usePathname()

  const isHome = pathname === '/'

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
