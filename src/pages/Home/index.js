import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.onLocationGranted, this.onLocationRejected);
  }

  onLocationGranted = ({ coords: { latitude, longitude } }) => console.log('permitiu', latitude, longitude);

  onLocationRejected = () => console.log('n permitiu');

  render() {
    return <span>Home</span>;
  }
}

export default Home;
