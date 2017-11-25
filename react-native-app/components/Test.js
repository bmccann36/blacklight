
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// import { Actions } from 'react-native-router-flux';


export default class Test extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>TEST COMPONENT</Text>

      </View>
    );
  }
}



const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
};
