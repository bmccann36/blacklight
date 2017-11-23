'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FrontPage from './FrontPage';

import User from './User';

export default class Home extends Component {


    render() {

      return (
        <View style={styles.container}>
          <Text style={styles.text}>WELCOME TO BLACKLIGHT</Text>
        </View>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center'
    },
    icon: {
      width: 26,
      height: 26,
    }
  });
