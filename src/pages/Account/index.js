import React from 'react';
import { connect } from 'react-redux';
import t from 'prop-types';

import {
  storeLocation,
  requestCreateUser,
  requestUserSuccess,
  requestUserFailed,
} from '../../stores/reducers/user';

import API from '../../services/api';

import { Container, Header, Floating } from './styles';

import Profile from '../../components/Profile';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Maps from '../../components/Maps';
import Box from '../../components/Box';
import Loading from '../../components/Loading';

class Account extends React.Component {
  state = {
    id: '',
  };

  static propTypes = {
    user: t.shape({
      data: t.object,
      error: t.objectOf(t.array),
      loading: t.bool,
    }).isRequired,
    storeLocation: t.func.isRequired,
    requestCreateUser: t.func.isRequired,
    requestUserSuccess: t.func.isRequired,
    requestUserFailed: t.func.isRequired,

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

  onLocationGranted = ({ coords: { latitude, longitude } }) => {
    const { storeLocation } = this.props;
    storeLocation(`POINT (${latitude} ${longitude})`);
  };

  onLocationRejected = () => this.getUserLocation();

  onMarkerChangeHandler = (mapProps, map, coords) => {
    const { storeLocation } = this.props;
    const { latLng } = coords;
    storeLocation(`POINT (${latLng.lat()} ${latLng.lng()})`);
  };

  onMapClickHandler = (mapProps, map, { latLng }) => {
    const {
      user: {
        data: { lonlat },
      },
      storeLocation,
    } = this.props;
    if (lonlat) return;
    storeLocation(`POINT (${latLng.lat()} ${latLng.lng()})`);
  };

  handleClose = () => {
    const { history } = this.props;
    history.goBack();
  };

  formDataItemsFormat = items => Object.entries(items)
    .filter(e => e[1])
    .map(e => e.join(':'))
    .join(';');

  handleSubmit = async ({
    age, genre, items, name,
  }) => {
    const {
      requestCreateUser,
      user: {
        data: { lonlat },
      },
    } = this.props;

    requestCreateUser();

    const itemsFormData = this.formDataItemsFormat(items);

    const formData = new FormData();
    formData.append('person[name]', name);
    formData.append('person[age]', +age);
    formData.append('person[gender]', genre);
    formData.append('person[lonlat]', lonlat);
    formData.append('items', itemsFormData);

    const response = await API.postSurvivor(formData);

    this.handleResponse(response);
  };

  handleResponse = (response) => {
    const { history, requestUserSuccess, requestUserFailed } = this.props;
    const { id } = response;

    if (!id) return requestUserFailed(response);
    response.items = [{ Water: 3 }, { Food: 4 }];
    requestUserSuccess(response);
    return history.push('/');
  };

  render() {
    const {
      user: {
        data: { lonlat },
        error,
        loading,
      },
    } = this.props;
    const { id } = this.state;
    return (
      <Container>
        <Header>
          {id ? 'Edit profile' : 'New account '}
          <Floating onClick={this.handleClose} isLoading={loading}>
            <Icon name="close" />
          </Floating>
        </Header>

        {loading ? (
          <Loading />
        ) : (
          <Button color="tertiary" type="submit" form="profile-form">
            Save
          </Button>
        )}

        <Profile
          boxTitle="Choose your items"
          onHandleSubmit={this.handleSubmit}
          apiErrors={error}
        />

        <Box title="Select your current location" withBorder>
          <Maps
            onReady={this.getUserLocation}
            onMarkerDragEnd={this.onMarkerChangeHandler}
            markers={[lonlat]}
            onMapClick={this.onMapClickHandler}
          />
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(
  mapStateToProps,
  {
    storeLocation,
    requestCreateUser,
    requestUserSuccess,
    requestUserFailed,
  },
)(Account);
