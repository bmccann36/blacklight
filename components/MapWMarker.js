import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');


export default function Map(props) {
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
    <View style={styles.container}>
      <MapView
        initialRegion={props.initialRegion}
        style={styles.map}
        region={props.currentLocation}
        rotateEnabled={false}
        mapType='satellite'
      >
        {callouts}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  map: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    paddingVertical: 5
  },
  calloutText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
