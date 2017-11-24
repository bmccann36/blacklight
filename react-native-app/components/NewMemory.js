import React, { Component } from 'react';
import { StyleSheet, Text, View, AlertIOS } from 'react-native';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import AddMemMap from './Map';


export default class NewMemory extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{ flex: 1 }} >
        <AddMemMap />
      </View>
    );
  }
}


