import React from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import { useColorScheme } from '../../../hooks/useColorScheme'
import Sun from '../../../images/sun.png'
import Moon from '../../../images/moon.png'
import * as S from './modeSwitchStyles'
import './modeSwitch.css'

const ModeSwitch = () => {
  const { isDark, setIsDark } = useColorScheme()

  return (
    <div>
      <Toggle
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={{
          checked: <S.Img src={Moon} alt="dark-mode-icon" />,
          unchecked: <S.Img src={Sun} alt="light-mode-icon" />,
        }}
        aria-label="Dark mode"
      />
    </div>
  )
}

export default ModeSwitch
