import React from 'react';
import * as S from './styled';
import Logo from '../../assets/logo.svg';

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderLogo>
      <Logo />
    </S.HeaderLogo>
    <S.HeaderInfos>
      <p className="date">
        <span>03</span> de <span>Outubro</span> de <span>2020</span>
      </p>

      <p>
        Online <span>-</span>
        <span className="street"> link em breve</span>
      </p>

      <a href="https://www.meetup.com/pt-BR/hacktoberfest-sp/events/272260565/" target="_blank" rel="noopener noreferrer">Inscreva-se</a>
    </S.HeaderInfos>
  </S.HeaderWrapper>
);

export default Header;
