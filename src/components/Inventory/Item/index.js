import React from 'react';
import t from 'prop-types';

import { Container, Name, Value } from './styles';

const propTypes = {
  name: t.string.isRequired,
  value: t.string.isRequired,
};

const Item = ({ name, value }) => (
  <Container>
    <Name>{name}</Name>
    <Value>{value}</Value>
  </Container>
);

Item.propTypes = propTypes;

export default Item;
