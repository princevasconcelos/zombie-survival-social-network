import React from 'react';
import t from 'prop-types';

import { Container, Name, Value } from './styles';

const propTypes = {
  name: t.string.isRequired,
  value: t.string.isRequired,
  readOnly: t.bool,
  handleChange: t.func,
  color: t.string.isRequired,
};

const defaultProps = {
  readOnly: false,
  handleChange: () => {},
};

const Item = ({
  name, value, readOnly, handleChange, color,
}) => (
  <Container>
    <Name>{name}</Name>
    <Value
      name={`items.${name}`}
      placeholder="0"
      value={value}
      onChange={handleChange}
      readOnly={readOnly}
      color={color}
    />
  </Container>
);

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
