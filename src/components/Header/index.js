import React from 'react';
import * as S from './styled';
import Logo from '../../assets/logo.svg';

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderLogo>
      <Logo />
    </S.HeaderLogo>
  </S.HeaderWrapper>
);

export default Header;
