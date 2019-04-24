import React from 'react';
import t from 'prop-types';

import { Container, Name, Value } from './styles';

const propTypes = {
  handleChange: t.func,
  onBlur: t.func,
  value: t.oneOfType([t.string, t.number]),
  name: t.string.isRequired,
  color: t.string.isRequired,
  forObject: t.string.isRequired,
  position: t.number.isRequired,
  readOnly: t.bool,
};

const defaultProps = {
  value: '',
  readOnly: false,
  handleChange: () => {},
  onBlur: () => {},
};

const Item = ({
  name, value, position, readOnly, handleChange, onBlur, color, forObject,
}) => (
  <Container>
    <Name>{name}</Name>
    <Value
      name={`${forObject}.${position}.quantity`}
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
