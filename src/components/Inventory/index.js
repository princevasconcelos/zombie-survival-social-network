import React from 'react';
import t from 'prop-types';

import Box from '../Box';
import Item from './Item';

const propTypes = {
  items: t.objectOf(t.string).isRequired,
  onChange: t.func,
  onBlur: t.func,
  readOnly: t.bool,
  boxTitle: t.string,
};

const defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  readOnly: false,
  boxTitle: '',
};

const Inventory = ({
  items, onChange, onBlur, readOnly, boxTitle,
}) => (
  <Box title={boxTitle} withBorder>
    <Item
      name="Water"
      color="Water"
      value={items.Water}
      handleChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
    <Item
      name="Food"
      color="Food"
      value={items.Food}
      handleChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
    <Item
      name="Medication"
      color="Medication"
      value={items.Medication}
      handleChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
    <Item
      name="Ammunition"
      color="Ammunition"
      value={items.Ammunition}
      onBlur={onBlur}
      handleChange={onChange}
      readOnly={readOnly}
    />
  </Box>
);

Inventory.propTypes = propTypes;
Inventory.defaultProps = defaultProps;

export default Inventory;
