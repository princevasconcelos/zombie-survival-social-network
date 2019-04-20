import React from 'react';
import t from 'prop-types';

import { StyledInput, StyledLabel, Container } from './styles';

const propTypes = {
  value: t.string.isRequired,
  onChange: t.func.isRequired,
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
  value, onChange, label, type, name, id, readOnly,
}) => (
  <Container>
    <StyledInput
      value={value}
      onChange={onChange}
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
