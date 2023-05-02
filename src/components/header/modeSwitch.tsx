import { DEFAULT_LINK_STYLES } from 'components/elements/internalLink'
import { useColorScheme } from 'hooks/useColorScheme'
import useMediaColorScheme from 'hooks/useMediaColorScheme'
import classNames from 'lib/classNames'
import type { ReactNode } from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

export const colorSchemeMode = {
  auto: 'auto',
  dark: 'dark',
  light: 'light',
} as const

export type ColorSchemeMode =
  (typeof colorSchemeMode)[keyof typeof colorSchemeMode]
export type SystemColorSchemeMode = ColorSchemeMode | undefined

const schemeToDisplay: Record<ColorSchemeMode, Record<string, ReactNode>> = {
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

const getActiveIcon = (
  colorScheme: ColorSchemeMode,
  systemScheme: SystemColorSchemeMode
): ReactNode => {
  if (colorScheme === 'auto') {
    return systemScheme === 'dark'
      ? schemeToDisplay.dark.icon
      : schemeToDisplay.light.icon
  }
  return schemeToDisplay[colorScheme].icon
}

const DEFAULT_STYLES =
  'flex gap-2 items-center before:text-zinc-400 before:text-[12px] before:font-mono'

const ModeSwitch = () => {
  const { colorScheme, setColorScheme } = useColorScheme()
  const { systemScheme } = useMediaColorScheme()

  const toggleSchemeMode = () => {
    switch (colorScheme) {
      case 'auto':
        setColorScheme('dark')
        break
      case 'dark':
        setColorScheme('light')
        break
      case 'light':
        setColorScheme('auto')
        break
    }
  }

  const activeIcon = getActiveIcon(colorScheme, systemScheme)
  const before = schemeToDisplay[colorScheme].before

  return (
    <button
      onClick={toggleSchemeMode}
      className={classNames(`${before}`, DEFAULT_STYLES)}
    >
      <span className={DEFAULT_LINK_STYLES}>{activeIcon}</span>
    </button>
  )
}

export default ModeSwitch
