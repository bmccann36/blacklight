import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class MapTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    };
  }
  watchID = ''

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        currentLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        markerPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }


  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        {/* <Text> test </Text> */}
        <MapView
          style={styles.map}
          region={this.state.currentLocation}
        >
          <MapView.Marker
            coordinate={this.state.markerPosition}>
            <View style={styles.radius}>
              <View style={styles.marker} />
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    )
  }
}


const styles = {
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
    alignItems: 'center'
  },
};
