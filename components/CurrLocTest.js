import React from 'react';
import AR from './AR';

import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import Expo from 'expo';
import geolib from 'geolib';
import { View, Text } from 'react-native';
console.disableYellowBox = true;


export default class locTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0
    };
  }

  componentDidMount() {
    let intvl = setInterval(() => {
      Expo.Location.getCurrentPositionAsync({ enableHighAccuracy: true })
        .then((result) => {
          let lat = result.coords.latitude
          let lng = result.coords.longitude
          this.setState({ lat: lat, lng: lng });
        });
    }, 100);

    this.setState({ intvl });
  }

  componentWillUnmount() {
    if (typeof this.state.intvl === 'function') {
      this.state.intvl();
      this.setState({ intvl: null });
    }
  }



  render() {
    const ourCorner = this.state.lng >= -74.0092 ? 'ourCorner' : 'otherCorner';

    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text> Test test  </Text>
        <Text> {this.state.lat} </Text>
        <Text> {this.state.lng} </Text>
        <Text> {ourCorner} </Text>
      </View>
    );
  }
}