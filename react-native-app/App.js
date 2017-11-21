'use strict';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator, TabNavigator, TabRouter } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import { Icon } from 'react-native-elements';

import MemoryList from './components/MemoryList';
import Home from './components/Home';
import User from './components/User';
import MemoryMap from './components/MemoryMap';
import AddMemory from './components/AddMemory';
import Login from './components/Login';

import SingleMemoryView from './components/SingleMemoryView';


//memories stack nav config
const Views = StackNavigator({
  MemoryList: {
    screen: MemoryList


  },
  SingleMemoryView: {
    screen: SingleMemoryView
  }
});

//tabs configuration
const TabNav = TabNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    }
  },
  Memories: {
    screen: Views,
    navigationOptions: {
      tabBarLabel: "Memories",
      tabBarIcon: ({ tintColor }) => <Icon name="menu" size={35} color={tintColor} />
    }
  },
  Map: {
    screen: MemoryMap,
    navigationOptions: {
      tabBarLabel: "Map",
      tabBarIcon: ({ tintColor }) => <Icon name="map" size={35} color={tintColor} />
    }
  },
  Post: {
    screen: AddMemory,
    navigationOptions: {
      tabBarLabel: "Post Memory",
      tabBarIcon: ({ tintColor }) => <Icon name="note-add" size={35} color={tintColor} />
    }
  },
  Login: { screen: Login } // can I throw this here and have it render??

}, {
    tabBarPosition: 'bottom',
    // animationEnabled: true,
    // tabBarOptions: {
    //   style: {position: 'absolute', flex: 1},
    //   activeTintColor: '#e91e63',
    // },
  });


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TabNav />
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
