import React from 'react';
import t from 'prop-types';

import StyledButton from './styles';

const propTypes = {
  children: t.string.isRequired,
  onClick: t.func,
  type: t.string,
  form: t.string,
  color: t.string,
  isActive: t.bool,
};

const defaultProps = {
  onClick: () => {},
  type: 'button',
  form: '',
  color: 'black',
  isActive: false,
};

const Button = ({
  children, onClick, type, form, color, isActive,
}) => (
  <StyledButton
    onClick={isActive ? null : onClick}
    type={type}
    form={form}
    color={color}
    isActive={isActive}
  >
    {children}
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
