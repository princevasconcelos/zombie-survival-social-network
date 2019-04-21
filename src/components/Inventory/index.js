import React from 'react';

// import StyledInventory from './styles';
import Box from '../Box';
import Item from './Item';

const Inventory = ({ items }) => (
  <Box title="Inventory" withBorder>
    <Item name="Water" value="4" />
    <Item name="Food" value="3" />
    <Item name="Medication" value="1" />
    <Item name="Ammunition" value="120" />
  </Box>
);

export default Inventory;
