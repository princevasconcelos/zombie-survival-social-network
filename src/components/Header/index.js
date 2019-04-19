import React from 'react';

import StyledHeader, { Container } from './styles';

import ResponsiveText from '../ResponsiveText';
import Search from '../Search';

const Header = () => (
  <StyledHeader>
    <Container>
      <ResponsiveText
        short="ZSSN"
        long="Zombie Survival Social Network"
        color="primary"
        size="xlarge"
      />
      <Search />
      <span>Add</span>
    </Container>
  </StyledHeader>
);

export default Header;
