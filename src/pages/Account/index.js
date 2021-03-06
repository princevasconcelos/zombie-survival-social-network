import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';

import {
  storeLocation,
  storeItems,
  requestCreateUser,
  requestUserSuccess,
  requestUserFailed,
} from '../../stores/reducers/user';

import API from '../../services/api';

import Profile from '../../components/Profile';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Maps from '../../components/Maps';
import Box from '../../components/Box';
import Loading from '../../components/Loading';

import { Container, Header, Floating } from './styles';

class Account extends React.Component {
  state = {
    isEditing: false,
  };

  static propTypes = {
    requestCreateUser: t.func.isRequired,
    requestUserSuccess: t.func.isRequired,
    requestUserFailed: t.func.isRequired,
    storeLocation: t.func.isRequired,
    storeItems: t.func.isRequired,

    user: t.shape({
      data: t.object,
      error: t.objectOf(t.array),
      loading: t.bool,
    }).isRequired,

    match: t.shape({
      params: t.objectOf(t.string),
    }).isRequired,

    history: t.shape({
      history: t.func,
    }).isRequired,
  };

  componentDidMount() {
    const {
      match: { path },
    } = this.props;

    if (path === '/account') this.setState({ isEditing: true });
  }

  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(this.onLocationGranted, this.onLocationRejected);
  };

  onLocationGranted = ({ coords: { latitude, longitude } }) => {
    const { storeLocation } = this.props;
    storeLocation(`POINT (${latitude} ${longitude})`);
  };

  onLocationRejected = () => {};

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

  parseItemsFormData = items => items
    .filter(e => e.quantity > 0)
    .reduce((prev, curr) => `${prev}${curr.item.name}:${curr.quantity};`, '');

  handleSubmit = async ({
    age, genre, items, name,
  }) => {
    const {
      requestCreateUser,
      user: {
        data: { lonlat, id },
      },
    } = this.props;
    const { isEditing } = this.state;

    requestCreateUser();

    const formData = new FormData();
    formData.append('person[name]', name);
    formData.append('person[age]', +age);
    formData.append('person[gender]', genre);
    formData.append('person[lonlat]', lonlat);

    let response = {};
    if (isEditing) {
      response = await API.updateAccount(formData, id);
    } else {
      const itemsFormData = this.parseItemsFormData(items);
      formData.append('items', itemsFormData);
      response = await API.postSurvivor(formData);
    }

    this.handleResponse(response, { items });
  };

  handleResponse = (response, { items }) => {
    const {
      history, requestUserSuccess, requestUserFailed, storeItems,
    } = this.props;
    const { id } = response;

    if (!id) return requestUserFailed(response);

    storeItems(items);
    requestUserSuccess(response);
    return history.push('/');
  };

  render() {
    const {
      user: { data, error, loading },
    } = this.props;
    const { lonlat } = data;

    const { isEditing } = this.state;

    return (
      <Container>
        <Header>
          {isEditing ? 'Edit profile' : 'New account '}
          <Floating onClick={this.handleClose} isLoading={loading}>
            <Icon name="close" />
          </Floating>
        </Header>

        {loading ? (
          <Loading />
        ) : (
          <Button color="blacker" type="submit" form="profile-form">
            Save
          </Button>
        )}

        <Profile
          data={data}
          boxTitle={isEditing ? 'Pick new items' : 'Choose your items'}
          onHandleSubmit={this.handleSubmit}
          apiErrors={error}
        />

        <Box title={isEditing ? 'Update your location' : 'Select your current location'} withBorder>
          <Maps
            markers={[lonlat]}
            onReady={this.getUserLocation}
            onMarkerDragEnd={this.onMarkerChangeHandler}
            onMapClick={this.onMapClickHandler}
            center={lonlat}
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
    storeItems,
    requestCreateUser,
    requestUserSuccess,
    requestUserFailed,
  },
)(Account);
