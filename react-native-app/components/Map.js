import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

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


export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: {
        latitude: 40.705076,
        longitude: -74.0113487,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markerPosition: {
        latitude: 40.705076,
        longitude: -74.0113487,
      },
      droppedPin: false,
      watchID: '',
    };
  }

  componentDidMount() {
    console.log(this.props)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          currentLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
          markerPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      }, error => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({
        currentLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        markerPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    });
    this.props.setMemoryLocation(this.state.markerPosition);
  }


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  attachAPin(event) {
    this.setState({ droppedPin: event.nativeEvent.coordinate });
    this.props.setMemoryLocation(event.nativeEvent.coordinate);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          onLongPress={e => this.attachAPin(e)}
          style={styles.map}
          region={this.state.currentLocation}
        >
          <MapView.Marker
            coordinate={this.state.markerPosition}>
            <View style={styles.radius}>
              <View style={styles.marker} />
            </View>
          </MapView.Marker>
          {this.state.droppedPin &&
            <MapView.Marker
              coordinate={this.state.droppedPin}
            />
          }

        </MapView>
      </View>
    );
  }
}
