import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    position: 'relative',
    flex: 1,
    width: 300,
    height: 400,
    paddingRight: 0,
    paddingBottom: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: 'white',

  },
  calloutTitle: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  calloutText: {
    color: 'black',
  },
});


export default function Map(props) {
  const callouts = props.memories.map(mem => (
    <MapView.Marker
      key={mem.id}
      coordinate={{ latitude: mem.lat, longitude: mem.lng }}
      title={mem.title}
      description={mem.text}>
      <MapView.Callout>
        <View style={styles.callout}>
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
      >
        {callouts}
      </MapView>
    </View>
  );
}

