import React from 'react';
import t from 'prop-types';

import StyledLink from './styles';

const propTypes = {
  children: t.string.isRequired,
  to: t.string.isRequired,
};

const Link = ({ children, to }) => <StyledLink to={to}>{children}</StyledLink>;

Link.propTypes = propTypes;

export default Link;
