import React from 'react'
import * as S from './headerStyles'
import ModeSwitch from './modeSwitch/modeSwitch'

const Header = () => (
  <S.Header>
    <S.Inner>
      <ModeSwitch />
    </S.Inner>
  </S.Header>
)

export default Header
