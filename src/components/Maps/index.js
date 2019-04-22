import React from 'react';
import t from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import Loading from '../Loading';

import Container from './styles';

const propTypes = {
  onReady: t.func.isRequired,
  google: t.shape({
    maps: t.object,
  }).isRequired,
  markers: t.arrayOf(t.object),
  onMarkerDragEnd: t.func,
  onMapClick: t.func,
};

const defaultProps = {
  markers: [],
  onMarkerDragEnd: () => {},
  onMapClick: () => {},
};

const Maps = ({
  onReady, onMarkerDragEnd, google, markers, onMapClick,
}) => (
  <Container>
    <Map google={google} zoom={14} onClick={onMapClick} onReady={onReady} center={markers[0]}>
      {markers.length > 0
        && markers.map(mark => (
          <Marker
            key={JSON.stringify(mark)}
            title="The marker`s title will appear as a tooltip."
            draggable
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
