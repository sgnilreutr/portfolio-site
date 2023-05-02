import { colorSchemeMode } from 'components/header/modeSwitch'
import { useEffect, useState } from 'react'

export default function useMediaColorScheme() {
  const [systemScheme, setSystemScheme] = useState<
    keyof typeof colorSchemeMode
  >(colorSchemeMode.auto)
  useEffect(() => {
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      e.matches
        ? setSystemScheme(colorSchemeMode.dark)
        : setSystemScheme(colorSchemeMode.light)
    }
    const colorSchemeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )
    colorSchemeMediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => {
      colorSchemeMediaQuery.removeEventListener(
        'change',
        handleSystemThemeChange
      )
    }
  }, [])

  return { systemScheme }
}
