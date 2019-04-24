import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';

import API from '../../services/api';

import { storeReportedSurvivor } from '../../stores/reducers/user';

import Loading from '../Loading';
import Error from '../Error';

import { Container, List } from './styles';
import Item from './Survivor';

const propTypes = {
  storeReportedSurvivor: t.func.isRequired,
  survivors: t.arrayOf(t.object).isRequired,
  error: t.oneOfType([t.bool, t.string]),
  user: t.shape({
    data: t.object,
  }).isRequired,
};

const defaultProps = {
  error: '',
};

const Survivors = ({
  storeReportedSurvivor,
  survivors,
  error,
  user: {
    data: { id, reports },
  },
}) => {
  if (survivors.length === 0) return <Loading />;
  if (error) return <Error msg="Survivors list is not avaliable" />;

  const reportSurvivor = (survivorId) => {
    const formData = new FormData();
    formData.append('infected', survivorId);
    storeReportedSurvivor(survivorId);
    API.reportSurvivor(formData, id);
  };

  return (
    <Container>
      <List>
        {survivors.length > 0
          && survivors.map((survivor) => {
            const currentId = survivor.location.split('/').pop();
            return (
              <Item
                key={survivor.location}
                id={currentId}
                name={survivor.name}
                age={survivor.age}
                isInfected={survivor['infected?']}
                isReported={reports.includes(currentId)}
                onReportClick={reportSurvivor}
              />
            );
          })}
      </List>
    </Container>
  );
};

Survivors.propTypes = propTypes;
Survivors.defaultProps = defaultProps;

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(
  mapStateToProps,
  { storeReportedSurvivor },
)(Survivors);
