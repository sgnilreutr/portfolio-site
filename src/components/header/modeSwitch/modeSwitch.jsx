import React from "react"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import { useColorScheme } from "../../../hooks/useColorScheme"
import Sun from "../../../images/sun.png"
import Moon from "../../../images/Moon.png"
import * as S from "./modeSwitchStyles"
import "./modeSwitch.css"

const ICON_SIZE = 10

const ModeSwitch = () => {
  const { isDark, setIsDark } = useColorScheme()
  return (
    <div>
      <Toggle
        checked={isDark}
        onChange={event => setIsDark(event.target.checked)}
        icons={{
          checked: <S.Img src={Moon} />,
          unchecked: <S.Img src={Sun} />,
        }}
        aria-label="Dark mode"
      />
    </div>
  )
}

export default ModeSwitch
