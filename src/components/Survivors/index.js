import React from 'react';
import t from 'prop-types';

import Loading from '../Loading';
import Error from '../Error';

import { Container, List } from './styles';
import Item from './Survivor';

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
      <List>
        {data.length > 0
          && data.map(survivor => (
            <Item
              key={survivor.location}
              name={survivor.name}
              age={survivor.age}
              gender={survivor.gender}
              isInfected={survivor['infected?']}
            />
          ))}
      </List>
    </Container>
  );
};

Survivors.propTypes = propTypes;
Survivors.defaultProps = defaultProps;

export default Survivors;
