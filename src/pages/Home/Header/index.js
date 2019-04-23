import React from 'react';

import StyledHeader, { Container } from './styles';

import ResponsiveText from '../../../components/ResponsiveText';
import Search from '../../../components/Search';
import Link from '../../../components/Link';

const Header = () => (
  <StyledHeader>
    <Container>
      <ResponsiveText
        short="ZSSN"
        long="Zombie Survival Social Network"
        color="primary"
        size="xmedium"
      />
      <Search />
      <Link to="register">Register</Link>
    </Container>
  </StyledHeader>
);

export default Header;
