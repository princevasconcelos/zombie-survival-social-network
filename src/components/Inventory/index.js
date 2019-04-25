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
}) => {
  const waterIndex = items.findIndex(e => e.item.name === 'Water');
  const foodIndex = items.findIndex(e => e.item.name === 'Food');
  const medicationIndex = items.findIndex(e => e.item.name === 'Medication');
  const ammunitionIndex = items.findIndex(e => e.item.name === 'Ammunition');

  return (
    <Box title={boxTitle} withBorder inverted={inverted}>
      <Item
        name="Water"
        color="Water"
        forObject={forObject}
        position={waterIndex}
        value={(items[waterIndex] || []).quantity}
        handleChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
      />
      <Item
        name="Food"
        color="Food"
        forObject={forObject}
        position={foodIndex}
        value={(items[foodIndex] || []).quantity}
        handleChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
      />
      <Item
        name="Medication"
        color="Medication"
        forObject={forObject}
        position={medicationIndex}
        value={(items[medicationIndex] || []).quantity}
        handleChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
      />
      <Item
        name="Ammunition"
        color="Ammunition"
        forObject={forObject}
        position={ammunitionIndex}
        value={(items[ammunitionIndex] || []).quantity}
        onBlur={onBlur}
        handleChange={onChange}
        readOnly={readOnly}
      />
    </Box>
  );
};

Inventory.propTypes = propTypes;
Inventory.defaultProps = defaultProps;

export default Inventory;
