import React from 'react';
import t from 'prop-types';

import ReportList from './styles';
import percentageFormat from '../../utils/functions';

import Report from './Report';
import Loading from '../Loading';

const propTypes = {
  data: t.arrayOf(t.object).isRequired,
  error: t.bool,
};

const defaultProps = {
  error: false,
};

const Reports = ({ data, error }) => {
  if (!data) return <Loading />;
  if (error) return <span>Error</span>;
  const [infected, nonInfected, itemsPerPerson, pointsLost] = data;
  return (
    <ReportList>
      {infected && (
        <Report label={infected.description}>{percentageFormat(infected.average_infected)}</Report>
      )}
      {nonInfected && (
        <Report label={nonInfected.description}>
          {percentageFormat(nonInfected.average_healthy)}
        </Report>
      )}
      {itemsPerPerson && (
        <>
          <Report label={itemsPerPerson.description}>
            {itemsPerPerson.average_items_quantity_per_person.toFixed()}
          </Report>
          <Report label={itemsPerPerson.description}>
            {itemsPerPerson.average_items_quantity_per_healthy_person.toFixed()}
          </Report>
        </>
      )}
      {pointsLost && (
        <Report label={pointsLost.description}>{pointsLost.total_points_lost.toFixed()}</Report>
      )}
    </ReportList>
  );
};

Reports.propTypes = propTypes;
Reports.defaultProps = defaultProps;

export default Reports;
