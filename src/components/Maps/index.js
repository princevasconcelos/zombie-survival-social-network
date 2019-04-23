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
  markers: t.arrayOf(t.string),
  onMarkerDragEnd: t.func,
  onMapClick: t.func,
  readOnly: t.bool,
};

const defaultProps = {
  onReady: () => {},
  onMarkerDragEnd: () => {},
  onMapClick: () => {},
  markers: [],
  readOnly: false,
};

const getLocations = markers => markers
  .filter(e => !!e)
  .map(r => r.replace(/[a-zA-Z()]|\s\(/g, ''))
  .map((t) => {
    const lonlat = t.split(' ');
    return { lat: lonlat[0], lng: lonlat[1] };
  });

const Maps = ({
  onReady, onMarkerDragEnd, google, markers, onMapClick, readOnly,
}) => {
  const locations = getLocations(markers);

  return (
    <Container>
      <Map
        google={google}
        zoom={14}
        clicable={!readOnly}
        onClick={onMapClick}
        onReady={onReady}
        center={locations[0]}
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
