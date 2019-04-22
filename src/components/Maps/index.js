import React from 'react';
import t from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import Loading from '../Loading';

import Container from './styles';

const propTypes = {
  onReady: t.func,
  google: t.shape({
    maps: t.object,
  }).isRequired,
  markers: t.arrayOf(t.object),
  onMarkerDragEnd: t.func,
  onMapClick: t.func,
  readOnly: t.bool,
};

const defaultProps = {
  onReady: () => {},
  markers: [],
  onMarkerDragEnd: () => {},
  onMapClick: () => {},
  readOnly: false,
};

const Maps = ({
  onReady, onMarkerDragEnd, google, markers, onMapClick, readOnly,
}) => (
  <Container>
    <Map
      google={google}
      zoom={14}
      clicable={!readOnly}
      onClick={onMapClick}
      onReady={onReady}
      center={markers[0]}
    >
      {markers.length > 0
        && markers.map(mark => (
          <Marker
            key={JSON.stringify(mark).concat(Math.random())}
            title="The marker`s title will appear as a tooltip."
            draggable={!readOnly}
            name="SOMA"
            onDragend={onMarkerDragEnd}
            position={{ lat: mark.lat, lng: mark.lng }}
          />
        ))}
    </Map>
  </Container>
);

Maps.propTypes = propTypes;
Maps.defaultProps = defaultProps;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDlAR3FiEF2YJ-JYahQLh1Xh9gRLUUqijM',
  LoadingContainer: Loading,
})(Maps);
