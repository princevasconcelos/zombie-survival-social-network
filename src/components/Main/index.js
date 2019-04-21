import React from 'react';

import API from '../../services/api';

import StyledMain from './styles';

import Reports from '../Reports';
import Profile from '../Profile';
import Box from '../Box';
import Survivors from '../Survivors';

class Main extends React.Component {
  state = {
    reports: [],
    reportError: null,
    survivors: [],
    survivorError: null,
  };

  isComponentMounted = false;

  componentDidMount() {
    this.isComponentMounted = true;
    this.storeReports();
    this.storeSurvivors();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  storeReports = async () => {
    const reports = await API.getReports();
    if (!reports || reports.error) return;
    Promise.all(reports.map(async report => API.get(report).then(r => r.report)))
      .then(data => this.isComponentMounted && this.setState({ reports: data }))
      .catch(error => this.isComponentMounted && this.setState({ reportError: error }));
  };

  storeSurvivors = async () => {
    const survivors = await API.getSurvivors();
    if (!survivors || survivors.error) return this.isComponentMounted && this.setState({ survivorError: true });
    return this.isComponentMounted && this.setState({ survivors });
  };

  render() {
    const {
      reports, reportError, survivors, survivorError,
    } = this.state;
    return (
      <StyledMain>
        {/* <Reports /> */}
        <Box title="My Profile" icon="edit" link="/survivor/42d2dh23">
          <Profile readOnly />
        </Box>
        <Box title="Survivors">
          <Survivors data={survivors} error={survivorError} />
        </Box>
      </StyledMain>
    );
  }
}

export default Main;
