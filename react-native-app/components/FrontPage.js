'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';
import { TabNavigator, DrawerNavigator } from 'react-navigation';

import MemoryList from './MemoryList';
import MemoryMap from './MemoryMap';

export default class FrontPage extends Component {

  // static navigationOptions = {
  //   title: 'Blacklight',
  // };

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>THIS IS THE FRONT PAGE</Text>
        <Text style={styles.subText}>THE MAP WILL BE HERE</Text>
        <Button
        onPress={() => navigate('MemoryMap', {})}
        title='Go to Map'
        color='red'
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   fontSize: 40,
  //   fontWeight: 'bold',
  //   color: 'white',
  //   textAlign: 'center'
  // },
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  }
});


        // <Button
        //   onPress={() => navigate('MemoryList', {})}
        //   title='Go to memories'
        //   color='red'
        // />
