import React from 'react';
import t from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import Loading from '../Loading';

import Container from './styles';

const propTypes = {
  onReady: t.func,
  onMapClick: t.func,
  onMarkerDragEnd: t.func,

  google: t.shape({
    maps: t.object,
  }).isRequired,

  markers: t.arrayOf(t.string),

  center: t.string,
  readOnly: t.bool,
  zoom: t.number,
};

const defaultProps = {
  onReady: () => {},
  onMapClick: () => {},
  onMarkerDragEnd: () => {},

  markers: [],

  center: '',
  readOnly: false,
  zoom: 14,
};

const parsePointToLonlat = (point) => {
  const formattedPoint = point.replace(/[a-zA-Z()]|\s\(/g, '');
  const lonlat = formattedPoint.split(' ');
  return { lat: lonlat[0], lng: lonlat[1] };
};

const getLocations = markers => markers.filter(e => !!e).map(parsePointToLonlat);

const Maps = ({
  onReady,
  onMarkerDragEnd,
  google,
  markers,
  onMapClick,
  readOnly,
  zoom,
  center,
}) => {
  const locations = getLocations(markers);
  const centerLonlat = parsePointToLonlat(center);

  return (
    <Container>
      <Map
        google={google}
        zoom={zoom}
        clicable={!readOnly}
        onClick={onMapClick}
        onReady={onReady}
        center={centerLonlat}
      >
        {locations.length > 0
          && locations.map(mark => (
            <Marker
              key={JSON.stringify(mark).concat(Math.random())}
              draggable={!readOnly}
              onDragend={onMarkerDragEnd}
              position={{ lat: mark.lat, lng: mark.lng }}
            />
          ))}
      </Map>
    </Container>
  );
};

Maps.propTypes = propTypes;
Maps.defaultProps = defaultProps;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDlAR3FiEF2YJ-JYahQLh1Xh9gRLUUqijM',
  LoadingContainer: Loading,
})(Maps);
