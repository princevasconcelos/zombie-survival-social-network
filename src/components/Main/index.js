import React from 'react';

import API from '../../services/api';

import StyledMain from './styles';

import Reports from '../Reports';
import Box from '../Box';

class Main extends React.Component {
  state = {
    reports: [],
    reportError: null,
    survivors: [],
    survivorError: null,
  };

  componentDidMount() {
    this.storeReports();
    this.storeSurvivors();
  }

  storeReports = async () => {
    const reports = await API.getReports();
    if (!reports || reports.error) return;
    Promise.all(reports.map(async report => API.get(report).then(r => r.report)))
      .then(data => this.setState({ reports: data }))
      .catch(error => this.setState({ reportError: error }));
  };

  storeSurvivors = async () => {
    const survivors = await API.getSurvivors();
    if (!survivors || survivors.error) return this.setState({ survivorError: true });
    return this.setState({ survivors });
  };

  render() {
    const {
      reports, reportError, survivors, survivorError,
    } = this.state;
    return (
      <StyledMain>
        <Box title="My Profile">
          <span>legal</span>
        </Box>
      </StyledMain>
    );
  }
}

export default Main;
