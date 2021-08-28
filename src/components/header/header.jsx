import React from "react"
import { Link } from "gatsby"
import * as S from "./headerStyles"
import ModeSwitch from "./modeSwitch/modeSwitch"

const Header = ({ siteTitle }) => (
  <S.Header>
    <S.Inner>
      <ModeSwitch />
    </S.Inner>
  </S.Header>
)

export default Header
