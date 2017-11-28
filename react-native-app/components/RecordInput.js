
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { View, Alert, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@expo/vector-icons'

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
          <FormLabel>Title</FormLabel>
          <FormInput style={styles.input}
            placeholer="Title"
            color="#FFFFFF"
            onChangeText={this.handleTitle}
          />
          <FormLabel>YOUR STORY</FormLabel>

          <TextInput style={styles.textInput}
            placeholer="Your Story"
            color="#FFFFFF"
            multiline
            onChangeText={this.handleText}
            value={this.state.text}
        />

          <View style={styles.buttonArea}>
            <Button style={styles.buttonStyle}
              small
              title="SUBMIT"
              backgroundColor="#ffffff"

              title="RECORD AT PIN"
              color='#000000'
              onPress={this.handleSubmit}
            />
          </View>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textInput: {
    height: 270,
    borderColor: 'gray',
    // borderWidth: 0,
    fontSize: 20,
    color: '#ffffff',
    padding: 10
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(192,192,192,0.3)',
    marginBottom: 20,
    // padding: 10
  },
  // buttonArea: {
  //   flex: 1,
  // },
  buttonStyle: {
    backgroundColor:'#000000',
    padding: 10
  }
};

const mapState = state => ({ currentPosition: state.position, user: state.user });

const mapDispatch = { commitMemory };

export default connect(mapState, mapDispatch)(RecordInput);




