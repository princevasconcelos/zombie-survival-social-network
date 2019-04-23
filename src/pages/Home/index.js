import React from 'react';
import { connect } from 'react-redux';
import t from 'prop-types';

import {
  requestGetReports,
  requestReportSuccess,
  requestReportFailed,
} from '../../stores/reducers/report';

import {
  requestGetSurvivors,
  requestSurvivorFailed,
  requestSurvivorSuccess,
} from '../../stores/reducers/survivor';

import API from '../../services/api';

import StyledMain from './styles';

import Reports from '../../components/Reports';
import Profile from '../../components/Profile';
import Box from '../../components/Box';
import Survivors from '../../components/Survivors';
import Maps from '../../components/Maps';

import Header from './Header';

class Home extends React.Component {
  static propTypes = {
    user: t.shape({
      data: t.object,
    }).isRequired,
    reports: t.shape({
      data: t.array,
      error: t.bool,
    }).isRequired,
    survivors: t.shape({
      data: t.array,
      error: t.bool,
    }).isRequired,

    requestGetReports: t.func.isRequired,
    requestReportSuccess: t.func.isRequired,
    requestReportFailed: t.func.isRequired,
    requestGetSurvivors: t.func.isRequired,
    requestSurvivorFailed: t.func.isRequired,
    requestSurvivorSuccess: t.func.isRequired,
  };

  componentDidMount() {
    const { reports, survivors } = this.props;
    if (reports.data.length === 0) this.fetchReports();
    if (survivors.data.length === 0) this.fetchSurvivors();
  }

  fetchReports = async () => {
    const { requestGetReports, requestReportSuccess, requestReportFailed } = this.props;
    requestGetReports();
    const reports = await API.getReports();
    if (!reports || reports.error) return requestReportFailed(true);
    return Promise.all(reports.map(async report => API.get(report).then(r => r.report)))
      .then(data => requestReportSuccess(data))
      .catch(error => requestReportFailed(error));
  };

  fetchSurvivors = async () => {
    const { requestGetSurvivors, requestSurvivorFailed, requestSurvivorSuccess } = this.props;
    requestGetSurvivors();
    const survivors = await API.getSurvivors();
    if (!survivors || survivors.error) return requestSurvivorFailed(true);
    return requestSurvivorSuccess(survivors);
  };

  render() {
    const {
      user: { data },
      reports,
      survivors,
    } = this.props;
    return (
      <>
        <Header />
        <StyledMain>
          <Reports data={reports.data} error={reports.error} />

          {data.id && (
            <Box title="Profile" icon="edit" link="/account">
              <Profile data={data} boxTitle="Current inventory" readOnly />
            </Box>
          )}

          <Box title={data.id ? 'Find survivors near you' : 'All Survivors Registered'} withBorder>
            <Maps readOnly markers={survivors.data.map(e => e.lonlat).filter(e => !!e)} />
          </Box>

          {data.id && (
            <Box title="Report or Trade" margin="70px 0 0 0">
              <Survivors data={survivors.data} error={survivors.error} userId={data.id} />
            </Box>
          )}
        </StyledMain>
      </>
    );
  }
}

const mapStateToProps = ({ user, survivors, reports }) => ({
  user,
  survivors,
  reports,
});

export default connect(
  mapStateToProps,
  {
    requestGetReports,
    requestReportSuccess,
    requestReportFailed,
    requestGetSurvivors,
    requestSurvivorFailed,
    requestSurvivorSuccess,
  },
)(Home);
