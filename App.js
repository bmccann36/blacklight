'use strict';
import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';

import { AppLoading, Asset, Font } from 'expo';
import { Feather, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';

import Router from './Router';

export default class App extends Component {

  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./images/wallpaper.jpg'),
        require('./images/city.jpg'),
        require('./images/blacklightIcon.png'),
        require('./images/light.jpg'),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...Feather.font,
        ...MaterialIcons.font,
        ...FontAwesome.font,
        ...Entypo.font,
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };


  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <Router />
          </View>
        </Provider>
      );
    }
  }
}
