
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements';
import { View, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { commitMemory } from '../store';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
};

class RecordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
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
  handleSubmit() {
    const { latitude, longitude } = this.props;
    const { title, text } = this.state;
    this.setState({ title: '', text: '' });
    this.props.commitMemory({
      title,
      text,
      lat: latitude,
      lng: longitude,
    });
    Actions.mainTab(); // REDIRECT TO MAIN TAB
    Alert.alert('Memory Saved!');
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

export default connect(null, mapDispatch)(RecordInput);

