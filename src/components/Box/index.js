import React from 'react';

import { StyledBox, Title } from './styles';

const Box = ({ title, children }) => (
  <StyledBox>
    <Title>{title}</Title>
    {children}
  </StyledBox>
);

export default Box;
