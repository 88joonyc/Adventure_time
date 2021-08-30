import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const dimensions = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.7518,
  lng: -73.98728
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',

  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const res = new window.google.maps.LatLngBounds();
    map.fitBounds(res);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={dimensions}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map
