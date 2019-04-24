import React from 'react';
import t from 'prop-types';

import Link from '../../Link';
import Button from '../../Button';

import {
  Item, Name, Bio, Symbol,
} from './styles';

const propTypes = {
  name: t.string,
  age: t.number,
  isInfected: t.bool,
  onReportClick: t.func.isRequired,
  id: t.string,
};

const defaultProps = {
  name: '',
  age: 0,
  isInfected: false,
  id: '',
};

const getInfectedItem = name => (
  <Item isInfected>
    <Symbol>&#9760;</Symbol>
    <Name>{name}</Name>
  </Item>
);

const Survivor = ({
  name, age, isInfected, onReportClick, id,
}) => {
  if (isInfected) return getInfectedItem(name);
  return (
    <Item isInfected={false}>
      <Link to="/survivor/2324124123" hoverEffect={false} full>
        <Bio>
          <b>Level</b>
          <span>{`${age}`}</span>
        </Bio>

        <Name>{name}</Name>
      </Link>
      <Button onClick={() => onReportClick(id)} color="red">
        Report
      </Button>
    </Item>
  );
};

Survivor.propTypes = propTypes;
Survivor.defaultProps = defaultProps;

export default Survivor;
