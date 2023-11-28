//al momento non usato

import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ apiKey, start, end }) => {
  const renderMarkers = (map, maps) => {
    new maps.Marker({ position: start, map });
    new maps.Marker({ position: end, map });

    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer();

    directionsRenderer.setMap(map);

    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
      },
      (response, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        } else {
          console.error(`error fetching directions ${response}`);
        }
      }
    );
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={start}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </div>
  );
};

export default Map;
