'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import Router from './router'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
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
