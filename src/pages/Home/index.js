import React from 'react';

import Header from '../../components/Header';

class Home extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.onLocationGranted, this.onLocationRejected);
  }

  onLocationGranted = ({ coords: { latitude, longitude } }) => console.log('permitiu', latitude, longitude);

  onLocationRejected = () => console.log('n permitiu');

  render() {
    return (
      <>
        <Header />
        <span>Home</span>
      </>
    );
  }
}

export default Home;
