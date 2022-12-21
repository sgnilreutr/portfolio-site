import 'react-toggle/style.css'
import './modeSwitch.module.css'

import { useColorScheme } from 'hooks/useColorScheme'
import Toggle from 'react-toggle'
import Image from 'next/image'

import Moon from '../../../images/moon.png'
import Sun from '../../../images/sun.png'

const ModeSwitch = () => {
  const { isDark, setIsDark } = useColorScheme()

  return (
    <div>
      <Toggle
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={{
          checked: (
            <Image
              src={Moon}
              alt="dark-mode-icon"
              className="absolute max-h-4 max-w-4 top-[-3px] left-[-2px]"
            />
          ),
          unchecked: (
            <Image
              src={Sun}
              alt="light-mode-icon"
              className="absolute max-h-4 max-w-4"
            />
          ),
        }}
        aria-label="Dark mode"
      />
    </div>
  )
}

export default ModeSwitch
