import React from 'react';
import t from 'prop-types';

import StyledButton from './styles';

const propTypes = {
  children: t.string.isRequired,
  type: t.string,
  form: t.string,
};

const defaultProps = {
  type: 'button',
  form: '',
};

const Button = ({ children, type, form }) => (
  <StyledButton type={type} form={form}>
    {children}
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
