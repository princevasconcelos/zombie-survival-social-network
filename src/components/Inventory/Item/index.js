import React from 'react';
import t from 'prop-types';

import { Container, Name, Value } from './styles';

const propTypes = {
  name: t.string.isRequired,
  value: t.string,
  readOnly: t.bool,
  handleChange: t.func,
  onBlur: t.func,
  color: t.string.isRequired,
};

const defaultProps = {
  value: '',
  readOnly: false,
  handleChange: () => {},
  onBlur: () => {},
};

const Item = ({
  name, value, readOnly, handleChange, onBlur, color,
}) => (
  <Container>
    <Name>{name}</Name>
    <Value
      name={`items.${name}`}
      placeholder="0"
      value={value}
      onChange={(event) => {
        if (event.target.value.match(/\D+/g)) {
          return event.preventDefault();
        }
        return handleChange(event);
      }}
      onBlur={onBlur}
      readOnly={readOnly}
      color={color}
    />
  </Container>
);

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
