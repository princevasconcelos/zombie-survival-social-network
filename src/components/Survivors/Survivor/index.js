import React from 'react';
import t from 'prop-types';

import Link from '../../Link';

import {
  Item, Row, Name, Button, Bio, Symbol,
} from './styles';

const propTypes = {
  name: t.string,
  age: t.number,
  gender: t.string,
  isInfected: t.bool,
};

const defaultProps = {
  name: '',
  age: 0,
  gender: '',
  isInfected: false,
};

const getInfectedItem = name => (
  <Item isInfected>
    <Symbol>&#9760;</Symbol>
    <Name>{name}</Name>
  </Item>
);

const Survivor = ({
  name, age, gender, isInfected,
}) => {
  if (isInfected) return getInfectedItem(name);
  return (
    <Item isInfected={false}>
      <Link to="/survivor/2324124123" hoverEffect={false}>
        <Row>
          {gender === 'M' ? <i>&#9794;</i> : <i>&#9792;</i>}
          <Bio>{'Level '.concat(age)}</Bio>
        </Row>
        <Name>{name}</Name>
      </Link>
      <Button>Report</Button>
    </Item>
  );
};

Survivor.propTypes = propTypes;
Survivor.defaultProps = defaultProps;

export default Survivor;
