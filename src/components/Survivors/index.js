import React from 'react';
import t from 'prop-types';

import API from '../../services/api';

import Loading from '../Loading';
import Error from '../Error';

import { Container, List } from './styles';
import Item from './Survivor';

const propTypes = {
  data: t.arrayOf(t.object).isRequired,
  error: t.oneOfType([t.bool, t.string]),
  userId: t.string,
};

const defaultProps = {
  error: 'Survivors list is not avaliable',
  userId: '',
};

const Survivors = ({ data, error, userId }) => {
  if (data.length === 0) return <Loading />;
  if (error) return <Error msg={error} />;

  const reportSurvivor = (id) => {
    const formData = new FormData();
    formData.append('infected', id);
    API.reportSurvivor(formData, userId);
  };

  return (
    <Container>
      <List>
        {data.length > 0
          && data.map(survivor => (
            <Item
              key={survivor.location}
              id={survivor.location.split('/').pop()}
              name={survivor.name}
              age={survivor.age}
              isInfected={survivor['infected?']}
              onReportClick={reportSurvivor}
            />
          ))}
      </List>
    </Container>
  );
};

Survivors.propTypes = propTypes;
Survivors.defaultProps = defaultProps;

export default Survivors;
