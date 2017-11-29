import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


export default function Map(props) {
  return (
    <View style={styles.container}>
      <MapView
        mapType='satellite'
        initialRegion={props.initialRegion}
        onLongPress={e => props.attachAPin(e)}
        style={styles.map}
        region={props.currentLocation}
        rotateEnabled={false}
      >
        <MapView.Marker // CURRENT POSITION MARKER
          coordinate={props.markerPosition}
        >
          <View style={styles.radius}>
            <View style={styles.marker} />
          </View>
        </MapView.Marker>
        {props.droppedPin && // RENDER PIN WHEN IT'S DEFINED
          <MapView.Marker
            coordinate={props.droppedPin}
          />
        }
      </MapView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
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
    justifyContent: 'center',
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
});
