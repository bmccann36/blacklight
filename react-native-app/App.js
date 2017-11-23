'use strict';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigator, TabNavigator, TabRouter } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import { Icon } from 'react-native-elements';
import Router from './Router';

import MemoryList from './components/MemoryList';
import Home from './components/Home';
import User from './components/User';
import MemoryMap from './components/MemoryMap';



import SingleMemoryView from './components/SingleMemoryView';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
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
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});
