import React from 'react';

import StyledHeader, { Container } from './styles';

import ResponsiveText from '../ResponsiveText';
import Search from '../Search';
import Link from '../Link';

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
      <Link to="register">Create a survivor</Link>
    </Container>
  </StyledHeader>
);

export default Header;
