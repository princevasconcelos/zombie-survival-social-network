import React from 'react';
import t from 'prop-types';

import Box from '../Box';
import Item from './Item';

const propTypes = {
  onChange: t.func,
  onBlur: t.func,
  items: t.arrayOf(t.object).isRequired,

  boxTitle: t.string,
  forObject: t.string.isRequired,
  readOnly: t.bool,
  inverted: t.bool,
};

const defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  boxTitle: '',
  readOnly: false,
  inverted: false,
};

const Inventory = ({
  items, onChange, onBlur, readOnly, boxTitle, inverted, forObject,
}) => (
  <Box title={boxTitle} withBorder inverted={inverted}>
    <Item
      name="Water"
      color="Water"
      forObject={forObject}
      position={0}
      value={(items[0] || []).quantity}
      handleChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
    <Item
      name="Food"
      color="Food"
      forObject={forObject}
      position={1}
      value={(items[1] || []).quantity}
      handleChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
    <Item
      name="Medication"
      color="Medication"
      forObject={forObject}
      position={2}
      value={(items[2] || []).quantity}
      handleChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
    <Item
      name="Ammunition"
      color="Ammunition"
      forObject={forObject}
      position={3}
      value={(items[3] || []).quantity}
      onBlur={onBlur}
      handleChange={onChange}
      readOnly={readOnly}
    />
  </Box>
);

Inventory.propTypes = propTypes;
Inventory.defaultProps = defaultProps;

export default Inventory;
