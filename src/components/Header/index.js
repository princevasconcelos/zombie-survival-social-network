import React from 'react';

import StyledHeader, { Container } from './styles';

import ResponsiveText from '../ResponsiveText';
import Search from '../Search';

const Header = () => (
  <StyledHeader>
    <Container>
      <ResponsiveText
        zombie
        forSmallScreen="ZSSN"
        forLargeScreen="Zombie Survival Social Network"
      />
      <Search />
      <span>Add</span>
    </Container>
  </StyledHeader>
);

export default Header;
