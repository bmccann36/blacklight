

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements';
import { StyleSheet, Text, View, AlertIOS } from 'react-native';
import MapView from 'react-native-maps';

import Map from './Map';
import AddMemInput from './AddMemInput';
import { Actions } from 'react-native-router-flux';

import { titleChanged, textChanged, receivedLocation, commitMemory } from '../store';

export default class AddMemory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memoryLocation: {},
    };
  }

  componentDidMount() {
    AlertIOS.alert(
      'Choose Location',
      'use your current location or drop a pin to set location',
      [
        { text: 'use my location', onPress: () => Actions.addMemInput() },
        { text: 'drop pin' },
      ],
    );
  }


  handlePress() {
    Actions.addMemInput(this.state.droppedPin); // route to addMemInput, passing the coordinates
  }
  setMemoryLocation(loc) {
    this.setState({ memoryLocation: loc });
  }

  render() {
    console.log(this.state.memoryLocation)
    return (
      <View style={{ flex: 1 }}>
        <Map
          setMemoryLocation={this.setMemoryLocation.bind(this)}
        />
        <View style={styles.buttonArea}>
          <Text> button area </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  buttonArea: {
    height: 30,
  },
};
