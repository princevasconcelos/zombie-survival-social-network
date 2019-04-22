import React from 'react';
import t from 'prop-types';

import StyledButton from './styles';

const propTypes = {
  children: t.string.isRequired,
  type: t.string,
  form: t.string,
  color: t.string,
};

const defaultProps = {
  type: 'button',
  form: '',
  color: 'black',
};

const Button = ({
  children, type, form, color,
}) => (
  <StyledButton type={type} form={form} color={color}>
    {children}
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
