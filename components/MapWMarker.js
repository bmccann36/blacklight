import React from 'react';
import { MapView } from 'expo';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const icon = require('../images/blacklightIcon.png');

export default function MapWMarker(props) {
  const callouts = props.memories.map(mem => (
    <MapView.Marker
      key={mem.id}
      coordinate={{ latitude: mem.lat, longitude: mem.lng }}
      title={mem.title}
      description={mem.text}
    >
      <MapView.Callout style={styles.callout}>
        <View>
          <Text style={styles.calloutTitle}>{mem.title}</Text>
          <Text style={styles.calloutText}>{mem.text}</Text>
        </View>
      </MapView.Callout>
    </MapView.Marker>
  ));
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={props.initialRegion}
      markerPostion={props.markerPostion}
      // mapType="satellite"
    >
      <MapView.Marker // current position marker
        coordinate={props.markerPosition}
        image={icon}
      />
      {callouts}
    </MapView>
  );
}

const styles = {
  callout: {
    width: 250,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#1c5a60',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',

  },
  calloutTitle: {
    fontSize: 16,
    color: '#d31b58',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  calloutText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
};
