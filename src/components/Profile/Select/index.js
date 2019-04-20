import React from 'react';
import t from 'prop-types';

import { StyledSelect, StyledLabel, Container } from './styles';

const propTypes = {
  options: t.arrayOf(t.objectOf(t.string)).isRequired,
  onChange: t.func.isRequired,
  readOnly: t.bool,
};

const defaultProps = {
  readOnly: false,
};

const Select = ({ options, onChange, readOnly }) => (
  <Container>
    <StyledSelect name="genre" onChange={onChange} readOnly={readOnly}>
      {options.map(option => (
        <option key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </StyledSelect>
    <StyledLabel>Genre</StyledLabel>
  </Container>
);

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
