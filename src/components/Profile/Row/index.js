import React from 'react';
import t from 'prop-types';

import StyledRow from './styles';

const propTypes = {
  children: t.arrayOf(t.element).isRequired,
};

const Row = ({ children }) => <StyledRow>{children}</StyledRow>;

Row.propTypes = propTypes;

export default Row;
