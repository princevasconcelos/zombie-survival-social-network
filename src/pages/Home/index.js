import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
// import Main from '../../components/Main';

class Home extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.onLocationGranted, this.onLocationRejected);
  }

  onLocationGranted = ({ coords: { latitude, longitude } }) => console.log('permitiu', latitude, longitude);

  onLocationRejected = () => console.log('n permitiu');

  render() {
    const userId = '32jdjdh2u2i2e22o3j';
    return (
      <>
        <Header />
        {/* <Main /> */}
        <Link to={`/survivor/${userId}`}>editar</Link>
      </>
    );
  }
}

export default Home;
