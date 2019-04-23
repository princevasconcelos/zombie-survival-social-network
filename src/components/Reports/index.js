import React from 'react';
import t from 'prop-types';

import ReportList from './styles';
import percentageFormat from '../../utils/functions';

import Report from './Report';
import Loading from '../Loading';
import Error from '../Error';

const propTypes = {
  data: t.arrayOf(t.object).isRequired,
  error: t.bool,
};

const defaultProps = {
  error: false,
};

const Reports = ({ data, error }) => {
  if (data.length === 0) return <Loading />;
  if (error) return <Error msg="Cant access reports right now" />;
  const [infected, nonInfected, itemsPerPerson, pointsLost] = data;
  return (
    <ReportList>
      <Report label="Infected">{percentageFormat(infected.average_infected)}</Report>
      <Report label="Non Infected">{percentageFormat(nonInfected.average_healthy)}</Report>
      <>
        <Report label="People Items">
          {itemsPerPerson.average_items_quantity_per_person.toFixed()}
        </Report>
        <Report label="Health People Items">
          {itemsPerPerson.average_items_quantity_per_healthy_person.toFixed()}
        </Report>
      </>
      <Report label="Infected Points">{pointsLost.total_points_lost.toFixed()}</Report>
    </ReportList>
  );
};

Reports.propTypes = propTypes;
Reports.defaultProps = defaultProps;

export default Reports;
