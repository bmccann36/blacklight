import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FrontPage from './FrontPage';
import MemoryList from './MemoryList';




const Views = StackNavigator({
  Home: { screen: FrontPage },
  MemoryList: { screen: MemoryList }
});

export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Views />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
