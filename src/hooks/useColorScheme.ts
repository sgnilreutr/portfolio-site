import { useEffect, useState } from 'react'

export function useColorScheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const check =
      window.localStorage.theme === 'dark' ||
      (!('theme' in window.localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)

    console.log(check)

    setIsDark(
      window.localStorage.theme === 'dark' ||
        (!('theme' in window.localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      window.localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.theme = 'light'
    }
  }, [isDark])

  return {
    isDark,
    setIsDark,
  }
}
