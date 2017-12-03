import React from 'react';
import { MapView } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
const icon = require('../images/blacklightIcon.png');


export default function Map(props) {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={props.initialRegion}
      markerPostion={props.markerPostion}
      onLongPress={e => props.attachAPin(e)}
      mapType="hybrid"
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

