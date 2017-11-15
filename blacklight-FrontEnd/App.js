import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect, Provider } from 'react-redux';

import FrontPage from './FrontPage';
import MemoryList from './MemoryList';
import store from './store'



const Views = StackNavigator({
  Home: { screen: FrontPage },
  MemoryList: { screen: MemoryList }
});

export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Views />
        </View>
      </Provider>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
