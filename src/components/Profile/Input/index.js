import React from 'react';
import t from 'prop-types';

import { StyledInput, StyledLabel, Container } from './styles';

const propTypes = {
  value: t.oneOfType([t.string, t.number]).isRequired,
  onChange: t.func.isRequired,
  onBlur: t.func.isRequired,
  label: t.string.isRequired,
  type: t.string.isRequired,
  name: t.string.isRequired,
  id: t.string.isRequired,
  readOnly: t.bool,
};

const defaultProps = {
  readOnly: false,
};

const Input = ({
  value, onChange, onBlur, label, type, name, id, readOnly,
}) => (
  <Container>
    <StyledInput
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      name={name}
      id={id}
      readOnly={readOnly}
    />
    <StyledLabel htmlFor={id} stayAbove={value}>
      {label}
    </StyledLabel>
  </Container>
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
