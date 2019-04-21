import React from 'react';
import t from 'prop-types';

import { StyledBox, Title } from './styles';

const propTypes = {
  title: t.string.isRequired,
  children: t.element.isRequired,
  withBorder: t.bool,
};

const defaultProps = {
  withBorder: false,
};

const Box = ({ title, children, withBorder }) => (
  <StyledBox withBorder={withBorder}>
    <Title>{title}</Title>
    {children}
  </StyledBox>
);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
