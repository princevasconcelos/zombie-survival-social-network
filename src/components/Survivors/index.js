import React from 'react';
import t from 'prop-types';

import Loading from '../Loading';
import Error from '../Error';

import Container from './styles';

const propTypes = {
  data: t.arrayOf(t.object).isRequired,
  error: t.oneOfType([t.bool, t.string]),
};

const defaultProps = {
  error: 'Survivors list is not avaliable',
};

const Survivors = ({ data, error }) => {
  if (data.length === 0) return <Loading />;
  if (error) return <Error msg={error} />;
  return (
    <Container>
      <ul>
        {data.length > 0 && data.map(survivor => <li key={survivor.location}>{survivor.name}</li>)}
      </ul>
    </Container>
  );
};

Survivors.propTypes = propTypes;
Survivors.defaultProps = defaultProps;

export default Survivors;
