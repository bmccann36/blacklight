'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { titleChanged, textChanged, receivedLocation, commitMemory } from '../store'


class AddMemInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: '',
    }
  }
  handleTitle(title) {
    this.setState({ title })
  }

  handleText(text) {
    this.setState({ text })
    console.log(this.state)
  }

  attachAPin(event) {
    console.log('event', event.nativeEvent.coordinate)
    // this.props.receivedLocation(event.nativeEvent.coordinate)
    // this.setState({ droppedPin: event.nativeEvent.coordinate })
  }

  render() {
    return (
      <View style={styles.container}>
        <Card title='Enter your story'>
          <FormLabel>Title</FormLabel>
          <FormInput onChangeText={this.handleTitle} />

          <FormLabel>Text</FormLabel>
          <FormInput onChangeText={this.handleText} />

          <Button
            small
            backgroundColor='#00BFFF'
            onPress={this.handleSubmit}
            title='submit'
          />
        </Card>
      </View>
    );
  }
}


const mapState = state => ({
  title: state.memEntry.title,
  text: state.memEntry.text,
  latitude: state.memEntry.location.latitude,
  longitude: state.memEntry.location.longitude,
});

const mapDispatch = { titleChanged, textChanged, receivedLocation, commitMemory }

export default connect(mapState, mapDispatch)(AddMemInput);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },


});
