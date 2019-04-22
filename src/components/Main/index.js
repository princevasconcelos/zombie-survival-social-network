import React from 'react';

import API from '../../services/api';

import StyledMain from './styles';

import Reports from '../Reports';
import Profile from '../Profile';
import Box from '../Box';
import Survivors from '../Survivors';
import Maps from '../Maps';

class Main extends React.Component {
  state = {
    reports: [],
    reportError: null,
    survivors: [],
    survivorError: null,
    markers: [],
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
    const markers = await this.getSurvivorsLocation(survivors);
    return this.isComponentMounted && this.setState({ survivors, markers });
  };

  getSurvivorsLocation = survivors => new Promise((resolve, reject) => {
    const markers = survivors
      .map(e => e.lonlat)
      .filter(e => !!e)
      .map(e => e.replace(/[a-zA-Z()]|\s\(/g, ''))
      .map((e) => {
        const latlon = e.split(' ');
        return { lat: latlon[1], lng: latlon[0] };
      });
    if (!markers) return reject(new Error());
    return resolve(markers);
  });

  render() {
    const {
      reports, reportError, survivors, survivorError, markers,
    } = this.state;
    return (
      <StyledMain>
        {/* <Reports /> */}
        <Box title="Profile" icon="edit" link="/survivor/42d2dh23">
          <Profile boxTitle="Current inventory" readOnly />
        </Box>
        <Box title="Find survivors near you" withBorder>
          <Maps markers={markers} readOnly />
        </Box>
        <Box title="Report or Trade">
          <Survivors data={survivors} error={survivorError} />
        </Box>
      </StyledMain>
    );
  }
}

export default Main;
