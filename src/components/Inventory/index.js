import React from 'react';
import t from 'prop-types';

import Box from '../Box';
import Item from './Item';

const propTypes = {
  items: t.objectOf(t.string).isRequired,
  onChange: t.func,
  readOnly: t.bool,
  boxTitle: t.string,
};

const defaultProps = {
  onChange: () => {},
  readOnly: false,
  boxTitle: '',
};

const Inventory = ({
  items, onChange, readOnly, boxTitle,
}) => (
  <Box title={boxTitle} withBorder>
    {console.log(boxTitle)}
    <Item
      name="Water"
      color="Water"
      value={items.Water}
      handleChange={onChange}
      readOnly={readOnly}
    />
    <Item name="Food" color="Food" value={items.Food} handleChange={onChange} readOnly={readOnly} />
    <Item
      name="Medication"
      color="Medication"
      value={items.Medication}
      handleChange={onChange}
      readOnly={readOnly}
    />
    <Item
      name="Ammunition"
      color="Ammunition"
      value={items.Ammunition}
      handleChange={onChange}
      readOnly={readOnly}
    />
  </Box>
);

Inventory.propTypes = propTypes;
Inventory.defaultProps = defaultProps;

export default Inventory;
