'use strict';
import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store, { watchLocation, stopWatching } from './store';


import Router from './Router';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}
