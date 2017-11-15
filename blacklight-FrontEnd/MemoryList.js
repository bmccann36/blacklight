import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>THIS IS GOING TO BE A LIST OF MEMORIES</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center'
  }
});
