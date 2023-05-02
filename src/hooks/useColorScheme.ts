import { colorSchemeMode } from 'components/header/modeSwitch'
import { useEffect, useState } from 'react'
import useMediaColorScheme from './useMediaColorScheme'

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<keyof typeof colorSchemeMode>(
    colorSchemeMode.auto
  )
  const { systemScheme } = useMediaColorScheme()

  useEffect(() => {
    const storedSchemeValue = window.localStorage.theme || 'auto'
    if (storedSchemeValue) {
      setColorScheme(storedSchemeValue)
    }
  }, [systemScheme])

  useEffect(() => {
    const autoSchemeDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    switch (colorScheme) {
      case 'auto':
        localStorage.removeItem('theme')
        document.documentElement.classList.add('theme-system')
        if (autoSchemeDark) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        break
      case 'dark':
        document.documentElement.classList.remove('theme-system')
        document.documentElement.classList.add('dark')
        window.localStorage.theme = 'dark'
        break
      case 'light':
        document.documentElement.classList.remove('theme-system')
        document.documentElement.classList.remove('dark')
        window.localStorage.theme = 'light'
        break
    }
  }, [colorScheme, systemScheme])

  return {
    setColorScheme,
  }
}
