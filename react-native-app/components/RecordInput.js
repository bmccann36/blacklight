import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements';
import { View, Alert, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { commitMemory } from '../store';


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

  // if dropped pin???

  handleSubmit() {
    // IF THE DROPPEDPIN PROP HAS BEEN PASSED DOWN BY RECORD COMPONENT THROUGH ROUTER THE MEMORY LOCATION WILL BE SET TO DROPPEDPIN ELSE IT WILL SET TO CURRENTPOSITION
    const loc = this.props.droppedPin ? this.props.droppedPin : this.props.currentPosition;
    const { title, text } = this.state;
    this.setState({ title: '', text: '' });
    this.props.commitMemory({
      title,
      text,
      lat: loc.latitude,
      lng: loc.longitude,
      authorId: this.props.user.id,
    });
    // Actions.mainTab(); // REDIRECT TO MAIN TAB
    Alert.alert('Memory Saved!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Card title="Enter your story">
          <FormLabel>Title</FormLabel>
          <FormInput
            onChangeText={this.handleTitle}
          />
          <FormLabel>Text</FormLabel>
          <TextInput
            style={styles.textInput}
            multiline
            onChangeText={this.handleText}
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
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    height: 350, borderColor: 'gray', borderWidth: 1, fontSize: 20,
  },
};

const mapState = state => ({ currentPosition: state.position, user: state.user });

const mapDispatch = { commitMemory };

export default connect(mapState, mapDispatch)(RecordInput);