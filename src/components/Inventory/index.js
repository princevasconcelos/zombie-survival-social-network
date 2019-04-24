import React from 'react';
import t from 'prop-types';

import Box from '../Box';
import Item from './Item';

const propTypes = {
  items: t.arrayOf(t.object).isRequired,
  onChange: t.func,
  onBlur: t.func,
  readOnly: t.bool,
  boxTitle: t.string,
  inverted: t.bool,
};

const defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  readOnly: false,
  boxTitle: '',
  inverted: false,
};

const Inventory = ({
  items, onChange, onBlur, readOnly, boxTitle, inverted,
}) => (
  <Box title={boxTitle} withBorder inverted={inverted}>
    <Item
      name="Water"
      color="Water"
      position={0}
      value={items[0].quantity}
      handleChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
    <Item
      name="Food"
      color="Food"
      position={1}
      value={items[1].quantity}
      handleChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
    <Item
      name="Medication"
      color="Medication"
      position={2}
      value={items[2].quantity}
      handleChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
    <Item
      name="Ammunition"
      color="Ammunition"
      position={3}
      value={items[3].quantity}
      onBlur={onBlur}
      handleChange={onChange}
      readOnly={readOnly}
    />
  </Box>
);

Inventory.propTypes = propTypes;
Inventory.defaultProps = defaultProps;

export default Inventory;
