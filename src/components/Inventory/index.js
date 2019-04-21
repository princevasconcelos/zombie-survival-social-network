import React from 'react';
import t from 'prop-types';

import Box from '../Box';
import Item from './Item';

const propTypes = {
  items: t.objectOf(t.string).isRequired,
  onChange: t.func,
  readOnly: t.bool,
};

const defaultProps = {
  onChange: () => {},
  readOnly: false,
};

const Inventory = ({ items, onChange, readOnly }) => (
  <Box title="Inventory" withBorder>
    <Item name="Water" value={items.Water} handleChange={onChange} readOnly={readOnly} />
    <Item name="Food" value={items.Food} handleChange={onChange} readOnly={readOnly} />
    <Item name="Medication" value={items.Medication} handleChange={onChange} readOnly={readOnly} />
    <Item name="Ammunition" value={items.Ammunition} handleChange={onChange} readOnly={readOnly} />
  </Box>
);

Inventory.propTypes = propTypes;
Inventory.defaultProps = defaultProps;

export default Inventory;
