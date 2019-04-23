import React from 'react';
import t from 'prop-types';
import { withRouter } from 'react-router-dom';

import API from '../../services/api';

import StyledMain from './styles';

import Reports from '../../components/Reports';
import Profile from '../../components/Profile';
import Box from '../../components/Box';
import Survivors from '../../components/Survivors';
import Maps from '../../components/Maps';

import Header from './Header';

class Home extends React.Component {
  state = {
    user: null,
    reports: [],
    reportError: null,
    survivors: [],
    survivorError: null,
    markers: [],
  };

  static propTypes = {
    location: t.objectOf(t.string).isRequired,
  };

  isComponentMounted = false;

  componentDidMount() {
    this.isComponentMounted = true;
    const { location } = this.props;

    if (location.search) {
      const params = new URLSearchParams(location.search);
      const id = params.get('id');
      const name = params.get('name');
      const age = params.get('age');
      const lonlat = params.get('lonlat');
      const items = params.get('items');

      if (id) {
        this.setState({
          user: {
            id,
            name,
            age,
            lonlat,
            items,
          },
        });
      }
    }
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
      reports, reportError, survivors, survivorError, markers, user,
    } = this.state;
    return (
      <>
        <Header />
        <StyledMain>
          <Reports data={reports} error={reportError} />

          {user && (
            <Box title="Profile" icon="edit" link="/survivor/42d2dh23">
              <Profile boxTitle="Current inventory" readOnly />
            </Box>
          )}

          <Box title={user ? 'Find survivors near you' : 'All Survivors Registered'} withBorder>
            <Maps markers={markers} readOnly />
          </Box>

          {user && (
            <Box title="Report or Trade">
              <Survivors data={survivors} error={survivorError} />
            </Box>
          )}
        </StyledMain>
      </>
    );
  }
}

export default withRouter(Home);
