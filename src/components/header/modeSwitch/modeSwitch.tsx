import 'react-toggle/style.css'
import './modeSwitch.css'

import { useColorScheme } from 'hooks/useColorScheme'
import Toggle from 'react-toggle'

import Moon from '../../../images/moon.png'
import Sun from '../../../images/sun.png'
import * as S from './modeSwitchStyles'

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
