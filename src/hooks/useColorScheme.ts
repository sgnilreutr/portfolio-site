import { colorSchemeMode } from 'components/header/modeSwitch'
import type { ColorSchemeMode } from 'components/header/modeSwitch'
import { useEffect, useState } from 'react'
import useMediaColorScheme from './useMediaColorScheme'

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<ColorSchemeMode>(
    colorSchemeMode.auto
  )
  const { systemScheme } = useMediaColorScheme()

  useEffect(() => {
    const storedSchemeValue = window.localStorage.theme || colorSchemeMode.auto
    setColorScheme(storedSchemeValue)
  }, [])

  useEffect(() => {
    if (!systemScheme) {
      return
    }
    switch (colorScheme) {
      case 'auto': {
        const autoSchemeDark = systemScheme === colorSchemeMode.dark
        localStorage.removeItem('theme')

        document.documentElement.classList.add('theme-system')
        if (autoSchemeDark) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        return
      }
      case 'dark': {
        document.documentElement.classList.remove('theme-system')
        document.documentElement.classList.add('dark')
        window.localStorage.theme = 'dark'
        return
      }
      case 'light': {
        document.documentElement.classList.remove('theme-system')
        document.documentElement.classList.remove('dark')
        window.localStorage.theme = 'light'
        return
      }
    }
  }, [colorScheme, systemScheme])

  return {
    colorScheme,
    setColorScheme,
  }
}
