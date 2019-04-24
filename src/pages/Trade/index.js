import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { Container, Score } from './styles';

import Inventory from '../../components/Inventory';

const arturItems = [
  {
    quantity: 0,
  },
  {
    quantity: 0,
  },
  {
    quantity: 0,
  },
  {
    quantity: 0,
  },
];

const propTypes = {
  user: t.shape({
    data: t.shape({
      items: t.arrayOf(t.object),
    }),
  }).isRequired,
};

const Trade = ({
  user: {
    data: { items },
  },
}) => (
  <Formik
    initialValues={{
      offerItems: items,
      desiredItems: arturItems,
    }}
  >
    {({ values, handleChange }) => (
      <Container>
        <div style={{ width: '100%' }}>
          <Inventory
            items={values.offerItems}
            onChange={handleChange}
            forObject="offerItems"
            boxTitle="Your items"
          />
        </div>

        <Score>
          <span>POINTS: 13</span>
          <span>POINTS: 12</span>
        </Score>

        <div style={{ width: '100%' }}>
          <Inventory
            inverted
            items={values.desiredItems}
            onChange={handleChange}
            forObject="desiredItems"
            boxTitle="Artur items"
          />
        </div>
      </Container>
    )}
  </Formik>
);

Trade.propTypes = propTypes;

const mapStateToProsp = ({ user }) => ({
  user,
});

export default connect(mapStateToProsp)(Trade);
