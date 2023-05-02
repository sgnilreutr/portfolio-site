import { DEFAULT_LINK_STYLES } from 'components/elements/internalLink'
import { useColorScheme } from 'hooks/useColorScheme'
import useMediaColorScheme from 'hooks/useMediaColorScheme'
import classNames from 'lib/classNames'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

export const colorSchemeMode = {
  auto: 'auto',
  dark: 'dark',
  light: 'light',
} as const

const schemeToIcon: Record<
  Exclude<keyof typeof colorSchemeMode, 'auto'>,
  JSX.Element
> = {
  dark: <HiOutlineMoon />,
  light: <HiOutlineSun />,
}

const schemeToDisplay: Record<
  keyof typeof colorSchemeMode,
  Record<string, ReactNode>
> = {
  auto: {
    icon: null,
    before: 'hover:before:content-["system"]',
  },
  dark: {
    icon: <HiOutlineMoon />,
    before: 'hover:before:content-["dark"]',
  },
  light: {
    icon: <HiOutlineSun />,
    before: 'hover:before:content-["light"]',
  },
}

const DEFAULT_STYLES =
  'flex gap-2 items-center before:text-zinc-400 before:text-[12px] before:font-mono'

const ModeSwitch = () => {
  const [schemeMode, setSchemeMode] = useState<keyof typeof colorSchemeMode>(
    colorSchemeMode.auto
  )
  const [activeIcon, setActiveIcon] = useState<JSX.Element | null>(null)
  const { setColorScheme } = useColorScheme()
  const { systemScheme } = useMediaColorScheme()

  const toggleSchemeMode = () => {
    switch (schemeMode) {
      case 'auto':
        setSchemeMode('dark')
        setColorScheme('dark')
        break
      case 'dark':
        setSchemeMode('light')
        setColorScheme('light')
        break
      case 'light':
        setSchemeMode('auto')
        setColorScheme('auto')
        break
    }
  }

  useEffect(() => {
    if (schemeMode === 'auto') {
      const scheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? colorSchemeMode.dark
        : colorSchemeMode.light
      setActiveIcon(schemeToIcon[scheme])
    }
  }, [schemeMode, systemScheme])

  if (schemeMode === 'auto') {
    const before = schemeToDisplay[schemeMode].before
    return (
      <button
        onClick={toggleSchemeMode}
        className={classNames(`${before}`, DEFAULT_STYLES)}
      >
        <span className={DEFAULT_LINK_STYLES}>{activeIcon}</span>
      </button>
    )
  }
  const icon = schemeToDisplay[schemeMode].icon
  const before = schemeToDisplay[schemeMode].before
  return (
    <button
      onClick={toggleSchemeMode}
      className={classNames(`${before}`, DEFAULT_STYLES)}
    >
      <span className={DEFAULT_LINK_STYLES}>{icon}</span>
    </button>
  )
}

export default ModeSwitch
