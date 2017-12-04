'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { View, AlertIOS, KeyboardAvoidingView } from 'react-native';
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
      // authorId: this.props.user.id,
    });
    AlertIOS.alert(
      'Memory Saved!',
      '',
      [
        {
          text: 'ok', onPress: () => Actions.nearbyTab(),
        }
      ]
    );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.formContainer}>
          <FormLabel>Title</FormLabel>
          <FormInput
            style={styles.titleInput}
            placeholer="Title"
            color="#FFFFFF"
            onChangeText={this.handleTitle}
          />
          <FormLabel>YOUR STORY</FormLabel>

          <FormInput
            style={styles.textInput}
            placeholer="Your Story"
            multiline
            numberOfLines={7}
            color="#FFFFFF"
            onChangeText={this.handleText}
            value={this.state.text}
          />

          <View>
            <Button
              style={styles.buttonStyle}
              small
              backgroundColor="#ffffff"
              title="RECORD"
              color='#000000'
              onPress={this.handleSubmit}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapState = state => ({ currentPosition: state.position, user: state.user });

const mapDispatch = { commitMemory };

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  formContainer: {
    margin: 100
  },
  textInput: {
    height: 270,
    borderColor: 'gray',
    fontSize: 20,
    color: '#ffffff',
    padding: 30
  },
  titleInput: {
    height: 60,
    fontSize: 20,
    marginBottom: 20,
    padding: 30
  },
  buttonStyle: {
    backgroundColor: '#000000',
    padding: 10
  },
};


export default connect(mapState, mapDispatch)(RecordInput);
