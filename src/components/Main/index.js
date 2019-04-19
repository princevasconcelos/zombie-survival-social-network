import React from 'react';

import API from '../../services/api';

import StyledMain from './styles';

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
    console.log(reports);
    console.log(reportError);
    console.log(survivors);
    console.log(survivorError);
    return (
      <StyledMain>
        `Main
        {reports.length}
`
      </StyledMain>
    );
  }
}

export default Main;
