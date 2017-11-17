import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator, TabNavigator, TabRouter } from 'react-navigation';
import { Provider } from 'react-redux';
import store from '../store';

import FrontPage from './FrontPage';
import MemoryList from './MemoryList';
import Home from './Home';
import User from './User';
import MemoryMap from './MemoryMap';

// const MyApp = TabRouter({
//   Home: {screen: Home},
//   User: {screen: User}
// })

const TabNav = TabNavigator({
  Home: { screen: Home },
  Memories: { screen: MemoryList },
  Map: { screen: MemoryMap },
  User: { screen: User },
}, {
  tabBarPosition: 'bottom',
  // animationEnabled: true,
  // tabBarOptions: {
  //   style: {position: 'absolute', flex: 1},
  //   activeTintColor: '#e91e63',
  // },
});

// const Views = StackNavigator({
//   Home: { screen: Home },
//   MemoryList: { screen: MemoryList }
// });




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
