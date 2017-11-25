

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
      latitude: 0,
      longitude: 0,
      disableButton: true,
    }
  }

  componentDidMount() {
    AlertIOS.alert(
      'Choose Location',
      'use your current location or drop a pin to set location',
      [
        {
          text: 'use my location', onPress: () => {
            Actions.addMemInput(this.state)
          }
        },
        { text: 'drop pin' },
      ],
    );
  }


  setMemoryLocation(loc) {
    this.setState({ latitude: loc.latitude, longitude: loc.longitude });
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.map}>
          <Map
            setMemoryLocation={this.setMemoryLocation.bind(this)}
          />
        </View>
        <View style={styles.buttonArea}>
          <Button
            small
            backgroundColor="#00BFFF"
            title="record"
            disabled={this.state.disableButton}
          />
        </View>
      </View >
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  map: {
    flex: 5,
  },
  buttonArea: {
    flex: 1,
  },
};
