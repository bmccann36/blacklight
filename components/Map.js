import React from 'react';
import { MapView } from 'expo';
import { StyleSheet, View } from 'react-native';
const icon = require('../images/blacklightIcon.png');


export default function Map(props) {
  // const defaultRegion = { latitude: 40.705825, longitude: -74.007879 }
  console.log(props)
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={props.initialRegion}
      markerPostion={props.markerPostion}
      onLongPress={e => props.attachAPin(e)}
    >
      <MapView.Marker // current position marker
        coordinate={props.markerPosition}
        image={icon}
      />
      {props.droppedPin && // RENDER PIN WHEN IT'S DEFINED
        <MapView.Marker
          coordinate={props.droppedPin}
        />
      }
    </MapView>
  );
}

///

