import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';


export default class NewMemory extends Component {

  handlePress() {
    console.log('press')
    Actions.addMemMap()
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter Memory</Text>
        <Card>
          <Button
            title="Leave a memory here"
          />
        </Card>
        <Card>
          <Button
            title="Leave a memory somewhere else"
            onPress={this.handlePress}
          />
        </Card>
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
    fontSize: 20,
    textAlign: 'center',
  },
});
