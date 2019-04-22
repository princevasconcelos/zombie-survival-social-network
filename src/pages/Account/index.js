import React from 'react';
import t from 'prop-types';

import API from '../../services/api';

import { Container, Header, Floating } from './styles';

import Profile from '../../components/Profile';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Maps from '../../components/Maps';
import Box from '../../components/Box';

class Account extends React.Component {
  state = {
    id: '',
    userLocation: {},
  };

  static propTypes = {
    match: t.shape({
      params: t.objectOf(t.string),
    }).isRequired,
    history: t.shape({
      history: t.func,
    }).isRequired,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    if (id) this.setState({ id });
  }

  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(this.onLocationGranted, this.onLocationRejected);
  };

  onLocationGranted = ({ coords: { latitude, longitude } }) => this.setState({ userLocation: { lat: latitude, lng: longitude } });

  onLocationRejected = () => console.log('n permitiu');

  onMarkerChangeHandler = (mapProps, map, coords) => {
    const { latLng } = coords;
    this.setState({ userLocation: { lat: latLng.lat(), lng: latLng.lng() } });
  };

  onMapClickHandler = (mapProps, map, coords) => {
    const { userLocation } = this.state;
    if (userLocation.lat && userLocation.lng) return;
    const { latLng } = coords;
    this.setState({ userLocation: { lat: latLng.lat(), lng: latLng.lng() } });
  };

  handleClose = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleSubmit = (formValues) => {
    const {
      age, genre, items, name,
    } = formValues;
    const { userLocation } = this.state;

    const validItems = Object.entries(items)
      .filter(e => e[1])
      .map(e => e.join(':'))
      .join(';');

    // const locationFormat = `Point(${location.lat} ${location.lng})'`;
    // console.log(location);
    const formData = new FormData();

    formData.append('person[name]', name);
    formData.append('person[age]', +age);
    formData.append('person[gender]', genre);
    // formData.append('person[lonlat]', 'Point(-0000.111 1111.000)');
    formData.append('items', validItems);

    // API.postSurvivor(formData);
  };

  render() {
    const { id, userLocation } = this.state;
    return (
      <Container>
        <Header>
          {id ? 'Edit profile' : 'New account '}
          <Floating onClick={this.handleClose}>
            <Icon name="close" />
          </Floating>
        </Header>
        <Button color="blue" type="submit" form="profile-form">
          Save
        </Button>
        <Profile boxTitle="Choose your items" onHandleSubmit={this.handleSubmit} />
        <Box title="Select your current location" withBorder>
          <Maps
            onReady={this.getUserLocation}
            onMarkerDragEnd={this.onMarkerChangeHandler}
            markers={[userLocation]}
            onMapClick={this.onMapClickHandler}
          />
        </Box>
      </Container>
    );
  }
}

export default Account;
