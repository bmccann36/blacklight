
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements';
import { StyleSheet, View, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { commitMemory } from '../store';

class AddMemInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'test title',
      text: 'test memory',
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitle(title) {
    this.setState({ title });
  }

  handleText(text) {
    this.setState({ text });
  }

  doSomething() {
    console.log('fire')
    Actions.memoryListMain()
  }


  handleSubmit() {
    const { latitude, longitude } = this.props;
    const { title, text } = this.state;
    this.setState({ title: '', text: '' });
    this.props.commitMemory(
      {
        title,
        text,
        lat: latitude,
        lng: longitude,
      });
    Alert.alert('Memory Saved!');
    Actions.memoryListMain();
  }


  render() {
    return (
      <View style={styles.container}>
        <Card title="Enter your story">
          <FormLabel>Title</FormLabel>
          <FormInput
            onChangeText={this.handleTitle}
            value={this.state.title}
          />

          <FormLabel>Text</FormLabel>
          <FormInput
            onChangeText={this.handleText}
            value={this.state.text}
          />

          <Button
            small
            backgroundColor="#00BFFF"
            onPress={this.handleSubmit}
            title="submit"
          />
        </Card>
      </View>
    );
  }
}

const mapDispatch = { commitMemory };

export default connect(null, mapDispatch)(AddMemInput);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },


});
