import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';

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

import { storeItems } from '../../stores/reducers/user';

import API from '../../services/api';

import Reports from '../../components/Reports';
import Profile from '../../components/Profile';
import Box from '../../components/Box';
import Survivors from '../../components/Survivors';
import Maps from '../../components/Maps';

import Header from './Header';
import StyledMain from './styles';

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
    storeItems: t.func.isRequired,
  };

  componentDidMount() {
    this.fetchReports();
    this.fetchSurvivors();
    this.fetchItems();
  }

  fetchReports = async () => {
    const { requestGetReports, requestReportSuccess, requestReportFailed } = this.props;
    requestGetReports();
    const reports = await API.getReports();
    if (!reports) return requestReportFailed();
    return Promise.all(reports.map(async report => API.get(report).then(r => r.report)))
      .then(data => requestReportSuccess(data))
      .catch(() => requestReportFailed());
  };

  fetchSurvivors = async () => {
    const { requestGetSurvivors, requestSurvivorFailed, requestSurvivorSuccess } = this.props;
    requestGetSurvivors();
    const survivors = await API.getSurvivors();
    if (!survivors) return requestSurvivorFailed();
    return requestSurvivorSuccess(survivors);
  };

  fetchItems = async () => {
    const {
      storeItems,
      user: {
        data: { id },
      },
    } = this.props;
    if (!id) return;
    const items = await API.getItems(id);
    if (!items) return;
    storeItems(items);
  };

  mapSurvivorsLocation = survivors => survivors.data.map(e => e.lonlat).filter(e => !!e);

  render() {
    const { user, reports, survivors } = this.props;

    const markers = this.mapSurvivorsLocation(survivors);

    return (
      <>
        <Header />
        <StyledMain>
          <Reports data={reports.data} error={reports.error} />

          {user.data.id && (
            <Box title="Profile" icon="edit" link="/account">
              <Profile readOnly data={user.data} boxTitle="Current inventory" />
            </Box>
          )}

          <Box
            title={user.data.id ? 'Find survivors near you' : 'All Survivors Registered'}
            withBorder
          >
            <Maps readOnly markers={markers} />
          </Box>

          {user.data.id && (
            <Box title="Report or Trade" margin="70px 0 0 0">
              <Survivors survivors={survivors.data} error={survivors.error} />
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
    storeItems,
  },
)(Home);
