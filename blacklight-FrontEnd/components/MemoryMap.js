'use strict';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('window');

import FrontPage from './FrontPage';
import MemoryList from './MemoryList';

// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA + ASPECT_RATIO;

class MemoryMap extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentLocation: {
        latitude: 40.705076,
        longitude: -74.0113487,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markerPosition: {
        latitude: 40.705076,
        longitude: -74.0113487
      }
    };
  }

  watchID = ''

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      });
      this.setState({
        markerPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    }, (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        currentLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      });

      this.setState({
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
    const { memories } = this.props;


    // console.log('******', memories)
    if (memories) {
      return (
        <View style={styles.container}>
          <MapView

            style={styles.map}
            region={this.state.currentLocation}
          >
            {
              <MapView.Marker

                coordinate={this.state.markerPosition}>
                <View style={styles.radius}>
                  <View style={styles.marker} />
                </View>
              </MapView.Marker>
            }

            {
              memories.map(mem => (
                <MapView.Marker
                  key={mem.id}
                  coordinate={{ latitude: mem.lat, longitude: mem.lng }}
                  // image={require('../images/crystal.png')}
                  title={mem.title}
                  description={mem.text}>
                    <MapView.Callout>
                    <View style={styles.callout}>
                    <Text style={styles.calloutTitle}>{mem.title}</Text>
                    <Text style={styles.calloutText}>{mem.text}</Text>
                  </View>
                  </MapView.Callout>
                </MapView.Marker>
              ))}
          </MapView>
        </View>
      );
    } else {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }
  }
}

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
    alignItems: 'center'
  },
  callout:{
    position: 'relative',
    flex:1,
    width: 300,
    height: 400,
    paddingRight: 0,
    paddingBottom: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: 'white',

  },
  calloutTitle:{
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  calloutText:{
    color : 'black'
  }
});


const mapStateToProps = (state) => ({
  memories: state.memory
});

export default connect(mapStateToProps)(MemoryMap);




