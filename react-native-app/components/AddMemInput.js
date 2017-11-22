

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { commitMemory } from '../store';


class AddMemInput extends Component {
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
    const { latitude, longitude } = this.props.memLocation;
    const { title, text } = this.state;
    this.setState({ title: '', text: '' });
    this.props.commitMemory(
      {
        title,
        text,
        lat: latitude,
        lng: longitude,
      });
    console.log(this.state)

  }

  render() {
    // console.log(this.props.memLocation);
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


// const mapState = state => ({
//   title: state.memEntry.title,
//   text: state.memEntry.text,
//   latitude: state.memEntry.location.latitude,
//   longitude: state.memEntry.location.longitude,
// });

const mapDispatch = { commitMemory };

export default connect(null, mapDispatch)(AddMemInput);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },


});
