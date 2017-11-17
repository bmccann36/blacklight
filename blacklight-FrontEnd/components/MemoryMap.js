'use strict';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import FrontPage from './FrontPage';
import MemoryList from './MemoryList';

export default class MemoryMap extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>working</Text>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  }
});

