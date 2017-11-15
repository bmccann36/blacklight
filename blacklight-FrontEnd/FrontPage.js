import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MemoryList from './MemoryList';

export default class App extends Component {


  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>THIS IS THE FRONT PAGE</Text>
        <Text style={styles.subText}>THE MAP WILL BE HERE</Text>
        <Button
          onPress={() => navigate('MemoryList', {})}
          title='Go to memories'
          color='red'
        />

      </View>
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
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  }
});
