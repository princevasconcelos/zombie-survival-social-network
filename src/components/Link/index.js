import React from 'react';
import t from 'prop-types';

import StyledLink from './styles';

const propTypes = {
  children: t.oneOfType([t.string, t.element, t.arrayOf(t.element)]).isRequired,
  to: t.string.isRequired,
  hoverEffect: t.bool,
  full: t.bool,
};

const defaultProps = {
  hoverEffect: true,
  full: false,
};

const Link = ({
  children, to, hoverEffect, full,
}) => (
  <StyledLink to={to} hovereefect={hoverEffect.toString()} full={full}>
    {children}
  </StyledLink>
);

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
export default Link;
