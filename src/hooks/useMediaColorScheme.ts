import { colorSchemeMode } from 'components/header/modeSwitch'
import type { SystemColorSchemeMode } from 'components/header/modeSwitch'
import { useEffect, useState } from 'react'

export default function useMediaColorScheme() {
  const [systemScheme, setSystemScheme] =
    useState<SystemColorSchemeMode>(undefined)

  useEffect(() => {
    // Run once on mount
    const systemValueIsDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const colorSchemeOutcome = systemValueIsDark
      ? colorSchemeMode.dark
      : colorSchemeMode.light
    setSystemScheme(colorSchemeOutcome)
  }, [])

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
