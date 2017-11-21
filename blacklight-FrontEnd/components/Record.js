import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements'

import { titleChanged, textChanged, receivedLocation, commitMemory } from '../store'


class Record extends Component {
  // handleTitle() {
  //   const title = 'JABBERWOCKY'
  //   this.props.titleChanged(title)
  // }
  // handleText() {
  //   let text = " Twas brillig, and the slithy toves Did gyre and gimble the wabe: All mimsy were the borogoves, And the mome raths outgrabe"
  //   this.props.textChanged(text)
  // }

  handleSubmit() {
    const { latitude, longitude, title, text } = this.props
    this.props.commitMemory(
      {
        title: title,
        text: text,
        lat: latitude,
        lng: longitude
      }
    )
  }

  componentWillMount() {
    this.props.receivedLocation({ latitude: -70.43, longitude: 40.56 })
    let text = " Twas brillig, and the slithy toves Did gyre and gimble the wabe: All mimsy were the borogoves, And the mome raths outgrabe"
    this.props.textChanged(text)
    const title = 'JABBERWOCKY'
    this.props.titleChanged(title)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <Card>
          <Text style={styles.text}>Title</Text>
          <Button
            small
            onPress={this.handleTitle.bind(this)}
            title='test title' />
        </Card>
        <Card>
          <Text style={styles.text}>Text</Text>
          <Button
            small
            onPress={this.handleText.bind(this)}
            title=' test text' />
        </Card> */}
        <Card>
          <Button
            small
            onPress={this.handleSubmit.bind(this)}
            title='SUBMIT' />
        </Card>
      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  title: state.memEntry.title,
  text: state.memEntry.text,
  latitude: state.memEntry.location.latitude,
  longitude: state.memEntry.location.longitude
});

const mapDispatchToProps = { titleChanged, textChanged, receivedLocation, commitMemory }

export default connect(mapStateToProps, mapDispatchToProps)(Record);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});


