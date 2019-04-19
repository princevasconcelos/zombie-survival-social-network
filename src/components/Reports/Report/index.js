import React from 'react';
import t from 'prop-types';

import { Item, Label, Value } from './styles';

const propTypes = {
  children: t.string.isRequired,
  label: t.string.isRequired,
};

const Report = ({ children, label }) => (
  <Item>
    <Label>{label}</Label>
    <Value>{children}</Value>
  </Item>
);

Report.propTypes = propTypes;

export default Report;
