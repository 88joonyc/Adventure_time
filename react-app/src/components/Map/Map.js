import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const dimensions = {
  width: '100%',
  height: '500px',
};

function Map({props}) {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  // })

  const [map, setMap] = React.useState(null)

  // const Marker = (('42', '-37') => (
  //   <>
  //     <div>
  //       <img src='23kbr2' />
  //     </div>
  //   </>
  // ))

  const onLoad = React.useCallback(function callback(map) {
    const res = new window.google.maps.LatLngBounds();
    map.fitBounds(res);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  // const dismap = new window.google.maps.Map({
  //   zoom: 18
  // })



  const here = new window.google.maps.Marker({
    position: {lat:props.latitude, lng:props.longitude},
    map: map,

  })

  return true ? (
      <GoogleMap
        mapContainerStyle={dimensions}
        center={{lat: props.latitude, lng:props.longitude}}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map
